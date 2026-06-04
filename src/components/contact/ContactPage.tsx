"use client";

import { useTranslations } from "next-intl";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactFormVisual } from "@/components/contact/ContactFormVisual";

export function ContactPage() {
  const tHero = useTranslations("contact.hero");

  return (
    <div className="w-full">
      <section className="w-full bg-white">
        <div className="container-wide page-start-padding">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {tHero("eyebrow")}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            {tHero("title")}
          </h1>
          <div className="mt-4 h-1 w-16 rounded-full bg-accent" aria-hidden />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground-muted sm:text-lg">
            {tHero("description")}
          </p>
        </div>
      </section>

      <section className="w-full bg-white pb-12 sm:pb-14 lg:pb-16">
        <div className="container-wide">
          <div className="grid gap-8 lg:min-h-[min(36rem,70vh)] lg:grid-cols-2 lg:items-stretch lg:gap-10">
            <main className="flex flex-col justify-center bg-white py-4 lg:min-h-0 lg:py-6">
              <ContactForm embedded />
            </main>

            <aside className="flex min-h-[min(22rem,50vh)] flex-col bg-white py-4 lg:min-h-0 lg:h-full lg:py-6">
              <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-brand-200/60 bg-gradient-to-br from-brand-50 via-brand-100/50 to-brand-50 shadow-lg shadow-brand-600/10 lg:rounded-3xl">
                <div className="flex h-full min-h-0 flex-1 flex-col px-4 py-5 sm:px-5 sm:py-6 lg:px-6 lg:py-6">
                  <ContactFormVisual />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
