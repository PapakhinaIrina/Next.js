import Header from "../componets/header";

export const metadata = {
  title: "Home",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
