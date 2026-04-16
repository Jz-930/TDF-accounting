import { PageHero } from "@/components/ui/PageHero";
import { BlogCard } from "@/components/blog/BlogCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const dict = await getDictionary(params.lang);
  return {
    title: dict.blog.title,
  };
}

export default async function BlogPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const dict = await getDictionary(params.lang);

  const posts = [
    {
      slug: "year-end-tax-strategies",
      title: dict.blog.dummyPosts[0].title,
      excerpt: dict.blog.dummyPosts[0].excerpt,
      date: "November 15, 2025",
      category: dict.blog.dummyPosts[0].category,
      imagePath: "/images/hero-home.webp"
    },
    {
      slug: "benefits-of-incorporation",
      title: dict.blog.dummyPosts[1].title,
      excerpt: dict.blog.dummyPosts[1].excerpt,
      date: "October 22, 2025",
      category: dict.blog.dummyPosts[1].category,
      imagePath: "/images/blog-cover-consultation.webp"
    },
    {
      slug: "cloud-accounting-transition",
      title: dict.blog.dummyPosts[2].title,
      excerpt: dict.blog.dummyPosts[2].excerpt,
      date: "September 08, 2025",
      category: dict.blog.dummyPosts[2].category,
      imagePath: "/images/cash-management-banner-pic.webp"
    }
  ];

  return (
    <>
      <PageHero 
        title={dict.blog.title}
        imagePath="/images/banner-blog.webp"
        breadcrumbs={[
          { label: dict.layout.navbar.home, href: `/${params.lang}` },
          { label: dict.blog.title }
        ]}
      />
      
      <section className="py-24 bg-off-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading 
              centered
              label={dict.blog.insightsLabel}
              title={dict.blog.latestPostsTitle}
              className="mb-16"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div key={post.slug}>
                <BlogCard {...post} lang={params.lang} readMoreText={dict.blog.readMore} />
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center font-medium shadow-sm">1</button>
              <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-text-secondary hover:border-primary hover:text-primary transition-colors flex items-center justify-center font-medium">2</button>
              <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-text-secondary hover:border-primary hover:text-primary transition-colors flex items-center justify-center font-medium">→</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
