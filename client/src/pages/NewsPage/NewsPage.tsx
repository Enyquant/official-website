import React from 'react';
import { CalendarIcon } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SEO from '@/components/SEO';
import { localizedText, siteContent } from '@/content/site-content';
import { useLanguage } from '@/components/LanguageContext';

const NewsPage: React.FC = () => {
  const { language } = useLanguage();
  const seo = siteContent.seo.news;
  const news = siteContent.news;
  const breadcrumbs = [
    { name: localizedText(siteContent.navigation[0].label, language), path: '/' },
    { name: localizedText(siteContent.navigation[2].label, language), path: '/news' },
  ];

  return (
    <>
      <SEO
        title={localizedText(seo.title, language)}
        description={localizedText(seo.description, language)}
        keywords={localizedText(seo.keywords, language)}
        breadcrumbs={breadcrumbs}
      />

      <div className="relative overflow-hidden">
        <section className="relative mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-28 lg:px-20">
          <ScrollReveal direction="from-bottom" delay={100}>
            <div className="editorial-stack max-w-4xl">
              <p className="section-kicker">{localizedText(siteContent.identity.name, language)}</p>
              <h1 className="font-display text-[clamp(3rem,8vw,6rem)] font-semibold leading-[0.95] text-slate-950">
                {localizedText(news.heading, language)}
              </h1>
              <p className="text-[1.08rem] leading-8 text-slate-700 md:text-[1.16rem]">
                {localizedText(news.summary, language)}
              </p>
            </div>
          </ScrollReveal>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-28 md:px-12 lg:px-20">
          <div className="story-grid">
            {news.items.map((item, index) => (
              <ScrollReveal key={`${item.date.en}-${index}`} direction="from-bottom" delay={150 + index * 60}>
                <article className="surface-panel rounded-[1.8rem] p-6 md:p-8">
                  <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-start">
                    <div className="accent-rule editorial-stack gap-4">
                  <div className="flex items-center gap-2 text-[1rem] font-semibold tracking-[0.02em] text-slate-600">
                        <CalendarIcon className="size-4" />
                        <span>{localizedText(item.date, language)}</span>
                      </div>
                  <p className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-3.5 py-2 text-[0.95rem] font-medium text-sky-700 shadow-sm">
                        {localizedText(item.category, language)}
                      </p>
                    </div>

                    <div className="editorial-stack gap-3">
                      <h2 className="font-display text-[2rem] font-semibold leading-tight text-slate-950 md:text-[2.3rem]">
                        {localizedText(item.title, language)}
                      </h2>
                      <p className="text-[1rem] leading-8 text-slate-700">
                        {localizedText(item.summary, language)}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default NewsPage;
