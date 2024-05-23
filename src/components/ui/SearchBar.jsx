import React, { useState } from "react";
import { censoringWords } from "../../utils/profanityFilter"; // Import the profanity filter function
import "./SearchBar.css";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    // Apply the profanity filter to the search text before performing the search
    const filteredText = censoringWords(searchText);
    //Encode the filtered text to use in URL, special characters (like @%) in the URL, which are not properly encoded gives error.
    const encodedText = encodeURIComponent(filteredText);
    // Perform the search with the filtered text
    console.log("Filtered search text:", encodedText);
    // Navigate to the search results page with the filtered text
    window.location.href = `/recipes/search/${encodedText}`;
  };

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search any recipe by name, ingredient, style, cuisine type..."
        value={searchText}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
