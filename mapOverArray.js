<div className="res-container">
      
       {filteredRestaurants.map((restaurant) => (
          <RestaurantCard   
            key={restaurant?.info.id} 
            resData={restaurant} 
          />
        ))}
      </div>
