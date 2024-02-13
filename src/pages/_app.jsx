import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Noto_Sans } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ApolloProvider } from "@apollo/client";
import client from "@/services/apollo/client";
import UserProvider from "@/components/providers/UserProvider";
import CarritoProvider from "@/components/providers/CarritoProvider";
import Head from "next/head";
// import { initMercadoPago } from "@mercadopago/sdk-react";
config.autoAddCss = false;
import favicon from "../static/favicon.ico";

const font = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

// initMercadoPago(process.env.MP_PUBLIC_KEY);

export default function App({ Component, pageProps }) {
  return (
    <div className={font.className}>
      <Head>
        <link rel="shortcut icon" href={favicon.src} />
      </Head>
      <ApolloProvider client={client}>
        <UserProvider>
          <CarritoProvider>
            <Component {...pageProps} />
          </CarritoProvider>
        </UserProvider>
      </ApolloProvider>
    </div>
  );
}
