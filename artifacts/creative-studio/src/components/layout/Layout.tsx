import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function PublicLayout({ children }: LayoutProps) {
  return (
    <div className="pub-layout">
      <Header />
      <main id="main-content" className="pub-main" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
