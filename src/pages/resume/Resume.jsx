import React, { useEffect } from "react";

const Resume = () => {


  return (
    <div className="overflow-hidden pt-16 xs:pt-0 xs:w-[calc(100%-5rem)] xs:absolute xs:right-0 bg-transparent">
      <div
        className="bg-transparent"
        style={{
          position: "relative",
          width: "100%",
          height: 0,
          paddingTop: "140.8%",
          paddingBottom: 0,
          overflow: "hidden",
          willChange: "transform",
        }}>
        <iframe
          id="pdfEmbed"
          loading="lazy"
          className="bg-transparent"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            border: "none",
            padding: 0,
            margin: 0,
          }}
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFQu2PiswY&#x2F;view?embed"
          allowFullScreen={true}
          allow="fullscreen"
        />
      </div>
    </div>
  );
};

export default Resume;


