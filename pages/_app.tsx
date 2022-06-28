import "../styles/globals.css";

import type { AppProps } from "next/app";
import Footer from "./components/Footer";
import HeadTags from "./components/Head";
import NavBar from "./components/NavBar";
import { Router } from "next/router";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", (url) => {
    console.log(`Carregando ${url}`);
    NProgress.configure({
        showSpinner: false,
    });
    NProgress.start();
});

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <HeadTags />
            <div className="flex min-h-screen flex-col items-center justify-center py-2">
                <NavBar />
                <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                    <Component {...pageProps} />
                </main>
                <Footer />
            </div>
            <script src="nprogress.js"></script>
        </>
    );
}

export default MyApp;
