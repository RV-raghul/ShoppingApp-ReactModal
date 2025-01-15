import React from "react";
import ReactStars from "react-rating-stars-component";
import { toast } from "react-hot-toast";

function Card({ cartCount, setCartCount, cartItems, setCartItems, product = {} }) {
  // Add to Cart function
  const addToCart = (product) => {
    const isAlreadyInCart = cartItems.some((item) => item.id === product.id);
    if (isAlreadyInCart) {
      toast.error("Item Already Added");
      return;
    }

    setCartItems([...cartItems, product]);
    setCartCount(cartCount + 1);
    toast.success("Item Added to Cart");
  };

  // Remove from Cart function
  const removeFromCart = (productId) => {
    const isProductInCart = cartItems.some((item) => item.id === productId);
    if (isProductInCart) {
      const updatedCart = cartItems.filter((item) => item.id !== productId);
      setCartItems(updatedCart);
      setCartCount(cartCount - 1);
      toast.success("Item Removed from Cart");
    } else {
      toast.error("Item is not in Cart");
    }
  };

  return (
    <>
      <a href="#" className="group shadow-lg bg-slate-300">
        <img
          src={product.image}
          alt={product.title}
          className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
        />
        <h3 className="mx-2 mt-4 text-sm font-bold text-gray-700">
          {product.title}
        </h3>
        <p className="mx-2 mt-1 text-lg font-medium text-gray-900">
          ${product.price}
        </p>
        <div className="mx-2">
          <ReactStars
            count={5}
            size={24}
            activeColor="yellow"
            value={product.rating.rate}
          />
        </div>
        <div className="mb-2 mt-2 flex text-sm font-semibold justify-center space-x-4">
          <button
            className="w-16 h-8 border-2 border-green-300 bg-green-300 rounded-lg"
            onClick={() => addToCart(product)}
          >
            Add
          </button>
          <button
            className="w-16 h-8 border-2 border-red-300 bg-red-300 rounded-lg"
            onClick={() => removeFromCart(product.id)}
          >
            Remove
          </button>
        </div>
      </a>
    </>
  );
}

export default Card;
