import React from 'react';
import { CompassIcon, LandmarkIcon, NetworkIcon, SparklesIcon } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SEO from '@/components/SEO';
import { localizedText, siteContent } from '@/content/site-content';
import { useLanguage } from '@/components/LanguageContext';

const missionIcons = [CompassIcon, SparklesIcon, NetworkIcon];

const AboutPage: React.FC = () => {
  const { language } = useLanguage();
  const seo = siteContent.seo.about;
  const about = siteContent.about;
  const breadcrumbs = [
    { name: localizedText(siteContent.navigation[0].label, language), path: '/' },
    { name: localizedText(siteContent.navigation[4].label, language), path: '/about' },
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
                {localizedText(about.title, language)}
              </h1>
              <p className="text-[1.08rem] leading-8 text-slate-700 md:text-[1.16rem]">
                {localizedText(about.subtitle, language)}
              </p>
            </div>
          </ScrollReveal>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-16 md:px-12 lg:px-20">
          <ScrollReveal direction="from-bottom" delay={150}>
            <div className="surface-panel rounded-[2rem] p-8 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="editorial-stack">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm">
                      <LandmarkIcon className="size-5" />
                    </div>
                    <h2 className="font-display text-3xl font-semibold text-slate-950 md:text-4xl">
                      {localizedText(about.company.title, language)}
                    </h2>
                  </div>

                  <p className="text-[1rem] leading-8 text-slate-700">
                    {localizedText(about.company.content, language)}
                  </p>
                  <p className="text-[1rem] leading-8 text-slate-600">
                    {localizedText(about.company.history, language)}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {about.company.coreBusiness.map((entry) => (
                      <span
                        key={localizedText(entry, language)}
                    className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-[0.96rem] font-medium text-slate-700 shadow-sm"
                      >
                        {localizedText(entry, language)}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="story-grid sm:grid-cols-2">
                  {about.company.highlights.map((highlight) => (
                    <div key={localizedText(highlight.label, language)} className="light-stage rounded-[1.4rem] p-5">
                    <p className="text-[0.94rem] font-semibold tracking-[0.03em] text-sky-700">
                        {localizedText(highlight.label, language)}
                      </p>
                      <p className="mt-4 text-[1rem] leading-8 text-slate-800">
                        {localizedText(highlight.value, language)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-16 md:px-12 lg:px-20">
          <ScrollReveal direction="from-bottom" delay={190}>
            <div className="editorial-stack">
              <p className="section-kicker">{localizedText(about.mission.title, language)}</p>
              <div className="story-grid lg:grid-cols-3">
                {about.mission.cards.map((item, index) => {
                  const Icon = missionIcons[index] ?? CompassIcon;

                  return (
                    <article key={item.key} className="surface-panel editorial-stack rounded-[1.8rem] p-6 md:p-7">
                      <div className="flex size-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="font-display text-[2rem] font-semibold text-slate-950">
                        {localizedText(item.title, language)}
                      </h3>
                      <p className="text-[1rem] leading-8 text-slate-700">
                        {localizedText(item.body, language)}
                      </p>
                      {item.bullets ? (
                        <ul className="space-y-3 text-[1rem] leading-8 text-slate-700">
                          {item.bullets.map((bullet) => (
                            <li key={localizedText(bullet, language)} className="border-l border-slate-200 pl-3">
                              {localizedText(bullet, language)}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </article>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-28 md:px-12 lg:px-20">
          <ScrollReveal direction="from-bottom" delay={230}>
            <div className="story-grid lg:grid-cols-[1fr_1fr]">
              <article className="surface-panel rounded-[1.8rem] p-7 md:p-8">
                <div className="editorial-stack">
                  <p className="section-kicker">{localizedText(about.serviceTargets.title, language)}</p>
                  <p className="text-[1rem] leading-8 text-slate-700">
                    {localizedText(about.serviceTargets.summary, language)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {about.serviceTargets.items.map((item) => (
                      <span
                        key={localizedText(item, language)}
                    className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-[0.96rem] font-medium text-slate-700 shadow-sm"
                      >
                        {localizedText(item, language)}
                      </span>
                    ))}
                  </div>
                </div>
              </article>

              <article className="surface-panel rounded-[1.8rem] p-7 md:p-8">
                <div className="editorial-stack">
                  <p className="section-kicker">{localizedText(about.marketFocus.title, language)}</p>
                  <p className="text-[1rem] leading-8 text-slate-700">
                    {localizedText(about.marketFocus.summary, language)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {about.marketFocus.items.map((item) => (
                      <span
                        key={localizedText(item, language)}
                    className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-[0.96rem] font-medium text-slate-700 shadow-sm"
                      >
                        {localizedText(item, language)}
                      </span>
                    ))}
                  </div>
                </div>
              </article>

              <article className="surface-panel rounded-[1.8rem] p-7 md:p-8 lg:col-span-2">
                <div className="editorial-stack">
                  <p className="section-kicker">{localizedText(about.workStyle.title, language)}</p>
                  <p className="text-[1rem] leading-8 text-slate-700">
                    {localizedText(about.workStyle.summary, language)}
                  </p>
                  <div className="story-grid md:grid-cols-2">
                    {about.workStyle.items.map((item) => (
                      <div key={localizedText(item, language)} className="light-stage rounded-[1.4rem] p-5">
                        <p className="text-[1rem] leading-8 text-slate-700">
                          {localizedText(item, language)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
