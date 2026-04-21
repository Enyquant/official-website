import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon, CpuIcon, OrbitIcon, WorkflowIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import SEO from '@/components/SEO';
import { localizedText, siteContent } from '@/content/site-content';
import { useLanguage } from '@/components/LanguageContext';

const solutionIcons = [OrbitIcon, WorkflowIcon, CpuIcon];

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const home = siteContent.home;
  const projects = siteContent.projects;
  const about = siteContent.about;
  const seo = siteContent.seo.home;
  const breadcrumbs = [{ name: localizedText(siteContent.navigation[0].label, language), path: '/' }];
  const rawHeroSlogan = localizedText(home.hero.slogan, language);
  const heroWords = rawHeroSlogan
    .split(/[.。]/)
    .map((word) => word.trim())
    .filter(Boolean);

  return (
    <>
      <SEO
        title={localizedText(seo.title, language)}
        description={localizedText(seo.description, language)}
        keywords={localizedText(seo.keywords, language)}
        breadcrumbs={breadcrumbs}
      />

      <div className="relative overflow-hidden">
        <section className="relative mx-auto max-w-7xl px-6 py-18 md:px-12 md:py-22 lg:px-20">
          <div className="hero-slab grid gap-10 rounded-[2.4rem] px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <ScrollReveal direction="from-bottom" delay={100}>
              <div className="editorial-stack max-w-3xl">
                <p className="section-kicker">{localizedText(home.hero.tagline, language)}</p>
                <h1 className="font-display flex max-w-[56rem] flex-wrap items-end gap-x-10 gap-y-3 text-[clamp(2.8rem,12vw,6.7rem)] leading-[0.9] tracking-[-0.05em] text-slate-950 md:gap-x-12 md:gap-y-4 md:text-[clamp(3.4rem,8vw,6.7rem)] lg:gap-x-14">
                  {heroWords.map((word) => (
                    <span
                      key={word}
                      className={
                        language === 'zh'
                          ? 'inline-flex whitespace-nowrap'
                          : 'inline-flex min-w-0 whitespace-normal break-words [overflow-wrap:anywhere]'
                      }
                    >
                      {word}
                    </span>
                  ))}
                </h1>
                <p className="max-w-2xl text-[1.14rem] leading-8 text-slate-700 md:text-[1.24rem]">
                  {localizedText(home.hero.subtitle, language)}
                </p>

                <div className="flex flex-wrap gap-3 text-[1rem] font-medium text-slate-600">
                  {home.hero.chips.map((chip) => (
                    <span key={localizedText(chip, language)} className="soft-chip rounded-full px-4 py-2.5">
                      {localizedText(chip, language)}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => navigate('/projects')}
                    className="quant-button-primary h-13 px-7 text-[1.02rem] font-semibold tracking-[0.01em]"
                  >
                    {localizedText(home.hero.ctaProjects, language)}
                    <ArrowRightIcon className="size-4" />
                  </Button>
                  <Button
                    onClick={() => navigate('/knowledge')}
                    className="quant-button-secondary h-13 px-7 text-[1.02rem] font-semibold tracking-[0.01em]"
                    variant="outline"
                  >
                    {localizedText(home.hero.ctaKnowledge, language)}
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="from-bottom" delay={180}>
              <aside className="brand-spotlight editorial-stack rounded-[2rem] p-6 md:p-7">
                <div className="accent-rule editorial-stack">
                  <p className="section-kicker">{localizedText(siteContent.identity.name, language)}</p>
                  <h2 className="font-display text-[2.1rem] font-semibold leading-tight text-slate-950 md:text-[2.45rem]">
                    {localizedText(home.hero.spotlight, language)}
                  </h2>
                  <p className="max-w-xl text-[1.04rem] leading-8 text-slate-700">
                    {localizedText(about.company.history, language)}
                  </p>
                </div>

                <div className="story-grid gap-3">
                  {about.company.highlights.slice(0, 3).map((item, index) => {
                    const Icon = solutionIcons[index] ?? CpuIcon;
                    return (
                      <article key={localizedText(item.label, language)} className="metric-rail rounded-[1.25rem] p-4">
                        <div className="flex items-start gap-4">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm">
                            <Icon className="size-5" />
                          </div>
                          <div className="editorial-stack gap-2">
                            <p className="text-[0.92rem] font-semibold tracking-[0.03em] text-sky-700">
                              {localizedText(item.label, language)}
                            </p>
                            <p className="text-[1.04rem] leading-7 text-slate-700">
                              {localizedText(item.value, language)}
                            </p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </aside>
            </ScrollReveal>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-18 md:px-12 lg:px-20">
          <ScrollReveal direction="from-bottom" delay={220}>
            <div className="editorial-stack max-w-4xl pb-3">
              <p className="section-kicker">{localizedText(home.solutionsPreview.title, language)}</p>
              <h2 className="font-display text-4xl font-semibold leading-tight text-slate-950 md:text-[3rem]">
                {language === 'zh' ? '公开的业务方向与合作入口' : 'Public solution directions and collaboration entry points'}
              </h2>
              <p className="text-[1rem] leading-8 text-slate-700 md:text-[1.08rem]">
                {localizedText(home.solutionsPreview.subtitle, language)}
              </p>
            </div>

            <div className="story-grid lg:grid-cols-3">
              {projects.solutions.map((item) => (
                <article key={item.key} className="light-stage editorial-stack rounded-[1.75rem] p-6 md:p-7">
                  <p className="section-kicker">{localizedText(item.subtitle, language)}</p>
                  <h2 className="font-display text-[2.15rem] font-semibold text-slate-950">
                    {localizedText(item.title, language)}
                  </h2>
                  <p className="text-[1.05rem] leading-8 text-slate-700">
                    {localizedText(item.summary, language)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.audience.map((entry) => (
                      <span
                        key={localizedText(entry, language)}
                        className="soft-chip rounded-full px-3.5 py-2 text-[0.94rem] font-medium text-slate-700"
                      >
                        {localizedText(entry, language)}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-28 md:px-12 lg:px-20">
          <ScrollReveal direction="from-bottom" delay={260}>
            <div className="terminal-panel rounded-[2rem] p-8 md:p-9">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.85fr] lg:items-end">
                <div className="editorial-stack">
                  <p className="section-kicker">{localizedText(siteContent.identity.name, language)}</p>
                  <h2 className="font-display text-4xl font-semibold leading-tight text-slate-950 md:text-[3.35rem]">
                    {localizedText(home.cta.title, language)}
                  </h2>
                  <p className="max-w-3xl text-[1.08rem] leading-8 text-slate-700">
                    {localizedText(home.cta.subtitle, language)}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 lg:justify-end">
                  <Button
                    onClick={() => navigate('/projects')}
                    className="quant-button-primary h-13 rounded-full px-7 text-[1.02rem] font-semibold"
                  >
                    {localizedText(home.cta.button, language)}
                  </Button>
                  <Button
                    onClick={() => navigate('/contact')}
                    className="quant-button-secondary h-13 rounded-full px-7 text-[1.02rem] font-semibold"
                    variant="outline"
                  >
                    {localizedText(home.cta.secondaryButton, language)}
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

export default HomePage;
