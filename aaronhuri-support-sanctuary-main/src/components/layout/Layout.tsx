import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Scripture ribbon - improved styling and responsive */}
      <div className="w-full bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="text-center">
            <p className="text-sm lg:text-base text-blue-700 font-medium">
              <span className="hidden sm:inline">"</span>When Moses' hands grew weary, Aaron and Hur held up his hands…<span className="hidden sm:inline">"</span>
              <span className="block sm:inline sm:ml-2 text-blue-600 font-semibold text-sm lg:text-base">
                 Exodus 17:12
              </span>
            </p>
          </div>
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