import type { Metadata } from "next";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Home/Navbar";
import Preloader from "@/components/Preloader";
import { LoadingProvider } from "@/contexts/LoadingContext";
import Footer from "@/components/Home/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "sonner";
import { headers } from "next/headers";
import { Parisienne } from "next/font/google";

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-parisienne",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("host") || "";
  const pathname = headersList.get("x-pathname") || "";

  const isUK = host.includes("flowergrid.co.uk");

  const baseUrl = isUK
    ? "https://flowergrid.co.uk"
    : "https://flowergriid.com";

  const canonicalUrl = `${baseUrl}${pathname}`;

  return {
    metadataBase: new URL(baseUrl),

    title:
      "Flowergrid Holistic Wellness | Mind Body Spirit Transformation",

    description: isUK
      ? "Flowergrid offers holistic wellness, life and transformation coaching, emotional wellbeing support and mind body spirit healing for lasting balance and clarity in Croydon, UK."
      : "Flowergrid offers holistic wellness, life and transformation coaching, emotional wellbeing support and mind body spirit healing for lasting balance and clarity worldwide.",

    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en": "https://flowergriid.com",
        "en-GB": "https://flowergrid.co.uk",
      },
    },

    openGraph: {
      title:
        "Flowergrid Holistic Wellness | Mind Body Spirit Transformation",
      description: isUK
        ? "Holistic wellness and transformation coaching in Croydon, UK."
        : "Global holistic wellness and transformation coaching.",
      url: canonicalUrl,
      siteName: "Flowergrid",
      locale: isUK ? "en_GB" : "en_US",
      type: "website",
    },

    robots: {
      index: true,
      follow: true,
    },
    verification: {
      google: "C32lbAB00RrvKqdAFPUUlgjmeaCuO_CNyZgqZWTWesY",
      other: {
        "msvalidate.01": ["68EBC2FF3A59D61A03385507B1B056E4"],
      },
    },
  };
}




export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  const isAdminRoute = pathname.startsWith("/admin") || pathname.startsWith("/holistic-journals/editor") || pathname === "/payment-success";

  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-T5QR8FGW" />
      <body className={`${parisienne.variable} antialiased overflow-x-hidden`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T5QR8FGW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-24E7DSZV1G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-24E7DSZV1G');
            gtag('config', 'AW-17963417861');
          `}
        </Script>
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "8810316";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} alt="" src="https://px.ads.linkedin.com/collect/?pid=8810316&fmt=gif" />
        </noscript>

        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1534480870959826');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=1534480870959826&ev=PageView&noscript=1" />
        </noscript>

        <Script id="clarity-js" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vgshz8o2op");
          `}
        </Script>
        <LoadingProvider>
          <Toaster position="top-center" richColors closeButton />
          {!isAdminRoute && <Preloader />}
          {!isAdminRoute && <SmoothScroll />}
          {!isAdminRoute && <Navbar />}
          {children}
          {!isAdminRoute && <Footer />}
          {!isAdminRoute && <ScrollToTop />}
        </LoadingProvider>
      </body>
    </html>
  );
}
