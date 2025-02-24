import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import Layout from "./Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  );
}