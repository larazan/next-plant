import React from 'react'

const CartButton = () => {
  return (
    <>
      <div className="mt-0 md:hidden w-full">
        <div className="border-black/15 w-full flex bottom-02 left-02 right-02 z-10 max-h-35 border-t-0 bg-white py-3 shadow2">
          <div className="w-full flex flex-row items-center justify-between">
            
            <button
              className="cursor-pointer flex items-center inline-block leading-none select-none text-center focus:outline-none transition-colors disabled:cursor-not-allowed max-h-10 px-6 py-3 relative bg-primary text-white hover:bg-primary-dark disabled:bg-primary/40 rounded-full group"
              aria-label="Add to cart"
              type="button"
              data-variant="rounded_yellow"
            >
              {" "}
              <span className="flex h-3.2 flex-row items-center justify-start xl:h-4">
              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6  transition-transform md:motion-safe:group-hover:-rotate-12 mr-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                Add to cart
              </span>
            </button>
            <span className="text-base font-bold text-gray-900">€37.95</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartButton