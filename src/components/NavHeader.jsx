import React from "react";

function NavHeader({ cartCount, setIsModalOpen }) {
  return (
    <>
      <div className="w-full h-[100px] shadow-lg flex flex-row items-center justify-around bg-slate-200 sticky top-0 z-50">
        <div className="text-4xl font-bold text-[#6D67E4]">E-ShopKart</div>
        <div
          className="w-24 h-20 border-2 border-[#6D67E4] rounded-full flex justify-center items-center relative cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <svg
            className="w-10 h-10 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="#6D67E4"
              d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
            />
          </svg>
          {cartCount > 0 && (
            <div className="absolute top-2 right-2 bg-white text-[#6D67E4] text-xs font-extrabold w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default NavHeader;
