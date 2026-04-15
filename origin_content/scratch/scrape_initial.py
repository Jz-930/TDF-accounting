import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

url = 'https://tdfaccounting.com/'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

try:
    response = requests.get(url, headers=headers, timeout=10)
    response.raise_for_status()
    soup = BeautifulSoup(response.content, 'html.parser')
    
    links = set()
    for a in soup.find_all('a', href=True):
        href = a['href']
        full_url = urljoin(url, href)
        if urlparse(full_url).netloc == urlparse(url).netloc:
            links.add(full_url)
    
    print(f"Title: {soup.title.string if soup.title else 'No Title'}")
    print(f"Internal Links found ({len(links)}):")
    for link in sorted(list(links))[:20]:
        print(link)
        
    print("\nSome sample text from body:")
    print(soup.body.get_text(strip=True)[:500])
except Exception as e:
    print(f"Error scraping: {e}")
