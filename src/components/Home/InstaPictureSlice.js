import React, { useEffect } from 'react';

const InstaPictureSlice = () => {

  useEffect(() => {
    // Dynamically load the Instagram embed script
    const script = document.createElement('script');
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);
  }, []); // Empty dependency array to only run once on component mount


  return (
    <div className="flex-grow flex items-center justify-center">
      <div className="grid grid-col-position gap-8 w-screen">
      <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/C-SHgSYSGEP/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: "none",
            margin: "1px",
            maxWidth: "540px",
            width: "calc(100% - 2px)",
            height: "500px",  // Fixed height
            borderRadius: "3px",
            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.5),0 1px 10px 0 rgba(0, 0, 0, 0.15)",
            padding: "0",
            display: "block",
            overflow: "hidden", // Hide any overflow content
          }}
        ></blockquote>

        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/C-SHeajyXsF/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: "none",
            margin: "1px",
            maxWidth: "540px",
            width: "calc(100% - 2px)",
            height: "500px",  // Fixed height
            borderRadius: "3px",
            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.5),0 1px 10px 0 rgba(0, 0, 0, 0.15)",
            padding: "0",
            display: "block",
            overflow: "hidden",
          }}
        ></blockquote>

        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/C-SHgSYSGEP/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: "none",
            margin: "1px",
            maxWidth: "540px",
            width: "calc(100% - 2px)",
            height: "500px",  // Fixed height
            borderRadius: "3px",
            boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.5),0 1px 10px 0 rgba(0, 0, 0, 0.15)",
            padding: "0",
            display: "block",
            overflow: "hidden",
          }}
        ></blockquote>
      </div>
    </div>
  );

};

export default React.memo(InstaPictureSlice);

