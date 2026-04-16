import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

interface ServiceDetailProps {
  content: ReactNode;
  imagePath: string;
  imageOnLeft?: boolean;
  listItems?: string[];
}

export function ServiceDetail({ content, imagePath, imageOnLeft = true, listItems }: ServiceDetailProps) {
  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className={cn("relative h-full min-h-[400px]", imageOnLeft ? "order-1" : "order-1 lg:order-2")}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src={imagePath} 
                alt="Service Detail" 
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className={cn("flex flex-col justify-center", imageOnLeft ? "order-2" : "order-2 lg:order-1")}>
            <h3 className="text-3xl font-bold text-text-primary mb-6">Service Detail</h3>
            <div className="prose prose-lg text-text-secondary mb-8 leading-relaxed">
              {content}
            </div>
            
            {listItems && listItems.length > 0 && (
              <ul className="space-y-4">
                {listItems.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mr-3 mt-1" />
                    <span className="text-text-primary font-medium text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
