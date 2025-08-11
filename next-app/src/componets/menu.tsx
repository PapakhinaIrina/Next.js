import { RoutePath } from "@/shared/config/routePath";
import Link from "next/link";

export function Menu() {
  return (
    <nav className="max-w-6xl mx-auto flex gap-8 p-4">
      <Link
        href={RoutePath.home}
        className="text-white font-medium text-lg px-4 py-2 rounded transition-colors
                     hover:text-blue-400 hover:bg-blue-400/10"
      >
        Home
      </Link>
      <Link
        href={RoutePath.profile.base}
        className="text-white font-medium text-lg px-4 py-2 rounded transition-colors
                     hover:text-blue-400 hover:bg-blue-400/10"
      >
        Profile
      </Link>
      <Link
        href={RoutePath.contact}
        className="text-white font-medium text-lg px-4 py-2 rounded transition-colors
                     hover:text-blue-400 hover:bg-blue-400/10"
      >
        Contact
      </Link>
    </nav>
  );
}
