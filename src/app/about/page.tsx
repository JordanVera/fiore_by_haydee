import type { Metadata } from 'next';
import AboutSections from '@/components/about/AboutSections';
import { ABOUT_CONTENT, COMPANY } from '@/lib/data';

export const metadata: Metadata = {
  title: `About | ${COMPANY.name}`,
  description: ABOUT_CONTENT.intro,
};

export default function AboutPage() {
  return <AboutSections />;
}
