import React from "react";

const SearchBox = (value, onChange) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
      placeholder="Search..."
    />
  );
};

export default SearchBox;
