import React from "react";

const useEventListener = (eventName, handler, element = window) => {
  const eventHandlerRef = React.useRef();

  React.useEffect(() => {
    eventHandlerRef.current = handler;
  }, [handler]);

  React.useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;
    const eventListener = (event) => eventHandlerRef.current(event);

    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

export default useEventListener;
