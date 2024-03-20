import { Inter, Baloo_2 } from 'next/font/google';
import './globals.css';
import Sidebar from './components/Sidebar';
import { generateMetadata } from '@/utils/generate-metadata';

const inter = Baloo_2({ subsets: ['latin'] });

export const metadata = generateMetadata({
  title: 'Programação e Design | Gabriel Asakawa',
  description:
    'Blog con conteúdo sobre tecnologia, programação, design e empreendedorismo. Fique por dentro dos melhores conteúdos e esteja atualizado',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <body className={inter.className}>
        <Sidebar />
        <main className="min-h-[100vh] flex-1 pt-[4.125rem] pr-0 pb-[3rem] pl-4 md:pt-4 md:pr-[3.75rem] md:pb-0 md:pl-[21rem] w-[100vw]">
          {children}
        </main>
      </body>
    </html>
  );
}
