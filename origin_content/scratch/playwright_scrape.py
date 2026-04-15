import os
import aiohttp
import asyncio
from playwright.async_api import async_playwright
import urllib.parse
import re

urls = [
    "https://tdfaccounting.com/",
    "https://tdfaccounting.com/about-us/",
    "https://tdfaccounting.com/incorporation/",
    "https://tdfaccounting.com/open-business-accounts/",
    "https://tdfaccounting.com/accounting-services/",
    "https://tdfaccounting.com/tax-services/",
    "https://tdfaccounting.com/blog/",
    "https://tdfaccounting.com/contact-us/"
]

BASE_DIR = r"f:\4-13-TDF-website-rebuild\origin_content"
TEXTS_DIR = os.path.join(BASE_DIR, "texts")
IMAGES_DIR = os.path.join(BASE_DIR, "images")

os.makedirs(TEXTS_DIR, exist_ok=True)
os.makedirs(IMAGES_DIR, exist_ok=True)

downloaded_images = set()

async def download_image(url, session):
    if url in downloaded_images:
        return
    downloaded_images.add(url)
    
    try:
        if url.startswith('data:'):
            return
            
        async with session.get(url, timeout=10) as response:
            if response.status == 200:
                parsed_url = urllib.parse.urlparse(url)
                filename = os.path.basename(parsed_url.path)
                if not filename:
                    filename = "image_" + str(len(downloaded_images)) + ".jpg"
                
                # sanitize filename
                filename = re.sub(r'[\\/*?:"<>|]', "", filename)
                
                filepath = os.path.join(IMAGES_DIR, filename)
                
                # if file exists, append a number
                base, ext = os.path.splitext(filename)
                counter = 1
                while os.path.exists(filepath):
                    filepath = os.path.join(IMAGES_DIR, f"{base}_{counter}{ext}")
                    counter += 1
                
                content = await response.read()
                with open(filepath, 'wb') as f:
                    f.write(content)
                print(f"Downloaded: {filename}")
    except Exception as e:
        print(f"Failed to download {url}: {e}")

async def main():
    async with aiohttp.ClientSession() as session:
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            page = await browser.new_page()
            
            # intercept network to get all images and assets
            image_urls = []
            page.on("response", lambda response: image_urls.append(response.url) if response.request.resource_type in ["image", "font"] else None)

            for url in urls:
                try:
                    print(f"Processing: {url}")
                    await page.goto(url, wait_until="networkidle")
                    
                    # Get html
                    content = await page.content()
                    from bs4 import BeautifulSoup
                    soup = BeautifulSoup(content, 'html.parser')
                    
                    text_content = ""
                    for tag in soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li']):
                        text_content += f"{tag.name.upper()}: {tag.get_text(strip=True)}\n\n"
                    
                    parsed_url = urllib.parse.urlparse(url)
                    filename = parsed_url.path.strip('/').replace('/', '_')
                    if not filename:
                        filename = "home"
                    
                    with open(os.path.join(TEXTS_DIR, f"{filename}.txt"), 'w', encoding='utf-8') as f:
                        f.write(text_content)
                    print(f"Saved text: {filename}.txt")
                    
                    # Extract background images from elements
                    bg_images = await page.evaluate(r'''() => {
                        const urls = [];
                        const elements = document.querySelectorAll('*');
                        for (let el of elements) {
                            const bg = window.getComputedStyle(el).backgroundImage;
                            if (bg && bg !== 'none' && bg.startsWith('url(')) {
                                const url = bg.slice(4, -1).replace(/["']/g, "");
                                urls.push(url);
                            }
                        }
                        return urls;
                    }''')
                    
                    if type(bg_images) == list:
                        image_urls.extend(bg_images)
                        
                except Exception as e:
                    print(f"Error on {url}: {e}")
            
            await browser.close()
            
            print(f"Found {len(set(image_urls))} unique assets. Downloading...")
            tasks = []
            for img_url in set(image_urls):
                if img_url.startswith('http'):
                    tasks.append(download_image(img_url, session))
            
            if tasks:
                await asyncio.gather(*tasks)
                
if __name__ == "__main__":
    asyncio.run(main())
