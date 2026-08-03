export function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ruiqi He
        </p>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <a href="https://github.com/ricky-he2006" target="_blank" rel="noreferrer" className="hover:text-primary">GitHub</a>
          <a href="https://www.linkedin.com/in/rickyhe2006" target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a>
          <a href="https://devpost.com/rickyhe2006?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noreferrer" className="hover:text-primary">Devpost</a>
          <a href="mailto:he.2497@osu.edu" className="hover:text-primary">Email</a>
        </div>
      </div>
    </footer>
  );
}
