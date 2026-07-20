import { Product } from "@/types/product";

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;

if (!BASE_URL) {
  throw new Error("NEXT_PUBLIC_SERVER_URL is not defined.");
}

interface RequestOptions extends Omit<RequestInit, "body"> {
  body?: unknown;
}

async function request<T>(
  endpoint: string,
  options: RequestOptions = {},
): Promise<T> {
  const { body, headers, ...rest } = options;

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...rest,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(
      json.message || `Request failed with status ${response.status}`
    );
  }

  return json.data as T;
}

interface GetProductsParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  sort?: string;
  featured?: boolean;
}

export async function getProducts(
  params: GetProductsParams = {},
): Promise<Product[]> {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      searchParams.set(key, String(value));
    }
  });

  const query = searchParams.toString();

return request<Product[]>(`/api/products${query ? `?${query}` : ""}`);
}

export async function getProductById(
  id: string,
): Promise<Product> {
  return request<Product>(`/api/products/${id}`);
}

export async function createProduct(
  data: Product,
): Promise<Product> {
 return request<Product>("/api/products", {
  method: "POST",
  body: data,
});
}

export async function updateProduct(
  id: string,
  data: Partial<Product>,
): Promise<Product> {
return request<Product>(`/api/products/${id}`, {
  method: "PATCH",
  body: data,
});
}

export async function deleteProduct(
  id: string,
): Promise<void> {
 await request<void>(`/api/products/${id}`, {
  method: "DELETE",
});
}

/* ---------------- CART ---------------- */

export interface CartItem {
  _id?: string;
  userId: string;
  productId: string;

  name: string;
  image: string;

  price: number;

  quantity: number;
}

export async function addToCart(
  data: Omit<CartItem, "_id" | "quantity">
) {
  return request("/api/cart", {
    method: "POST",
    body: data,
  });
}

export async function getCart(userId: string) {
  return request<CartItem[]>(`/api/cart/${userId}`);
}

export async function updateCart(
  id: string,
  quantity: number
) {
  return request(`/api/cart/${id}`, {
    method: "PATCH",
    body: {
      quantity,
    },
  });
}

export async function removeCart(id: string) {
  return request(`/api/cart/${id}`, {
    method: "DELETE",
  });
}

export async function clearCart(userId: string) {
  return request(`/api/cart/clear/${userId}`, {
    method: "DELETE",
  });
}