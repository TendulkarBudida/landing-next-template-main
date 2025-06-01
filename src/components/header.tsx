"use client";

// import Link from "next/link";
import { Container } from "./container";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useRouter } from "next/navigation";
import { AnimatedButton } from "./ui/animated-button";

export function Header() {
  const [hamburgerIcon, setHamhamburgerIcon] = useState<boolean>(false);
  const [isNavHidden, setIsNavHidden] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [showPopover, setShowPopover] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });
  // const router = useRouter();
  // const [isOpen, setIsOpen] = useState(false);
  // const pathname = usePathname();
  // const router = useRouter();

  // Ensure component is mounted on client side to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleToggle = () => {
    setHamhamburgerIcon(!hamburgerIcon);
  };

  useEffect(() => {
    const html = document.querySelector("html");

    if (html) html.classList.toggle("overflow-hidden", hamburgerIcon);
  }, [hamburgerIcon]);

  useEffect(() => {
    const closehamburgerNavigation = () => setHamhamburgerIcon(false);
    window.addEventListener("orientationchange", closehamburgerNavigation);
    window.addEventListener("resize", closehamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closehamburgerNavigation);
      window.removeEventListener("resize", closehamburgerNavigation);
    };
  }, []);

  // Navigation scroll behavior implementation - only on client
  useEffect(() => {
    if (!isMounted) return;
    
    let lastScrollY = 0;
    let scrollThrottle: NodeJS.Timeout;

    // Throttled scroll direction detection
    const handleScroll = () => {
      if (scrollThrottle) clearTimeout(scrollThrottle);
      
      scrollThrottle = setTimeout(() => {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollY;
        
        // Only act on significant scroll movements (±10px)
        if (Math.abs(scrollDelta) >= 10) {
           if (scrollDelta > 0) {
            // Scrolling down - hide nav
            setIsNavHidden(true);
          } else if (scrollDelta < 0) {
            // Scrolling up - show nav
            setIsNavHidden(false);
          }
        }
        
        lastScrollY = currentScrollY;
      }, 100); // 100ms throttle
    };

    // Keyboard focus handler - ensure nav is visible when focused
    const handleFocusIn = (e: FocusEvent) => {
      const header = document.querySelector('header');
      if (header?.contains(e.target as Node)) {
        setIsNavHidden(false);
      }
    };

    // Initialize listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('focusin', handleFocusIn);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('focusin', handleFocusIn);
      if (scrollThrottle) clearTimeout(scrollThrottle);
    };
  }, [isMounted]);

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setPopoverPosition({
      x: rect.left + (rect.width / 2),
      y: rect.top - 40
    });
    setShowPopover(true);
    setTimeout(() => setShowPopover(false), 2000);
  };

  const handleSignup = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setPopoverPosition({
      x: rect.left + (rect.width / 2),
      y: rect.top - 40
    });
    setShowPopover(true);
    setTimeout(() => setShowPopover(false), 2000);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setPopoverPosition({
      x: rect.left + (rect.width / 2),
      y: rect.top - 40
    });
    setShowPopover(true);
    setTimeout(() => setShowPopover(false), 2000);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return (
      <header className="mt-4 fixed top-0 left-0 w-full z-50 px-4 md:p-2 nav-transition">
        <Container className="flex items-center justify-between w-full p-8 rounded-full h-navigation-height border border-grey/20 bg-white shadow-lg animate-fade-in [--animation-delay:200ms]">
          <div className="flex items-center gap-12">
            <Link href="/">
              <Image
                style={{
                  textShadow:
                    "0px -10px 70px rgba(59, 130, 246, 0.5), 0px -10px 70px rgba(59, 130, 246, 0.5)",
                }}
                src={Logo}
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Button size="medium" variant="secondary">
              Log in
            </Button>
            <Button size="medium">
              Sign up
            </Button>
          </div>
        </Container>
      </header>
    );
  }

  return (
    <header className={cn(
      "mt-4 fixed top-0 left-0 w-full z-50 px-4 md:p-2 nav-transition",
      isNavHidden && "hide-nav"
    )}>
      <Container className="flex items-center justify-between w-full p-8 rounded-full h-navigation-height border border-grey/20 bg-white shadow-lg animate-fade-in [--animation-delay:200ms]">
        <div className="flex items-center">
          <Link href="/">
            <Image
              style={{
                textShadow:
                  "0px -10px 70px rgba(59, 130, 246, 0.5), 0px -10px 70px rgba(59, 130, 246, 0.5)",
              }}
              src={Logo}
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
          <nav
            className={cn(
              "transition-all duration-300 ease-in-out h-auto overflow-auto md:block fixed top-navigation-height mt-4 md:mt-0 right-0 w-[280px] md:w-auto md:relative md:h-auto md:top-0 md:bg-transparent md:opacity-100 md:translate-x-0 rounded-2xl transform origin-top-right",
              hamburgerIcon
                ? "opacity-100 translate-x-0 scale-100 border border-brand/20 bg-white backdrop-blur-sm"
                : "opacity-0 translate-x-[100vw] scale-95"
            )}
          >
            <ul
              className={cn(
                "flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey/20 md:[&_li]:border-none ease-in [&_a]:text-gray-800 [&_a:hover]:text-brand [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-base [&_a]:transition-all [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors",
                hamburgerIcon && "[&_a]:translate-y-0"
              )}
            >
              <li className="pt-4 md:pt-0">
                <Link href="/events" onClick={handleLinkClick} className="hover:bg-brand/5 px-4 py-2 rounded-lg transition-colors duration-200 text-[15px]">Events</Link>
              </li>
              <li>
                <Link href="/tools" onClick={handleLinkClick} className="hover:bg-brand/5 px-4 py-2 rounded-lg transition-colors duration-200 text-[15px]">Tools</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="/careers" onClick={handleLinkClick} className="hover:bg-brand/5 px-4 py-2 rounded-lg transition-colors duration-200 text-[15px]">Careers</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="/ekart" onClick={handleLinkClick} className="hover:bg-brand/5 px-4 py-2 rounded-lg transition-colors duration-200 text-[15px]">AVKart</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="/discussions" onClick={handleLinkClick} className="hover:bg-brand/5 px-4 py-2 rounded-lg transition-colors duration-200 text-[15px]">Community</Link>
              </li>
              <li>
                <Link href="/training" onClick={handleLinkClick} className="hover:bg-brand/5 px-4 py-2 rounded-lg transition-colors duration-200 text-[15px]">Training</Link>
              </li>
              {/* Mobile buttons - only show in mobile menu */}
              <li className="md:hidden mt-4 px-4 pb-6">
                <div className="flex flex-col gap-3">
                  <Button 
                    size="medium" 
                    variant="secondary" 
                    className="w-[200px] h-11 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] text-[15px] flex items-center justify-center"
                    onClick={handleLogin}
                  >
                    Log in
                  </Button>
                  <Button 
                    className="w-[200px] h-11 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] text-[15px] flex items-center justify-center" 
                    size="medium"
                    onClick={handleSignup}
                  >
                    Sign up
                  </Button>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <AnimatedButton 
            onClick={handleLinkClick}
            className="h-10 px-6 sm:px-8 text-md sm:text-lg font-semibold whitespace-nowrap w-[150px] sm:w-auto z-40"
          >
            Join Community
          </AnimatedButton>
          <button
            onClick={handleToggle}
            className="md:hidden"
          >
            <span className="sr-only">Toggle Menu</span>
            {hamburgerIcon ? <X /> : <Menu />}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button size="medium" variant="secondary" onClick={handleLogin}>
            Log in
          </Button>
          <Button size="medium" onClick={handleSignup}>
            Sign up
          </Button>
        </div>
      </Container>

      {/* Popover */}
      {showPopover && (
        <div 
          className="fixed bg-white text-slate-900 px-4 py-2 rounded-lg shadow-lg text-sm font-medium z-50 animate-fade-in"
          style={{
            left: popoverPosition.x,
            top: popoverPosition.y,
            transform: 'translateX(-50%)'
          }}
        >
          This feature is coming soon!
        </div>
      )}
    </header>
  );
}
