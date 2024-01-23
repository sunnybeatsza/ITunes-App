import React from "react";
import { Sidemenu } from "../../components/Sidemenu/Sidemenu";
import { SearchLayout } from "../../components/SearchLayout/SearchLayout";

export const SearchPage = () => {
  return (
    <div className="Home-container">
      <Sidemenu />
      <SearchLayout />
    </div>
  );
};
