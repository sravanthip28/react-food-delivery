import "./FoodItem.css";
import { assets } from "../../assets/assets";
import React,{ useContext } from "react";
import { StoreContext } from "../../context/storeContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt={name} className="food-item-img" />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            alt="add to cart"
            className="food-item-add-to-cart"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt="remove from cart"
              className="food-item-add-icon"
              onClick={() => removeFromCart(id)}
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              alt="add to cart"
              className="food-item-remove-icon"
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img
            src={assets.rating_starts}
            alt="rating"
            className="food-item-rating-icon"
          />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
