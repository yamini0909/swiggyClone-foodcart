import { IMG_CDN_URL } from "../Images/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        } alt ="Food"
      />
      <div className="card-text">
      <h2 >{name}</h2>
      <h4  className="mg-10">{cuisines.join(", ")}</h4>
      <h4  className="mg-10">{area}</h4>
      <span>
      <h4 className="mg-10"><i className="fa-solid fa-star"></i>{avgRating}</h4>
        <h4 className="mg-10">{lastMileTravelString}</h4>
        <h4 className="mg-10">{costForTwoString}</h4>
      </span>
      </div>
      
    </div>
  );
};

export default RestaurantCard;