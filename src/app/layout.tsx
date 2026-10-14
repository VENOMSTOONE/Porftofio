import type { Metadata } from 'next';
import { Instrument_Serif, Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const manrope = Manrope({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VAIBHAV LABS — Documentary Video Editor · Mystery & Investigative Storytelling',
  description:
    'Transforming scripts and narration into cinematic mystery and investigative documentaries through deliberate pacing, compelling visuals, documentary motion graphics, and immersive sound design.',
  keywords: [
    'documentary video editor',
    'mystery documentary editing',
    'investigative documentary video editor',
    'YouTube documentary editor',
    'documentary motion graphics',
    'archival visual storytelling',
    'sound design',
  ],
  authors: [{ name: 'VAIBHAV LABS' }],
  openGraph: {
    title: 'VAIBHAV LABS — Documentary Video Editor',
    description:
      'I transform scripts and narration into cinematic mystery and investigative documentaries through deliberate pacing, compelling visuals, documentary motion graphics, and immersive sound design.',
    type: 'website',
    url: 'https://vaibhavlabs.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VAIBHAV LABS — Documentary Video Editor',
    description:
      'Cinematic documentary editing for mystery and investigative creators.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${manrope.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-[#101112] text-[#F3F0E9] antialiased selection:bg-[#D9A45B]/25 selection:text-[#F3F0E9]">
        {children}
      </body>
    </html>
  );
}
