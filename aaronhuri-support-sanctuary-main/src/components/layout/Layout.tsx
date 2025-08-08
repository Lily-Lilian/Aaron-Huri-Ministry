import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Scripture ribbon */}
      <div className="w-full bg-cyan-600/10 border-b border-cyan-100 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs sm:text-sm text-cyan-700 font-medium">
            When Moses’ hands grew weary, Aaron and Hur held up his hands… (Exodus 17:12)
          </p>
        </div>
      </div>
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 