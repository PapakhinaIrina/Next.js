import Header from "../componets/header";

export const metadata = {
  title: "Home",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 h-[76px] z-50">
        <Header />
      </div>

      <div className="flex-1 pt-[76px] overflow-hidden">
        <div className="h-full overflow-auto">
          <div className="flex justify-center items-start min-h-full p-4">
            <div className="w-full max-w-xl px-4 py-8">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
