import { useEffect } from "react";
import { useState } from "react"; 
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{
    const [resInfo, setResInfo] = useState([]);
    useEffect(() =>{
        fetchMenu();
    },[]);



    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4826846&lng=74.0189955&restaurantId=2494&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);

        setResInfo(json.data);
        
    }

    if(resInfo == null) return <Shimmer />;

//     const {name,cuisines,cloudinaryImageId,totalRatingsString} =
//  resInfo?.data.cards[2];

    return(
        <div className = "menu">
            <h>{name}</h>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Puranpoli</li>
                <li>Amras</li>
            </ul>
        </div>
    );
};



export default RestaurantMenu;