import React, { Suspense } from "react";
import { useMediaQuery } from "../useMediaQueries";

import { useIdx } from '../IdxContext';


const MobileDestination = React.lazy(() => import("./MobileDestination"));
const TabletDestination = React.lazy(() => import("./TabletDestination"));
const DesktopDestination = React.lazy(() => import("./DesktopDestination"));

export default function Destinations({destinations}) {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");

    if (!Array.isArray(destinations) || destinations.length === 0) return null;
  const { destIdx, setDestIdx } = useIdx();

  return (<>
    {/* <Suspense fallback={<main className="p-4 text-center">Loading...</main>}> */}
      {isMobile ? (
        <MobileDestination destinations={destinations} idx={destIdx}/>
      ) : isTablet ? (
        <TabletDestination destinations={destinations} idx={destIdx}/>
      ) : (
        <DesktopDestination destinations={destinations} idx={destIdx}/>
      )}
   {/*  </Suspense> */}
  </>
  );
}
