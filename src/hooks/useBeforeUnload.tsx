import { useEffect } from "react";

export default function useBeforeUnload(dependencies:any,callback:()=>void) {
  useEffect(() => {
    if (dependencies) return;

    function beforeUnload(e: BeforeUnloadEvent) {
      e.preventDefault();
      const isLeave = confirm('Are you sure you want to leave?');
      if (isLeave) callback();
    }

    window.addEventListener('beforeunload', beforeUnload);
    return () => {
      window.removeEventListener('beforeunload', beforeUnload);
    };
  }, [dependencies]);

  return null
}