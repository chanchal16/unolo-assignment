import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useAuth } from "@clerk/nextjs";

export function Layout({ children }: { children: React.ReactNode }) {
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