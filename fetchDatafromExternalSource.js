const fetchData = async () => {
  // Send a GET request to the specified URL
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.001213&lng=75.9608385&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  // Parse the response as JSON
  const json = await data.json();

  // Access the 'cards' array within the JSON response
  const arrayOfCards = json.data.cards;

  // Define the target card type we are looking for
  const restaurant_list = "restaurant_grid_listing";

  // Loop through each 'cardObj' in the 'arrayOfCards'
  for (const cardObj of arrayOfCards) {
    // Check if the current 'cardObj' has a 'card' property and its 'id' matches our target type
    if (cardObj.card.card && cardObj.card.card.id === restaurant_list) {
      // Extract the restaurant data from the 'gridElements' and set it in state
      const resData = cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListOfRestaurants(resData);
      setFilteredRestaurants(resData);
    }
  }
};
