import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 shadow-md">
      <nav className="max-w-6xl mx-auto flex gap-8 p-4">
        <Link
          href="/"
          className="text-white font-medium text-lg px-4 py-2 rounded transition-colors
                     hover:text-blue-400 hover:bg-blue-400/10"
        >
          Home
        </Link>
        <Link
          href="/profile"
          className="text-white font-medium text-lg px-4 py-2 rounded transition-colors
                     hover:text-blue-400 hover:bg-blue-400/10"
        >
          Profile
        </Link>
        <Link
          href="/contact"
          className="text-white font-medium text-lg px-4 py-2 rounded transition-colors
                     hover:text-blue-400 hover:bg-blue-400/10"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
