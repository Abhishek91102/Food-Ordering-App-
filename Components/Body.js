// import resList from "../Utils/MockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";



const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  console.log("Body Rendered")


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5011615&lng=73.9359571&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();

    // console.log(json);
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setListOfRestraunt(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };




  return listOfRestaurants == 0 ? (<Shimmer />) : (
    <div className="body">
      <div className="filter">

        <div className="search">
          <input type="text" className="search-box"
            value={searchText}
            onChange={(e) => { setSearchText(e.target.value); }}>
          </input>

         
          <button
            className="searchBtn"
            onClick={() => {
              
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name.toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filteredRestaurant);
              
            }}
          >
            Search
          </button>
        </div>










        <button className="filter-btn"
          onClick={() => {
            const filtered = listOfRestaurants.filter((res) => parseFloat(res.info.avgRating) > 4);
            setFilteredRestaurant(filtered)
          }}
        >TOP Rated Restaurants
        </button>

      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;