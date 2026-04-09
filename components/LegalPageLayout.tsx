import type { ReactNode } from "react";

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalPageLayout({
  title,
  subtitle,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Hero */}
      <div className="bg-[#1E3A5F] pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#4A7DB5] text-xs font-semibold tracking-[0.15em] uppercase mb-3">
            Don Mike Auto Dealership
          </p>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white tracking-[-0.02em] mb-3">
            {title}
          </h1>
          <p className="text-white/65 text-base">{subtitle}</p>
          <p className="text-white/40 text-sm mt-2">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(15,23,42,0.04),0_8px_24px_rgba(15,23,42,0.06)] p-8 sm:p-12">
          <div className="prose prose-slate max-w-none
            prose-h2:font-display prose-h2:font-bold prose-h2:text-[#1E3A5F] prose-h2:text-2xl prose-h2:tracking-[-0.01em] prose-h2:mt-10 prose-h2:mb-3
            prose-h3:font-display prose-h3:font-semibold prose-h3:text-[#1E3A5F] prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-2
            prose-p:text-[#475569] prose-p:leading-relaxed prose-p:text-sm
            prose-ul:text-[#475569] prose-ul:text-sm prose-li:leading-relaxed
            prose-a:text-[#1A56DB] prose-a:font-medium hover:prose-a:text-[#1547C0]
            prose-strong:text-[#1E3A5F]
          ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
