import React from "react";
import Link from "@/components/link";

const Logo = ({ variant = "default", design = "modern", size = "default" }) => {
  // Choose logo based on variant and design
  let logoSrc;
  
  if (design === "minimal") {
    logoSrc = "/logo-freezelines-minimal.svg";
  } else if (variant === "white") {
    logoSrc = "/logo-freezelines-white.svg";
  } else {
    logoSrc = "/logo-freezelines.svg";
  }
  
  const sizeClasses = {
    small: "w-36 h-10",
    default: "w-52 h-14", 
    large: "w-64 h-16"
  };

  return (
    <Link href="/" className="logo-container">
      <img
        src={"/logo-design.png"}
        alt="Freezelines Services - Professional HVAC Solutions"
        className={`logo ${sizeClasses[size]} transition-all duration-300 hover:scale-105`}
        style={{ height: 'auto' }}
      />
      <img
        src={logoSrc}
        alt="Freezelines Services - Professional HVAC Solutions"
        className={`logo ${sizeClasses[size]} transition-all duration-300 hover:scale-105`}
        style={{ height: 'auto' }}
      />
    </Link>
  );
};

export default Logo;
