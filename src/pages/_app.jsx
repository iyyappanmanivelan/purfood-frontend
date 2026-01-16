import { useEffect } from "react";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Header from "@/common/Header";
import Footer from "@/common/Footer";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Scroll to top on route change
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
