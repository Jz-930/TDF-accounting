import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Share2, Link as LinkIcon, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// This is a dummy page for demonstration.
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real app, fetch post data based on params.slug

  return (
    <article className="pb-24 pt-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal>
          <Link href="/blog" className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="mb-8 flex items-center space-x-4">
            <span className="bg-primary/10 text-primary px-3 py-1 text-sm font-semibold rounded-full">
              Tax Tips
            </span>
            <span className="text-text-muted text-sm font-medium">November 15, 2025</span>
            <span className="text-text-muted text-sm font-medium">• 5 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-12 leading-tight">
            Essential Year-End Tax Strategies for Small Businesses
          </h1>
        </ScrollReveal>

        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-16 shadow-lg">
          <Image 
            src="/images/hero-home.webp" 
            alt="Business tax planning" 
            fill
            className="object-cover"
          />
        </div>

        <div>
          <div className="prose prose-lg md:prose-xl prose-primary max-w-none text-text-secondary">
            <p className="lead text-xl text-text-primary font-medium mb-8">
              As the calendar year draws to a close, small business owners in Ontario must pivot their attention to year-end tax planning. Making smart moves before December 31st can significantly reduce your tax burden.
            </p>

            <h2>1. Defer Income to the Next Year</h2>
            <p>
              If your business operates on a cash accounting basis or if you have the flexibility to delay invoicing, it might be beneficial to defer income to January. This delays the tax liability on that income by a full year. However, this strategy only makes sense if you expect your marginal tax rate to remain the same or decrease next year.
            </p>

            <h2>2. Accelerate Expenses</h2>
            <p>
              Conversely, consider purchasing necessary equipment, office supplies, or prepaid services before the year ends. By accelerating these expenses, you increase your deductions for the current tax year. Make sure to consult the Capital Cost Allowance (CCA) rules if you are buying depreciable property.
            </p>

            <blockquote>
              "Proactive tax planning is not about evading taxes; it's about arranging your financial affairs in a way that minimizes the tax you are legally obligated to pay." — Jing Li, CPA
            </blockquote>

            <h2>3. Maximize RRSP Contributions</h2>
            <p>
              For business owners paying themselves a salary, maximizing Registered Retirement Savings Plan (RRSP) contributions is one of the most effective ways to reduce personal taxable income while saving for the future.
            </p>

            <div className="bg-off-white p-8 rounded-2xl border border-gray-100 my-10">
              <h4 className="text-xl font-bold text-primary mb-4">Need help with your corporate taxes?</h4>
              <p className="mb-0 text-base">
                TDF Accounting specializes in comprehensive corporate tax planning. Contact us today to schedule your year-end tax review before the deadline.
              </p>
            </div>
            
            <p>
              Remember to review all your financial statements and consult with your CPA before making any drastic moves. Every business is unique, and a tailored strategy is key.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="font-semibold text-text-primary">Share this post:</span>
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors">
                <LinkIcon className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
        </div>
        </div>
      </div>
    </article>
  );
}
