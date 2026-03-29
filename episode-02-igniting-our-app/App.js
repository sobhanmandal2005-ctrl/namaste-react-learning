import React from "react";
import ReactDOM from "react-dom/client";

// Header
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-express-by-gigih-rudya-designcrowd.png"
          alt="logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

 const restaurantList = [
  {
    id: "1",
    name: "Meghana Foods",
    cuisine: "Biryani, South Indian",
    rating: "4.3",
    deliveryTime: "30 mins",
    costForTwo: "₹300",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    id: "2",
    name: "KFC",
    cuisine: "Burger, Fast Food",
    rating: "4.1",
    deliveryTime: "28 mins",
    costForTwo: "₹400",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    id: "3",
    name: "Domino's Pizza",
    cuisine: "Pizza, Italian",
    rating: "4.2",
    deliveryTime: "25 mins",
    costForTwo: "₹350",
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",
  },
  {
    id: "4",
    name: "Burger King",
    cuisine: "Burger, American",
    rating: "4.0",
    deliveryTime: "30 mins",
    costForTwo: "₹300",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
  {
    id: "5",
    name: "Wow! Momo",
    cuisine: "Momos, Fast Food",
    rating: "4.2",
    deliveryTime: "22 mins",
    costForTwo: "₹250",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
  },
  {
    id: "6",
    name: "Haldiram's",
    cuisine: "North Indian, Snacks",
    rating: "4.3",
    deliveryTime: "27 mins",
    costForTwo: "₹320",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  },
  {
    id: "7",
    name: "Subway",
    cuisine: "Healthy, Sandwich",
    rating: "4.1",
    deliveryTime: "24 mins",
    costForTwo: "₹280",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  },
  {
    id: "8",
    name: "Biryani Blues",
    cuisine: "Biryani, Mughlai",
    rating: "4.2",
    deliveryTime: "29 mins",
    costForTwo: "₹350",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  },
  {
    id: "9",
    name: "Pizza Hut",
    cuisine: "Pizza, Fast Food",
    rating: "4.0",
    deliveryTime: "26 mins",
    costForTwo: "₹370",
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212",
  },
  {
    id: "10",
    name: "Rolls King",
    cuisine: "Rolls, Fast Food",
    rating: "4.1",
    deliveryTime: "23 mins",
    costForTwo: "₹220",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
  },
];

// Restaurant Card
const RestaurantCard = (props) => {
  const { resData } = props;

  const {image, name, cuisine, rating, deliveryTime, costForTwo} = resData;

  return (
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img
        className="res-logo"
        src={image}
        alt="restaurant"
      />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating} ⭐</h4>
      <h4>Delivery Time: {deliveryTime}</h4>
      <h4>Cost for Two: {costForTwo}</h4>
    </div>
  );
};

// Body
const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
        />
      </div>

      <div className="res-containers">
        {
          restaurantList.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  );
};

// App Layout
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);