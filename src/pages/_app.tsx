import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider, useAuth } from "@clerk/nextjs";

function Layout({ children }: { children: React.ReactNode }) {
  const { isSignedIn } = useAuth();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {isSignedIn && <AppSidebar />}
        {children}
      </div>
    </SidebarProvider>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  );
}