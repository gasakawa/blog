import { Baloo_2 } from 'next/font/google';
import './globals.css';
import Sidebar from './components/Sidebar';
import { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Baloo_2({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'Programação e Design | Gabriel Asakawa', template: '%s' },
  description:
    'Blog con conteúdo sobre tecnologia, programação, design e empreendedorismo. Fique por dentro dos melhores conteúdos e esteja atualizado',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <GoogleTagManager gtmId="GTM-MNXHCPX" />
      <body className={inter.className}>
        <div className="flex flex-col sm:flex-row">
          <Sidebar />
          <main className="blog-container">{children}</main>
        </div>
      </body>
    </html>
  );
}
