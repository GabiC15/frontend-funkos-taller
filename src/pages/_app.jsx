import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Noto_Sans } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ApolloProvider } from "@apollo/client";
import client from "@/services/apollo/client";
import UserProvider from "@/components/providers/UserProvider";
config.autoAddCss = false;

const font = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={font.className}>
      <ApolloProvider client={client}>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </ApolloProvider>
    </div>
  );
}
