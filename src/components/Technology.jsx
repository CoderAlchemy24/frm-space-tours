    import React, { Suspense } from "react";
    import { useMediaQuery } from "../useMediaQueries";
    
    import { useIdx } from '../IdxContext';
    
    
    const MobileTechnology = React.lazy(() => import("./MobileTechnology"));
    const TabletTechnology = React.lazy(() => import("./TabletTechnology"));
    const DesktopTechnology = React.lazy(() => import("./DesktopTechnology"));
    
    export default function technologies({technologies}) {
      const isMobile = useMediaQuery("(max-width: 767px)");
      const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");

        if (!Array.isArray(technologies) || technologies.length === 0) return null;
      const { techIdx, setTechIdx } = useIdx();
  
      return (
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          {isMobile ? (
            <MobileTechnology technologies={technologies} idx={techIdx}/>
          ) : isTablet ? (
            <TabletTechnology technologies={technologies} idx={techIdx}/>
          ) : (
            <DesktopTechnology technologies={technologies} idx={techIdx}/>
          )}
        </Suspense>
      );
    }