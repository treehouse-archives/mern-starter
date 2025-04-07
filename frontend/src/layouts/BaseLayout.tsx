import Header from "@/components/layout/Header";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const BaseLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <main className="size-full min-h-screen">
        <Header />
        <div className="mx-auto max-w-2xl space-y-5 px-5 py-14 md:space-y-7">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default BaseLayout;
