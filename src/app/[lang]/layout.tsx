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
  icons: {
    icon: '/images/logo.svg',
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { lang } = params;
  const dictionary = await getDictionary(params.lang);

    return (
      <html lang={params.lang} className="scroll-smooth">
        <body className={`${inter.className} bg-paper text-ink`}>
          <Header lang={params.lang} dictionary={dictionary.components.header} />
          <main className="flex-grow">{children}</main>
          <WhatsAppButton dictionary={dictionary.components.whatsapp_button} />
          <Footer lang={params.lang} dictionary={{ footer: dictionary.components.footer, header: dictionary.components.header }}/>
        </body>
      </html>
    );
}