'use client';

import React, { useEffect, useState } from 'react';
import Link, { LinkProps } from 'next/link';

export type HeaderProps = unknown;

const navLinks: (LinkProps & { title: string; subLinks?: (LinkProps & { title: string })[] })[] = [
  { title: 'Home', href: '/' },
  { title: 'Contacts', href: '/' },
  {
    title: 'Services',
    href: '/',
    subLinks: [
      { title: 'Home', href: '/' },
      { title: 'Contacts', href: '/' },
    ],
  },
];

export const Header: React.FC<HeaderProps> = () => {
  const [focusedLink, setFocusedLink] = useState<
    | (LinkProps & {
        title: string;
        subLinks?: (LinkProps & { title: string })[];
      })
    | null
  >(null);

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const clickListener = (e: MouseEvent) => {
      const clickedElement = e.target;
      const nestedLink = document.getElementById('mega-menu-full-dropdown-button');

      if (!nestedLink?.contains(clickedElement as Node)) {
        setFocusedLink(null);
        return;
      }
    };

    document.addEventListener('click', clickListener);

    return () => document.removeEventListener('click', clickListener);
  }, []);

  useEffect(() => {
    const clickMobileListener = (e: MouseEvent) => {
      const clickedElement = e.target;
      const mobileNavBtn = document.getElementById('mobile-nav-btn');
      const nestedLink = document.getElementById('mega-menu-full-dropdown-button');

      if (!mobileNavBtn) {
        return;
      }

      const isMobileNavExpanded = mobileNavBtn.getAttribute('aria-expanded');

      if (!mobileNavBtn?.contains(clickedElement as Node)) {
        if (!nestedLink?.contains(clickedElement as Node)) {
          setIsMobileNavOpen(false);
          mobileNavBtn.setAttribute('aria-expanded', 'false');
        }

        return;
      } else if (isMobileNavExpanded === 'false') {
        setIsMobileNavOpen(true);
        mobileNavBtn.setAttribute('aria-expanded', 'true');
      } else {
        setIsMobileNavOpen(false);
        mobileNavBtn.setAttribute('aria-expanded', 'false');
      }
    };

    document.addEventListener('click', clickMobileListener);

    return () => document.removeEventListener('click', clickMobileListener);
  }, []);

  const toggleSubLinksHandler = (
    navLink: LinkProps & { title: string; subLinks?: (LinkProps & { title: string })[] }
  ) => {
    if (focusedLink === navLink) {
      setFocusedLink(null);
      return;
    }

    setFocusedLink(navLink);
    return;
  };

  return (
    <header className="sticky top-0 z-50">
      <nav id="main-nav" className="relative border-gray-200 bg-background">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <a href="#" className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Team_Fortress_2_style_logo.svg/2048px-Team_Fortress_2_style_logo.svg.png"
              className="mr-3 h-8"
              alt="Logo"
            />
            <span className="self-center overflow-hidden truncate whitespace-nowrap text-2xl font-semibold text-brown-50 ">
              Car Delivery <span className="hidden text-highlight-500 sm:inline-block">Sofiag</span>
            </span>
          </a>
          <button
            data-collapse-toggle="mega-menu-full"
            id="mobile-nav-btn"
            type="button"
            className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
            aria-controls="mega-menu-full"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            id="mega-menu-full"
            className={`${
              !isMobileNavOpen && 'hidden'
            } w-full items-center justify-between font-medium md:order-1 md:flex md:w-auto`}
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-background p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-background md:p-0">
              {navLinks.map((navLink) => (
                <li key={navLink.title}>
                  {!navLink.subLinks ? (
                    <Link
                      {...navLink}
                      className="block rounded py-2 pl-3 pr-4 text-brown-50 md:p-0 md:hover:text-highlight-500"
                    >
                      {navLink.title}
                    </Link>
                  ) : (
                    <button
                      onClick={() => toggleSubLinksHandler(navLink)}
                      id="mega-menu-full-dropdown-button"
                      data-collapse-toggle="mega-menu-full-dropdown"
                      className="flex w-full items-center justify-between rounded py-2 pl-3  pr-4 text-brown-50 md:w-auto md:border-0 md:p-0 md:hover:text-highlight-500"
                    >
                      {navLink.title}{' '}
                      <svg
                        className="ml-1 h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          id="mega-menu-full-dropdown"
          className={`${
            !focusedLink?.subLinks && 'hidden'
          } fixed w-full border-y border-brown-500 bg-background shadow-sm md:bg-background`}
        >
          {focusedLink && focusedLink.subLinks?.length && (
            <div className="mx-auto grid max-w-screen-xl px-4 py-5 text-gray-900 sm:grid-cols-2 md:px-6">
              <ul>
                {focusedLink.subLinks.map(
                  (link, index) =>
                    index % 2 === 0 && (
                      <li key={link.title}>
                        <a href="#" className="block rounded-lg p-3 hover:bg-brown-50/20">
                          <div className="font-semibold text-brown-50">{link.title}</div>
                          <span className="text-sm text-brown-50/95">
                            Connect with third-party tools that you&apos;re already using.
                          </span>
                        </a>
                      </li>
                    )
                )}
              </ul>

              <ul>
                {focusedLink.subLinks.map(
                  (link, index) =>
                    index % 2 !== 0 && (
                      <li key={link.title}>
                        <a href="#" className="block rounded-lg p-3 hover:bg-brown-50/20">
                          <div className="font-semibold text-brown-50">{link.title}</div>
                          <span className="text-sm text-brown-50/95">
                            Connect with third-party tools that you&apos;re already using.
                          </span>
                        </a>
                      </li>
                    )
                )}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
