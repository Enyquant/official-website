import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import ScrollReveal from '@/components/ScrollReveal';
import { localizedText, siteContent } from '@/content/site-content';
import { useLanguage } from '@/components/LanguageContext';

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const seo = siteContent.seo.projects;
  const projects = siteContent.projects;
  const breadcrumbs = [
    { name: localizedText(siteContent.navigation[0].label, language), path: '/' },
    { name: localizedText(siteContent.navigation[1].label, language), path: '/projects' },
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
              <p className="section-kicker">{localizedText(projects.tagline, language)}</p>
              <h1 className="font-display text-[clamp(3rem,8vw,6rem)] font-semibold leading-[0.95] text-slate-950">
                {localizedText(projects.title, language)}
              </h1>
              <p className="max-w-3xl text-[1.12rem] leading-8 text-slate-700 md:text-[1.22rem]">
                {localizedText(projects.subtitle, language)}
              </p>
            </div>
          </ScrollReveal>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-24 md:px-12 lg:px-20">
          <div className="story-grid">
            {projects.solutions.map((item, index) => (
              <ScrollReveal key={item.key} direction="from-bottom" delay={160 + index * 70}>
                <article className="surface-panel rounded-[2rem] p-7 md:p-9">
                  <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr]">
                    <div className="editorial-stack">
                      <p className="font-display text-6xl text-slate-300">0{index + 1}</p>
                      <p className="section-kicker">{localizedText(item.subtitle, language)}</p>
                      <h2 className="font-display text-[2.2rem] font-semibold leading-tight text-slate-950 md:text-[2.65rem]">
                        {localizedText(item.title, language)}
                      </h2>
                      <p className="text-[1rem] leading-8 text-slate-700">
                        {localizedText(item.summary, language)}
                      </p>
                    </div>

                    <div className="story-grid md:grid-cols-2">
                      <div className="light-stage rounded-[1.5rem] p-5">
                        <p className="text-[0.94rem] font-semibold tracking-[0.03em] text-sky-700">
                          {localizedText(projects.labels.audience, language)}
                        </p>
                        <ul className="mt-4 space-y-3 text-[1rem] leading-7 text-slate-700">
                          {item.audience.map((entry) => (
                            <li key={localizedText(entry, language)} className="border-l border-slate-200 pl-3">
                              {localizedText(entry, language)}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="light-stage rounded-[1.5rem] p-5">
                        <p className="text-[0.94rem] font-semibold tracking-[0.03em] text-sky-700">
                          {localizedText(projects.labels.scenarios, language)}
                        </p>
                        <ul className="mt-4 space-y-3 text-[1rem] leading-7 text-slate-700">
                          {item.scenarios.map((entry) => (
                            <li key={localizedText(entry, language)} className="border-l border-slate-200 pl-3">
                              {localizedText(entry, language)}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="light-stage rounded-[1.5rem] p-5">
                        <p className="text-[0.94rem] font-semibold tracking-[0.03em] text-sky-700">
                          {localizedText(projects.labels.outputs, language)}
                        </p>
                        <ul className="mt-4 space-y-3 text-[1rem] leading-7 text-slate-700">
                          {item.outputs.map((entry) => (
                            <li key={localizedText(entry, language)} className="border-l border-slate-200 pl-3">
                              {localizedText(entry, language)}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="surface-panel rounded-[1.5rem] p-5">
                        <p className="text-[0.94rem] font-semibold tracking-[0.03em] text-sky-700">
                          {localizedText(projects.labels.value, language)}
                        </p>
                        <p className="mt-4 text-[1rem] leading-8 text-slate-800">
                          {localizedText(item.value, language)}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-28 md:px-12 lg:px-20">
          <ScrollReveal direction="from-bottom" delay={240}>
            <div className="terminal-panel rounded-[2rem] p-8 md:p-9">
              <div className="grid gap-8 md:grid-cols-[1.3fr_0.8fr] md:items-center">
                <div className="editorial-stack">
                  <p className="section-kicker">{localizedText(siteContent.identity.name, language)}</p>
                  <h2 className="font-display text-4xl font-semibold text-slate-950 md:text-[3.25rem]">
                    {localizedText(projects.cta.title, language)}
                  </h2>
                  <p className="text-[1.08rem] leading-8 text-slate-700">
                    {localizedText(projects.cta.subtitle, language)}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 md:justify-end">
                  <Button
                    onClick={() => navigate('/contact')}
                    className="quant-button-primary h-13 rounded-full px-7 text-[1.02rem] font-semibold"
                  >
                    {localizedText(projects.cta.button, language)}
                    <ArrowRightIcon className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
};

export default ProjectsPage;
