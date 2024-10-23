// pages/_app.tsx
import "@/styles/globals.css";
import { Footer, Navbar } from "@/components";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from 'react';
import LoadingPage from '../components/LoadingPage';

export default function App({
  Component,
  pageProps,
  router,
}: {
  Component: any;
  pageProps: any;
  router: any;
}) {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Set first load to false after component mounts
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 2500); // Memberikan waktu untuk loading animation selesai

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isFirstLoad && <LoadingPage />}
      </AnimatePresence>

      {!isFirstLoad && (
        <>
          <Navbar />
          <AnimatePresence mode="wait">
            <Component
              key={router.route}
              {...pageProps}
            />
          </AnimatePresence>
          <Footer />
        </>
      )}
    </>
  );
}
