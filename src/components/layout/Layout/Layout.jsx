import { useEffect } from 'react';
import { Outlet, matchPath, useLocation } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Hero from '@/components/sections/Hero/Hero.jsx';
import { site, heroActions } from '@/config/site.js';
import styles from './Layout.module.css';

export default function Layout() {
  const { pathname } = useLocation();
  // Case studies have their own sticky section nav instead of the shared intro
  const isCaseStudy = Boolean(matchPath('/projects/:slug', pathname));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className={styles.shell}>
      {!isCaseStudy && (
        <>
          <div className={styles.glow} aria-hidden="true" />
          <Header />
          {/* Shared intro — identical on every page; only the content below changes */}
          <Hero title={site.name} description={site.tagline} actions={heroActions} />
        </>
      )}
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
