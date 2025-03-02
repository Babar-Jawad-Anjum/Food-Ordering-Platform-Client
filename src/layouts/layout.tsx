import Header from "@/components/Header";
import Hero from "@/components/Hero";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* Rest  */}
      <div className="container mx-auto flex-1 py-4">{children}</div>
    </div>
  );
};

export default Layout;
