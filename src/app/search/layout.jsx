import SearchHeader from "@/components/SearchHeader"; //we want this header to be on both the pages(web,image).
import React from "react";


const layout = ({ children }) => {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
};

export default layout;
