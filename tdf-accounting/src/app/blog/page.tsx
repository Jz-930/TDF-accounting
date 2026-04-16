import { PageHero } from "@/components/ui/PageHero";
import { BlogCard } from "@/components/blog/BlogCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata = {
  title: 'Blog & Insights',
  description: 'Latest news, tax tips, and financial insights from the professionals at TDF Accounting.',
};

const DUMMY_POSTS = [
  {
    slug: "year-end-tax-strategies",
    title: "Essential Year-End Tax Strategies for Small Businesses",
    excerpt: "Maximize your deductions and prepare your business for the upcoming tax season with these essential year-end strategies.",
    date: "November 15, 2025",
    category: "Tax Tips",
    imagePath: "/images/hero-home.jpg"
  },
  {
    slug: "benefits-of-incorporation",
    title: "The Financial Benefits of Incorporating Your Business in Ontario",
    excerpt: "Understanding the tax implications, liability protection, and long-term advantages of moving from a sole proprietorship to a corporation.",
    date: "October 22, 2025",
    category: "Incorporation",
    imagePath: "/images/blog-cover-consultation.jpg"
  },
  {
    slug: "cloud-accounting-transition",
    title: "Why You Should Transition to Cloud Accounting Today",
    excerpt: "Discover how migrating to modern cloud-based accounting platforms can save your business time, money, and reduce data entry errors.",
    date: "September 08, 2025",
    category: "Tech & Finance",
    imagePath: "/images/cash-management-banner-pic.jpg"
  }
];

export default function BlogPage() {
  return (
    <>
      <PageHero 
        title="Blog & Insights"
        imagePath="/images/banner-blog.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" }
        ]}
      />
      
      <section className="py-24 bg-off-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading 
              centered
              label="Insights"
              title="Latest Posts"
              className="mb-16"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DUMMY_POSTS.map((post, index) => (
              <div key={post.slug}>
                <BlogCard {...post} />
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
