"use client";

import {  useEffect,useCallback,useState } from "react";
import {
  useQuery,
} from "@tanstack/react-query";

import SearchBar from "@/components/product/SearchBar";
import ProductCard from "@/components/product/ProductCard";
import AIChatButton from "@/components/ai/AIChatButton";
import AIChatDrawer from "@/components/ai/AIChatDrawer";
import Pagination from "@/components/product/Pagination";
import { getProducts } from "@/services/api";
import useDebounce from "@/hooks/useDebounce";
import FilterSidebar from "@/components/product/FilterSidebar";


export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
const [maxPrice, setMaxPrice] = useState("");
const [sort, setSort] = useState("newest");
const [page, setPage] = useState(1);
const [open, setOpen] = useState(false);

const handleCategoryChange = useCallback(
  (value: string) => {
    setCategory(value);
  },
  []
);
  const debouncedSearch = useDebounce(search, 500);


  
 const {
  data,
  isLoading,
  isError,
  refetch,
} = useQuery({
 queryKey: [
  "products",
  debouncedSearch,
  category,
  minPrice,
  maxPrice,
  sort,
  page,
],

  queryFn: () =>
  getProducts({
  page,
  limit: 12,
  search: debouncedSearch,
  category,
  minPrice: minPrice ? Number(minPrice) : undefined,
  maxPrice: maxPrice ? Number(maxPrice) : undefined,
  sort,
}),

  placeholderData: (previousData) => previousData,
});


  const products = data?.data ?? [];
  const meta = data?.meta;


  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl space-y-10">


        {/* Header */}
        <div className="flex flex-col gap-6 border-b border-slate-200/80 pb-6 md:flex-row md:items-center md:justify-between">

          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Explore Products
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Find the best items tailored for your everyday needs
            </p>
          </div>


          <div className="w-full md:w-80">
            <SearchBar
              value={search}
              onChange={setSearch}
            />
          </div>

        </div>



        {/* Loading */}
        {isLoading && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="h-80 animate-pulse rounded-2xl border border-slate-100 bg-slate-200/60"
              />
            ))}

          </div>
        )}



        {/* Error */}
        {isError && (
          <div className="mx-auto max-w-md space-y-4 py-20 text-center">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
              ⚠️
            </div>


            <h2 className="text-lg font-semibold text-slate-900">
              Failed to load products
            </h2>


            <p className="text-sm text-slate-500">
              Something went wrong while fetching products.
            </p>


            <button
              onClick={() => refetch()}
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Try Again
            </button>

          </div>
        )}



        {/* Main Content */}
        {!isLoading && !isError && (

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">


            {/* Sidebar */}
           <aside className="lg:col-span-1">
  <div className="lg:sticky lg:top-24">
    <FilterSidebar
      category={category}
      onCategoryChange={handleCategoryChange}
      minPrice={minPrice}
      maxPrice={maxPrice}
      onMinPriceChange={setMinPrice}
      onMaxPriceChange={setMaxPrice}
      sort={sort}
      onSortChange={setSort}
    />
  </div>
</aside>



            {/* Products */}
            <section className="lg:col-span-3">
{products.length > 0 ? (
  <>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
        />
      ))}
    </div>

    <Pagination
      currentPage={page}
      totalPages={meta?.totalPages ?? 1}
      onPageChange={setPage}
    />
  </>

              ) : (

                <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-slate-200 text-center">

                  <div className="text-4xl">
                    🔍
                  </div>


                  <h2 className="mt-3 text-lg font-semibold text-slate-900">
                    No products found
                  </h2>


                  <p className="mt-2 text-sm text-slate-500">
                    Try changing your search or category filter.
                  </p>


                </div>

              )}

            </section>


          </div>

        )}


      </div>
<>
  <AIChatButton
    onOpen={() => setOpen(true)}
  />

  <AIChatDrawer
    open={open}
    onClose={() => setOpen(false)}
  />
</>
    </div>
  );
}