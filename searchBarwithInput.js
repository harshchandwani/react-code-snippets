// This function is called when the "Search" button is clicked.
const handleSearch = () => {
  // Apply the logic of filtering the list of restaurants based on the entered search text.

  // Use the 'filter' method to create a new array ('filteredRestaurant') containing
  // only the restaurants whose names include the 'searchText', regardless of case.
  const filteredRestaurant = listOfRestaurants.filter((res) =>
    res?.info.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Update the state 'filteredRestaurants' with the filtered results.
  setFilteredRestaurants(filteredRestaurant);
};

// The following JSX code represents a search input field and a search button.
<div className="search">
  {/* Input field for entering the search text */}
  <input 
    type="text" 
    className="search-box" 
    // The 'value' property is bound to the 'searchText' state,
    // so it displays the current search text in the input field.
    value={searchText}
    // When the user types in the input field, this 'onChange' event handler
    // updates the 'searchText' state with the new value entered.
    onChange={(event) => setSearchText(event.target.value)}
  ></input>
  
  {/* Button for triggering the search */}
  <button 
    className="search-btn"
    // When the "Search" button is clicked, it calls the 'handleSearch' function
    // to filter the list of restaurants based on the entered search text.
    onClick={handleSearch}
  >Search</button>
</div>
