import React from "react";

const DropItem = ({ open, toggle, title, desc }) => {
  return (
    <div className="w-full pt-0">
      <dt className="w-full text-[16px]">
        <button
          className="flex items-center justify-between w-full text-left group text-gray-400"
          id="headlessui-disclosure-button-11"
          type="button"
          aria-expanded="true"
          aria-controls="headlessui-disclosure-panel-12"
          onClick={toggle}
        >
          <span className="font-medium text-gray-900">{title}</span>
          <span className={`flex items-center ml-0  px-1.5 py-1.5   ${open ? 'rounded-full bg-gray-900' : ''} `}>
            <span className="text-primary font-normal text-2xl">
              {open ? (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-900 transition duration-150 group-hover:rotate-90"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
              )}
            </span>
          </span>
        </button>
      </dt>
      {open ? (
        <dd className="pr-12 mt-2" id="headlessui-disclosure-panel-12">
        <p className="text-base text-gray-700">
          <div>{desc}</div>
        </p>
      </dd>
      ) : (
        <></>
      )}
    </div>
  );

};

export default DropItem;