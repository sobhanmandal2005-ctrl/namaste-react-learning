

// Restaurant Card
const RestaurantCard = (props) => {
  const { resData } = props;

  const {image, name, cuisine, rating, deliveryTime, costForTwo} = resData;

  return (
    <div className="res-card" style={{backgroundColor:"#dfdada"}}>
      <img
        className="res-logo"
        src={resData.image}
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

export default RestaurantCard;