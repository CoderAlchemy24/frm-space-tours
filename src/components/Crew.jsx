
  import React, { Suspense } from "react";
  import { useMediaQuery } from "../useMediaQueries";
  
  import { useIdx } from '../IdxContext';
  
  
  const MobileCrew = React.lazy(() => import("./MobileCrew"));
  const TabletCrew = React.lazy(() => import("./TabletCrew"));
  const DesktopCrew = React.lazy(() => import("./DesktopCrew"));
  
  export default function Crews({crews}) {
    const isMobile = useMediaQuery("(max-width: 767px)");
    const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");

      if (!Array.isArray(crews) || crews.length === 0) return null;
    const { crewIdx, setCrewIdx } = useIdx();

    return (<>
      {/* <Suspense fallback={<main className="p-4 text-center">Loading...</main>}> */}
        {isMobile ? (
          <MobileCrew crews={crews} idx={crewIdx}/>
        ) : isTablet ? (
          <TabletCrew crews={crews} idx={crewIdx}/>
        ) : (
          <DesktopCrew crews={crews} idx={crewIdx}/>
        )}
    {/*   </Suspense> */}
  </>  
  );
  }
  