// components/TawkWidget.tsx
import { useEffect } from "react";

const TawkWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = 'https://embed.tawk.to/67fab97feb3425190cae74e8/1iolm96tp';
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // it's just a background widget
};

export default TawkWidget;
