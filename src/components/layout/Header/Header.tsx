'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './Header.module.css';

interface NavSubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavSubItem[];
}

const leftNavLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Our Work',
    href: '/our-work',
    children: [
      { label: 'Past Events', href: '/our-work/past-events' },
      { label: 'Ongoing Projects', href: '/our-work/ongoing-projects' },
      { label: 'Seasonal Projects', href: '/our-work/seasonal-projects' },
    ],
  },
];

const rightNavLinks: NavItem[] = [
  { label: 'Media', href: '/media' },
  { label: 'Blog', href: '/blog' },
  { label: 'CSR', href: '/csr' },
  { label: 'Context', href: '/context' },
];

const mobileNavLinks: NavItem[] = [...leftNavLinks, ...rightNavLinks];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);

  const pathname = usePathname();
  const navContainerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const leaveTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll compaction listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Keyboard Escape listener & body scroll lock for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isDesktopDropdownOpen) setIsDesktopDropdownOpen(false);
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen, isDesktopDropdownOpen]);

  // Click outside to close mobile drawer & desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDesktopDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Desktop Hover Handlers for Our Work dropdown
  const handleMouseEnter = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setIsDesktopDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    leaveTimerRef.current = setTimeout(() => {
      setIsDesktopDropdownOpen(false);
    }, 180);
  };

  const handleParentClick = (e: React.MouseEvent) => {
    setIsDesktopDropdownOpen((prev) => !prev);
  };

  const renderNavLink = (link: NavItem) => {
    const isParentActive =
      link.href === '/'
        ? pathname === '/'
        : pathname === link.href || pathname.startsWith(link.href + '/');

    const hasChildren = link.children && link.children.length > 0;

    if (hasChildren) {
      return (
        <li
          key={link.label}
          className={`${styles.navItem} ${styles.dropdownItemWrapper}`}
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.dropdownTriggerGroup}>
            <Link
              href={link.href}
              className={`${styles.navLink} ${styles.dropdownNavLink} ${
                isParentActive ? styles.active : ''
              }`}
              aria-haspopup="true"
              aria-expanded={isDesktopDropdownOpen}
              onClick={handleParentClick}
            >
              <span className={styles.linkLabel}>{link.label}</span>
              <span
                className={`${styles.chevron} ${
                  isDesktopDropdownOpen ? styles.chevronRotated : ''
                }`}
                aria-hidden="true"
              >
                ▾
              </span>
              <span
                className={`${styles.activeLine} ${
                  isParentActive ? styles.activeLineVisible : ''
                }`}
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Dropdown Menu Panel */}
          <div
            className={`${styles.dropdownMenu} ${
              isDesktopDropdownOpen ? styles.dropdownMenuOpen : ''
            }`}
            role="menu"
            aria-label={`${link.label} Submenu`}
          >
            <ul className={styles.dropdownList}>
              {link.children?.map((child) => {
                const isChildActive = pathname === child.href;
                return (
                  <li key={child.label} className={styles.dropdownListItem} role="none">
                    <Link
                      href={child.href}
                      className={`${styles.dropdownLink} ${
                        isChildActive ? styles.dropdownActive : ''
                      }`}
                      role="menuitem"
                      onClick={() => setIsDesktopDropdownOpen(false)}
                    >
                      <span>{child.label}</span>
                      {isChildActive && (
                        <span className={styles.dropdownActiveDot} aria-hidden="true" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </li>
      );
    }

    return (
      <li key={link.label} className={styles.navItem}>
        <Link
          href={link.href}
          className={`${styles.navLink} ${isParentActive ? styles.active : ''}`}
        >
          <span className={styles.linkLabel}>{link.label}</span>
          <span
            className={`${styles.activeLine} ${
              isParentActive ? styles.activeLineVisible : ''
            }`}
            aria-hidden="true"
          />
        </Link>
      </li>
    );
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      {/* Background Gradient Glow */}
      <div className={styles.navGlow} aria-hidden="true" />

      <div className={styles.container} ref={navContainerRef}>
        {/* DESKTOP CENTERED LOGO GRID CONTAINER */}
        <div className={styles.navGridContainer}>
          
          {/* 1. LEFT NAVIGATION ZONE */}
          <nav className={styles.leftNavZone} aria-label="Main Navigation Left">
            <ul className={styles.navList}>{leftNavLinks.map(renderNavLink)}</ul>
          </nav>

          {/* 2. CENTERED LOGO ZONE */}
          <div className={styles.logoZone}>
            <Link href="/" className={styles.logoLink} aria-label="Raise India Foundation Home">
              <Image
                src="/logo.png"
                alt="Raise India Foundation Logo"
                width={100}
                height={100}
                className={styles.logoImage}
                priority
              />
            </Link>
          </div>

          {/* 3. RIGHT NAVIGATION & ACTION ZONE */}
          <div className={styles.rightNavZone}>
            <nav className={styles.rightNavLinks} aria-label="Main Navigation Right">
              <ul className={styles.navList}>{rightNavLinks.map(renderNavLink)}</ul>
            </nav>

            <Link href="/donate" className={styles.donateBtn}>
              <span>DONATE NOW</span>
              <span className={styles.btnHeart} aria-hidden="true">
                ♥
              </span>
              <span className={styles.btnShimmer} aria-hidden="true" />
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              className={styles.mobileToggle}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu-drawer"
            >
              <span className={`${styles.bar} ${isMobileMenuOpen ? styles.bar1Open : ''}`} />
              <span className={`${styles.bar} ${isMobileMenuOpen ? styles.bar2Open : ''}`} />
              <span className={`${styles.bar} ${isMobileMenuOpen ? styles.bar3Open : ''}`} />
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        <div
          id="mobile-menu-drawer"
          className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.mobileDrawerOpen : ''}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className={styles.mobileDrawerInner}>
            <nav aria-label="Mobile Navigation">
              <ul className={styles.mobileNavList}>
                {mobileNavLinks.map((link, idx) => {
                  const isParentActive =
                    link.href === '/'
                      ? pathname === '/'
                      : pathname === link.href || pathname.startsWith(link.href + '/');

                  const hasChildren = link.children && link.children.length > 0;

                  if (hasChildren) {
                    return (
                      <li
                        key={link.label}
                        className={styles.mobileNavItem}
                        style={{ animationDelay: `${idx * 40 + 60}ms` }}
                      >
                        <button
                          type="button"
                          className={`${styles.mobileNavLink} ${styles.mobileSubmenuToggle} ${
                            isParentActive ? styles.mobileActive : ''
                          }`}
                          onClick={() => setIsMobileSubmenuOpen(!isMobileSubmenuOpen)}
                          aria-expanded={isMobileSubmenuOpen}
                        >
                          <span>{link.label}</span>
                          <span
                            className={`${styles.mobileChevron} ${
                              isMobileSubmenuOpen ? styles.mobileChevronRotated : ''
                            }`}
                          >
                            ▾
                          </span>
                        </button>

                        {/* Mobile Expandable Submenu */}
                        {isMobileSubmenuOpen && (
                          <ul className={styles.mobileSubmenuList}>
                            {link.children?.map((child) => {
                              const isChildActive = pathname === child.href;
                              return (
                                <li key={child.label} className={styles.mobileSubmenuItem}>
                                  <Link
                                    href={child.href}
                                    className={`${styles.mobileSubmenuLink} ${
                                      isChildActive ? styles.mobileSubActive : ''
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    <span>{child.label}</span>
                                    {isChildActive && (
                                      <span
                                        className={styles.mobileActiveDot}
                                        aria-hidden="true"
                                      />
                                    )}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  }

                  return (
                    <li
                      key={link.label}
                      className={styles.mobileNavItem}
                      style={{ animationDelay: `${idx * 40 + 60}ms` }}
                    >
                      <Link
                        href={link.href}
                        className={`${styles.mobileNavLink} ${
                          isParentActive ? styles.mobileActive : ''
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>{link.label}</span>
                        {isParentActive && (
                          <span className={styles.mobileActiveDot} aria-hidden="true" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className={styles.mobileDrawerFooter}>
              <Link
                href="/donate"
                className={styles.mobileDonateBtn}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>DONATE NOW</span>
                <span className={styles.arrowIcon}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div
          className={styles.mobileBackdrop}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};
