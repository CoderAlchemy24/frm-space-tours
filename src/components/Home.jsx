import React, { Suspense } from "react";
import { useMediaQuery } from "../useMediaQueries";

// Lazy import – csak akkor tölti be, ha tényleg szükséges!
const MobileHome = React.lazy(() => import("./MobileHome"));
const TabletHome = React.lazy(() => import("./TabletHome"));
const DesktopHome = React.lazy(() => import("./DesktopHome"));

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");

  return (
    <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
      {isMobile ? (
        <MobileHome />
      ) : isTablet ? (
        <TabletHome />
      ) : (
        <DesktopHome />
      )}
    </Suspense>
  );
}
