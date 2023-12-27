import React from 'react'

const SortOpt = () => {
  return (
    <>
      <div className=" col-span-full col-start-1 flex flex-wrap items-center justify-between gap-2 md:col-start-5 md:flex-nowrap xl:col-start-4 xl:col-end-12 ">
        <div className="flex flex-row items-center justify-between gap-3">
          <span className="flex-none">sort by:</span>
          <select className="w-full py-1 xl:py-2 focus:border-primary focus:ring focus:ring-inset focus:ring-primary disabled:bg-grayish disabled:bg-none h-full border border-gray-400 px-2 rounded-full pr-2 text-sm leading-none">
            <option value="default" selected="">
              recommended sorting
            </option>
            <option value="name-asc">name: ascending</option>
            <option value="name-desc">name: descending</option>
            <option value="price-asc">price: low to high</option>
            <option value="price-desc">price: high to low</option>
            <option value="relevance-asc">relevance: ascending</option>
            <option value="relevance-desc">relevance: descending</option>
          </select>
        </div>
        <span>showing 1-20 of 583 results</span>
      </div>
    </>
  );
}

export default SortOpt