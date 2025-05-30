import React from "react";

const LoadingSpinner = ({ size = "md" }) => {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-10 w-10",
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full border-4 border-t-transparent border-primary ${sizes[size]}`}
      />
    </div>
  );
};

export default LoadingSpinner;
