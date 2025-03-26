import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

const Layout = ({ children, showHero = false }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />
      {/* Hero Section */}
      {showHero && <Hero />}
      {/* Rest  */}
      <div className="mx-3 md:mx-20 flex-1 py-4">{children}</div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Layout;
