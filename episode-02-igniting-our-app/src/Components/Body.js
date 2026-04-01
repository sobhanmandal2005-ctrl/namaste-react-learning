import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
import { useState } from "react";
import { restaurantList } from "../utils/mockData";

const Body = () => {

const [ListOfRestaurants, setListOfRestaurants] = useState(restaurantList);



  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn"
        onClick={() => {
          const filteredList = ListOfRestaurants.filter(
            (res) => res.rating > 4.2
          );
          setListOfRestaurants(filteredList);
        }}
        >Top rated Restaurants</button>
      </div>

      <div className="res-containers">
        {
          ListOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;