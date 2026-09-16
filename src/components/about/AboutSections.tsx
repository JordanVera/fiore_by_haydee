'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MapPin,
  Palette,
  Sparkles,
  ArrowRight,
  Check,
} from 'lucide-react';
import InstagramCta from '@/components/home/InstagramCta';
import {
  ABOUT_PAGE,
  COMPANY,
  STUDIO_INFO,
  TEAM_MEMBERS,
} from '@/lib/data';

const pillarIcons = {
  palette: Palette,
  sparkles: Sparkles,
  'map-pin': MapPin,
} as const;

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function AboutSections() {
  const founder = TEAM_MEMBERS[0];

  return (
    <>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden sm:min-h-[75vh]">
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/45 to-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-32 lg:px-8 lg:pb-24">
          <motion.p
            {...anim(0)}
            className="mb-4 text-[10px] tracking-[0.4em] text-[#f59a88] uppercase"
          >
            {ABOUT_PAGE.hero.kicker}
          </motion.p>
          <motion.h1
            {...anim(0.1)}
            className="max-w-3xl font-serif text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl"
          >
            {ABOUT_PAGE.hero.titleBefore}{' '}
            <em className="italic text-[#f59a88]">
              {ABOUT_PAGE.hero.titleEmphasis}
            </em>
          </motion.h1>
        </div>
      </section>

      <section className="bg-background px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <motion.h2
              {...anim(0)}
              className="font-serif text-4xl leading-tight text-foreground sm:text-5xl"
            >
              {ABOUT_PAGE.story.heading}{' '}
              <em className="italic text-[#f59a88]">
                {ABOUT_PAGE.story.emphasis}
              </em>
            </motion.h2>

            <div className="mt-8 space-y-5">
              {ABOUT_PAGE.story.paragraphs.map((paragraph, i) => (
                <motion.p
                  key={paragraph.slice(0, 24)}
                  {...anim(0.1 + i * 0.1)}
                  className="text-base leading-relaxed text-foreground/70 sm:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.blockquote
              {...anim(0.35)}
              className="mt-10 border-l-2 border-[#f59a88]/50 pl-6"
            >
              <p className="font-serif text-xl italic leading-relaxed text-foreground/85 sm:text-2xl">
                &ldquo;{ABOUT_PAGE.story.pullQuote}&rdquo;
              </p>
            </motion.blockquote>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {ABOUT_PAGE.story.gallery.map((src, i) => (
              <motion.div
                key={src}
                {...anim(0.15 + i * 0.08)}
                className={`relative overflow-hidden ${i % 3 === 0 ? 'aspect-4/5' : 'aspect-square'}`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 300px"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0e0c08] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div {...anim(0)} className="mb-16 text-center">
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#f59a88] uppercase">
              Our Approach
            </p>
            <h2 className="font-serif text-4xl text-white sm:text-5xl">
              What makes Fiore different
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {ABOUT_PAGE.pillars.map((pillar, i) => {
              const Icon = pillarIcons[pillar.icon];
              return (
                <motion.article
                  key={pillar.title}
                  {...anim(0.1 + i * 0.12)}
                  className="border border-white/8 bg-[#161410] p-8 transition-colors duration-300 hover:border-[#f59a88]/35"
                >
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-[#f59a88]/30">
                    <Icon size={16} className="text-[#f59a88]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {pillar.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div {...anim(0)} className="mb-16 max-w-2xl">
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#f59a88] uppercase">
              How It Works
            </p>
            <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
              From Instagram message to{' '}
              <em className="italic text-[#f59a88]">your doorstep</em>
            </h2>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {ABOUT_PAGE.process.map((step, i) => (
              <motion.div
                key={step.step}
                {...anim(0.1 + i * 0.12)}
                className="relative border-t border-border pt-8"
              >
                <span className="font-serif text-4xl text-[#f59a88]/40">
                  {step.step}
                </span>
                <h3 className="mt-4 font-serif text-2xl text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div {...anim(0.45)} className="mt-14">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#f59a88] uppercase transition-all hover:gap-3"
            >
              Start an inquiry
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#0e0c08] px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[minmax(280px,1fr)_1.2fr] lg:gap-20">
          <motion.div
            {...anim(0)}
            className="relative mx-auto aspect-3/4 w-full max-w-md overflow-hidden lg:mx-0"
          >
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 448px"
            />
          </motion.div>

          <div>
            <motion.p
              {...anim(0.05)}
              className="mb-4 text-[10px] tracking-[0.35em] text-[#f59a88] uppercase"
            >
              Meet the Designer
            </motion.p>
            <motion.h2
              {...anim(0.1)}
              className="font-serif text-4xl text-white sm:text-5xl"
            >
              {founder.name}
            </motion.h2>
            <motion.p
              {...anim(0.15)}
              className="mt-3 text-sm tracking-[0.15em] text-[#f59a88] uppercase"
            >
              {founder.title}
            </motion.p>
            <motion.p
              {...anim(0.2)}
              className="mt-8 text-base leading-relaxed text-white/65 sm:text-lg"
            >
              {founder.bio}
            </motion.p>
            <motion.ul {...anim(0.3)} className="mt-8 space-y-3">
              {founder.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-white/70"
                >
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-[#f59a88]"
                    strokeWidth={2}
                  />
                  {item}
                </li>
              ))}
            </motion.ul>
            <motion.div {...anim(0.4)} className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 border border-white/25 px-7 py-3.5 text-xs tracking-[0.2em] text-white uppercase transition-colors hover:border-[#f59a88] hover:text-[#f59a88]"
              >
                View Portfolio
                <ArrowRight size={12} />
              </Link>
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f59a88] px-7 py-3.5 text-xs tracking-[0.2em] text-black uppercase transition-colors hover:bg-[#f8b2a6]"
              >
                {COMPANY.instagramHandle}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div {...anim(0)} className="mb-14 text-center">
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#f59a88] uppercase">
              Visit the Studio
            </p>
            <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
              Find us in Houston
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              {...anim(0.1)}
              className="border border-border bg-background p-8"
            >
              <MapPin size={18} className="text-[#f59a88]" strokeWidth={1.5} />
              <p className="mt-5 text-[10px] tracking-[0.35em] text-[#f59a88] uppercase">
                Studio Location
              </p>
              <p className="mt-3 font-serif text-2xl text-foreground">
                {STUDIO_INFO.location}
              </p>
              <p className="mt-1 text-foreground/70">{STUDIO_INFO.city}</p>
              <p className="mt-3 text-sm text-foreground/50 italic">
                {STUDIO_INFO.locationNote}
              </p>
            </motion.div>

            <motion.div
              {...anim(0.2)}
              className="border border-border bg-background p-8"
            >
              <Sparkles size={18} className="text-[#f59a88]" strokeWidth={1.5} />
              <p className="mt-5 text-[10px] tracking-[0.35em] text-[#f59a88] uppercase">
                Studio Hours
              </p>
              {STUDIO_INFO.hours.map((slot) => (
                <div key={slot.days} className="mt-3">
                  <p className="font-serif text-xl text-foreground">{slot.days}</p>
                  <p className="mt-1 text-foreground/70">{slot.time}</p>
                </div>
              ))}
              <p className="mt-4 text-sm text-foreground/50 italic">
                {STUDIO_INFO.hoursNote}
              </p>
            </motion.div>

            <motion.div
              {...anim(0.3)}
              className="border border-border bg-background p-8"
            >
              <p className="text-[10px] tracking-[0.35em] text-[#f59a88] uppercase">
                Get in Touch
              </p>
              <p className="mt-5 font-serif text-2xl text-foreground">
                {COMPANY.name}
              </p>
              {COMPANY.email ? (
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="mt-3 inline-block text-foreground/70 transition-colors hover:text-[#f59a88]"
                >
                  {COMPANY.email}
                </a>
              ) : (
                <a
                  href={COMPANY.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-foreground/70 transition-colors hover:text-[#f59a88]"
                >
                  {COMPANY.instagramHandle}
                </a>
              )}
              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex justify-center bg-[#f59a88] px-6 py-3 text-xs font-medium tracking-[0.2em] text-black uppercase transition-colors hover:bg-[#f8b2a6]"
                >
                  Send an Inquiry
                </Link>
                <a
                  href={COMPANY.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center border border-border px-6 py-3 text-xs tracking-[0.2em] text-foreground uppercase transition-colors hover:border-[#f59a88] hover:text-[#f59a88]"
                >
                  Follow on Instagram
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <InstagramCta />
    </>
  );
}
