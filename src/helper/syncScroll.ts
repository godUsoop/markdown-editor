import { RefObject } from "react";


const syncScroll = (
    source: HTMLElement | null,
    target: HTMLElement | null,
    isSyncingFromSource: RefObject<boolean>,
    isSyncingFromTarget: RefObject<boolean>
) => {
    if (!source || !target) return;
  
    if (isSyncingFromTarget.current) {
      isSyncingFromTarget.current = false;
      return;
    }
    isSyncingFromSource.current = true;
  
    const scrollRatio = source.scrollTop / (source.scrollHeight - source.clientHeight);
    target.scrollTop = scrollRatio * (target.scrollHeight - target.clientHeight);
  };
export default syncScroll;