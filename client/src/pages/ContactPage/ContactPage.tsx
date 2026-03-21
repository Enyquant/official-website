import React from 'react';
import { MailIcon, MapPinIcon, MessageSquareTextIcon } from 'lucide-react';
import { UniversalLink } from '@lark-apaas/client-toolkit/components/UniversalLink';
import SEO from '@/components/SEO';
import ScrollReveal from '@/components/ScrollReveal';
import { localizedText, siteContent } from '@/content/site-content';
import { useLanguage } from '@/components/LanguageContext';

const ContactPage: React.FC = () => {
  const { language } = useLanguage();
  const seo = siteContent.seo.contact;
  const contact = siteContent.contact;
  const breadcrumbs = [
    { name: localizedText(siteContent.navigation[0].label, language), path: '/' },
    { name: localizedText(siteContent.navigation[5].label, language), path: '/contact' },
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
        <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-24 lg:px-20">
          <ScrollReveal direction="from-bottom" delay={100}>
            <div className="editorial-stack max-w-4xl">
              <p className="section-kicker">{localizedText(siteContent.identity.name, language)}</p>
              <h1 className="font-display text-[clamp(3rem,8vw,6rem)] font-semibold leading-[0.95] text-slate-950">
                {localizedText(contact.heading, language)}
              </h1>
              <p className="max-w-3xl text-[1.12rem] leading-8 text-slate-700 md:text-[1.22rem]">
                {localizedText(contact.summary, language)}
              </p>
            </div>
          </ScrollReveal>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-28 md:px-12 lg:px-20">
          <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
            <ScrollReveal direction="from-bottom" delay={160}>
              <div className="surface-panel h-full rounded-[2rem] p-8 md:p-9">
                <div className="editorial-stack">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm">
                      <MailIcon className="size-5" />
                    </div>
                    <h2 className="font-display text-3xl font-semibold text-slate-950 md:text-[2.7rem]">
                      {localizedText(contact.channelsTitle, language)}
                    </h2>
                  </div>

                  <div className="story-grid">
                    {contact.channels.map((channel) => (
                      <article key={channel.label.en} className="metric-rail rounded-[1.4rem] p-5">
                        <p className="text-[0.94rem] font-semibold tracking-[0.03em] text-sky-700">
                          {localizedText(channel.label, language)}
                        </p>
                        {channel.href ? (
                          <UniversalLink
                            to={channel.href}
                            className="mt-3 block font-display text-[1.9rem] text-slate-950 transition-colors hover:text-sky-700"
                          >
                            {channel.value}
                          </UniversalLink>
                        ) : (
                          <p className="mt-3 font-display text-[1.9rem] text-slate-950">{channel.value}</p>
                        )}
                        {channel.note ? (
                          <p className="mt-4 text-[1.04rem] leading-7 text-slate-700">
                            {localizedText(channel.note, language)}
                          </p>
                        ) : null}
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="story-grid">
              <ScrollReveal direction="from-bottom" delay={220}>
                <div className="surface-panel rounded-[1.8rem] p-6 md:p-7">
                  <div className="editorial-stack">
                    <div className="flex size-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm">
                      <MessageSquareTextIcon className="size-5" />
                    </div>
                    <h2 className="font-display text-3xl font-semibold text-slate-950 md:text-[2.3rem]">
                      {localizedText(contact.inquiryTitle, language)}
                    </h2>
                    <ul className="space-y-3 text-[1.06rem] leading-8 text-slate-700">
                      {contact.inquiryTypes.map((item) => (
                        <li key={item.en} className="border-l border-slate-200 pl-3">
                          {localizedText(item, language)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="from-bottom" delay={280}>
                <div className="surface-panel rounded-[1.8rem] p-6 md:p-7">
                  <div className="editorial-stack">
                    <div className="flex size-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm">
                      <MapPinIcon className="size-5" />
                    </div>
                    <h2 className="font-display text-3xl font-semibold text-slate-950 md:text-[2.3rem]">
                      {localizedText(contact.noteTitle, language)}
                    </h2>
                    <p className="text-[1.06rem] leading-8 text-slate-700">
                      {localizedText(contact.noteBody, language)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
