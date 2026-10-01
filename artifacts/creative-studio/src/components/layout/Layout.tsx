import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  isLoggedIn?: boolean;
}

export function PublicLayout({ children, isLoggedIn }: LayoutProps) {
  return (
    <div className="pub-layout">
      <Header isLoggedIn={isLoggedIn} />
      <main id="main-content" className="pub-main" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
