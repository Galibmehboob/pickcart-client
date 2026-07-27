"use client";

import React from "react";
interface FilterSidebarProps {
  category: string;
  onCategoryChange: (value: string) => void;

  minPrice: string;
  maxPrice: string;

  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;

  sort: string;
  onSortChange: (value: string) => void;
}

const categories = [
  "daily",
  "electronics",
  "fashion",
  "food",
  "others",
];

function FilterSidebar({
  category,
  onCategoryChange,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
  sort,
  onSortChange,
}: FilterSidebarProps) {

  return (
    <aside className="space-y-4 rounded-xl border p-4">

      <h3 className="text-lg font-semibold">
        Categories
      </h3>


      <div className="space-y-2">


        {/* All Products */}
        <button
          onClick={() => onCategoryChange("")}
          className={`w-full rounded-lg px-3 py-2 text-left transition ${
            category === ""
              ? "bg-slate-900 text-white"
              : "hover:bg-slate-100"
          }`}
        >
          All Products
        </button>



        {categories.map((item) => (

          <button
            key={item}
            onClick={() => onCategoryChange(item)}
            className={`w-full rounded-lg px-3 py-2 text-left capitalize transition ${
              category === item
                ? "bg-slate-900 text-white"
                : "hover:bg-slate-100"
            }`}
          >
            {item}

          </button>

        ))}
{/* Price Range */}
<div className="mt-8">
  <h3 className="mb-3 text-sm font-semibold">
    Price Range
  </h3>

  <div className="space-y-3">

    <input
      type="number"
      placeholder="Min Price"
      value={minPrice}
      onChange={(e) =>
        onMinPriceChange(e.target.value)
      }
      className="w-full rounded-lg border border-default-300 px-3 py-2 text-sm outline-none focus:border-primary"
    />

    <input
      type="number"
      placeholder="Max Price"
      value={maxPrice}
      onChange={(e) =>
        onMaxPriceChange(e.target.value)
      }
      className="w-full rounded-lg border border-default-300 px-3 py-2 text-sm outline-none focus:border-primary"
    />

  </div>
</div>

{/* Sort */}
<div className="mt-8">
  <h3 className="mb-3 text-sm font-semibold">
    Sort By
  </h3>

  <select
    value={sort}
    onChange={(e) => onSortChange(e.target.value)}
    className="w-full rounded-lg border border-default-300 px-3 py-2 text-sm outline-none focus:border-primary"
  >
    <option value="newest">
      Newest
    </option>

    <option value="price_asc">
      Price: Low to High
    </option>

    <option value="price_desc">
      Price: High to Low
    </option>
  </select>
</div>

      </div>

    </aside>
  );
}

export default React.memo(FilterSidebar);