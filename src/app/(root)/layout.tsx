import Footer from "@/components/Footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="max-w-2xl mx-auto px-4">
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
