import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imagePath: string;
  slug: string;
  lang: string;
  readMoreText: string;
}

export function BlogCard({ title, excerpt, date, category, imagePath, slug, lang, readMoreText }: BlogCardProps) {
  return (
    <Card className="h-full flex flex-col relative group border-gray-100 overflow-hidden">
      <Link href={`/${lang}/blog/${slug}`} className="block relative w-full aspect-[16/10] overflow-hidden">
        <Image 
          src={imagePath} 
          alt={title} 
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg">
          {category}
        </div>
      </Link>
      
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="text-sm text-text-muted mb-3 font-medium">{date}</div>
        
        <Link href={`/${lang}/blog/${slug}`}>
          <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        
        <p className="text-text-secondary leading-relaxed mb-6 line-clamp-3 flex-1">
          {excerpt}
        </p>
        
        <Link 
          href={`/${lang}/blog/${slug}`}
          className="inline-flex items-center text-sm font-bold tracking-wide text-primary uppercase group-hover:text-accent transition-colors mt-auto w-fit"
        >
          {readMoreText} <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </Card>
  );
}
