'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ABOUT_CONTENT, TEAM_MEMBERS, WELCOME } from '@/lib/data';

const founder = TEAM_MEMBERS[0];

const anim = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Welcome() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[minmax(280px,1fr)_2fr] gap-12 md:gap-16 items-start">
          <motion.div
            {...anim(0)}
            className="relative mx-auto aspect-3/4 w-full max-w-sm overflow-hidden md:mx-0"
          >
            <Image
              src={founder.image}
              alt={`${founder.name}, ${founder.title}`}
              fill
              className="object-cover object-center rounded-xl"
              sizes="(max-width: 768px) 100vw, 384px"
            />
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.h2
              {...anim(0.1)}
              className="font-serif text-4xl sm:text-5xl leading-tight text-foreground"
            >
              {WELCOME.heading}{' '}
              <em className="italic text-[#f59a88]">{WELCOME.emphasis}</em>
            </motion.h2>

            <motion.p
              {...anim(0.2)}
              className="text-foreground/65 leading-relaxed text-base sm:text-lg"
            >
              {ABOUT_CONTENT.intro}
            </motion.p>

            <motion.p
              {...anim(0.3)}
              className="text-foreground/65 leading-relaxed text-base sm:text-lg"
            >
              {ABOUT_CONTENT.body}
            </motion.p>

            <motion.div
              {...anim(0.4)}
              className="flex gap-8 pt-4 border-t border-border"
            >
              {WELCOME.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl text-[#f59a88]">
                    {stat.number}
                  </p>
                  <p className="text-xs text-foreground/50 tracking-wide mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div {...anim(0.5)}>
              <Link
                href="/about"
                className="inline-flex items-center text-[#f59a88] text-xs tracking-[0.2em] uppercase hover:underline underline-offset-4"
              >
                Meet the Designer
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
