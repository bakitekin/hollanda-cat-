import { Inter } from 'next/font/google';
import '../globals.css';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';
import { getDictionary } from '../../../get-dictionary';
import { Locale, i18n } from '../../../i18n-config';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BRK DAK',
  description: 'Professionele dakdiensten in Nederland',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Header lang={params.lang} dictionary={dictionary.components.header} />
        <main className="flex-grow">{children}</main>
        <WhatsAppButton lang={params.lang} />
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}