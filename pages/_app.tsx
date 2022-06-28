import "../styles/globals.css";

import type { AppProps } from "next/app";
import Footer from "./components/Footer";
import HeadTags from "./components/Head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <HeadTags />
            <div className="flex min-h-screen flex-col items-center justify-center py-2">
                <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                    <Component {...pageProps} />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default MyApp;
