import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600;700&family=Manrope:wght@300;400;500;600;700;800&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#070809] text-[#F3F0E9] antialiased selection:bg-[#D9A45B]/30 selection:text-[#F3F0E9] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
