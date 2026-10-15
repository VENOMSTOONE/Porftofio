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
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#000000] text-[#F3F0E9] antialiased select-none overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
