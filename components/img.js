import React from "react";
import Image from "next/image";

const Img = ({ src, alt, layout, ...rest }) => {
  // Convert legacy layout prop to new Next.js 13+ format
  const imageProps = { ...rest };
  
  if (layout === "responsive") {
    imageProps.sizes = "100vw";
    imageProps.style = {
      width: '100%',
      height: 'auto',
    };
  } else if (layout === "fixed") {
    // For fixed layout, keep width and height from props
  } else if (layout === "fill") {
    imageProps.fill = true;
  }
  
  return <Image src={src} alt={alt} {...imageProps} />;
};

export default Img;
