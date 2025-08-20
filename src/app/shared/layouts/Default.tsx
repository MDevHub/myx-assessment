"use client";

import Header from "@/app/shared/components/header/Header"; // Header path

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Full Header with 2 rows */}
      <Header />

      {/* Main content */}
      <main className="">{children}</main>
    </div>
  );
};

export default DefaultLayout;
