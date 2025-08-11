import { RoutePath } from "@/shared/config/routePath";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-bold text-white tracking-widest">404</h1>
      <p className="text-2xl font-medium text-white mt-4">
        This page doesn&apos;t exist. Or maybe it moved.
      </p>
      <Link
        href={RoutePath.home}
        className="text-sm text-blue-500 hover:underline mt-4"
      >
        Back Home
      </Link>
    </div>
  );
}
