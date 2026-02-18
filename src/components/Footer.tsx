export function Footer() {
  return (
    <footer className="border-t border-stone-800/50 px-6 py-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-sm text-stone-600">
          © {new Date().getFullYear()} Bryan Labchuk
        </p>
      </div>
    </footer>
  );
}
