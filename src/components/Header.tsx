import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-2">
          <img
            src={logo}
            alt="Ruiqi He"
            width={1024}
            height={635}
            className="h-9 w-auto object-contain"
          />
          <span className="hidden font-display text-sm font-medium tracking-wide sm:inline">
            Ruiqi He
          </span>
        </Link>
        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="relative rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
              >
                {l.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-300 group-data-[status=active]:scale-x-100 [a[data-status=active]_&]:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
