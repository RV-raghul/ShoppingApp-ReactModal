import React, { useEffect, useState } from "react";
import NavHeader from "./components/NavHeader";
import Card from "./components/Card";
import { Toaster } from "react-hot-toast";

function App() {
  const [data, setData] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch data from API
  const getData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error.message || error));
  };

  useEffect(() => {
    getData();
  }, []);

  // Calculate total price of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    setCartCount(cartCount - 1);
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <NavHeader cartCount={cartCount} setIsModalOpen={setIsModalOpen} />
      <div className="bg-[#E5E0FF]">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {data.map((item) => (
              <Card
                key={item.id}
                cartCount={cartCount}
                setCartCount={setCartCount}
                cartItems={cartItems}
                setCartItems={setCartItems}
                product={item}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[75vw] h-[75vh] relative overflow-auto">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>
            <div className="flex justify-center ">
              <h2 className="text-4xl font-bold mb-4 text-[#6D67E4]">Cart Items</h2>
            </div>
            {cartItems.length > 0 ? (
              <div>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center mb-4 border-b pb-2"
                  >
                    <div>
                      <div className="flex flex-row gap-3 items-center">
                      <img src={item.image} alt=""  className="w-20 h-20"/>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-gray-600">${item.price}</p>
                      </div>
                      </div>
                    </div>
                    <button
                      className="text-red-500 text-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <div className="mt-4 flex flex-col items-end ">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Total: ${calculateTotal()}
                    </h3>
                  </div>
                  <div>
                    <button className="w-[100px] mt-4 bg-[#6D67E4] text-white py-2 px-4 rounded-lg hover:bg-violet-600">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            ) : (

              // <div className="w-full h-full flex justify-center items-center">
              <p className="text-2xl text-center">Your Cart is empty!</p>
              // </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
