import React from "react";

type MainLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ title, children }) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-[1fr_6fr] sm:grid-rows-[1fr_6fr_1fr]  w-screen h-screen"
      title={title}
    >
      <header className="sm:col-span-2 bg-red-700 p-10 text-center text-white font-bold">
        Header
      </header>
      <aside className=" hidden sm:visible">Sidebar</aside>
      <main className="col-span-1 sm:col-span-2">{children}</main>
      <footer className="sm:col-span-2 bg-red-200 p-10 text-center text-white font-bold">
        Footer
      </footer>
    </div>
  );
};

export default MainLayout;
