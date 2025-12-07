import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import '../src/index.scss';
import '../src/styles/glassmorphism.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Import Bootstrap JS only on client side
    require('bootstrap/dist/js/bootstrap.bundle.min');
    
    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Log Core Web Vitals
      const reportWebVitals = (metric) => {
        // Web vitals can be sent to analytics here if needed
      };
      
      // Monitor LCP, FID, CLS
      if ('web-vitals' in window) {
        import('web-vitals').then(({ getLCP, getFID, getCLS, getFCP, getTTFB }) => {
          getLCP(reportWebVitals);
          getFID(reportWebVitals);
          getCLS(reportWebVitals);
          getFCP(reportWebVitals);
          getTTFB(reportWebVitals);
        });
      }
    }
    
    // Scroll animation initialization
    const initScrollAnimations = () => {
      const scrollElements = document.querySelectorAll('[data-scroll], .scroll-section');
      
      if (scrollElements.length === 0) return;
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px'
      });
      
      scrollElements.forEach((el) => observer.observe(el));
      
      return () => {
        scrollElements.forEach((el) => observer.unobserve(el));
      };
    };
    
    // Run after a small delay to ensure DOM is ready
    const timeoutId = setTimeout(initScrollAnimations, 100);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        {/* Google Fonts - Inter & Poppins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0C0XXT0XX7"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0C0XXT0XX7');
        `}
      </Script>
      
      <Component {...pageProps} />
    </>
  );
}
