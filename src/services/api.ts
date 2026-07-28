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
export interface PlaceOrderPayload {
  userId: string;

 customer: {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  area: string;
  streetAddress: string;
  postalCode: string;
  paymentMethod: "cod" | "card";
  orderNotes: string;
};
  items: {
  productId: string;
  sellerId: string;
  sellerEmail: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}[];

  total: number;

  paymentMethod: string;
}
export interface ProductsResponse {
  data: Product[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
interface GetProductsParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  sort?: string;
  featured?: boolean;

  minPrice?: number;
  maxPrice?: number;
}

export async function getProducts(
  params: GetProductsParams = {},
): Promise<ProductsResponse> {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      searchParams.set(key, String(value));
    }
  });

  const query = searchParams.toString();

  const response = await fetch(
    `${BASE_URL}/api/products${query ? `?${query}` : ""}`,
    {
      credentials: "include",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products.");
  }

  return response.json();
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

  sellerId: string;
  sellerEmail: string;

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

/* ---------------- AI ---------------- */

export interface AIHistory {
  role: "user" | "assistant";
  content: string;
}

export async function chatWithAI(
  message: string,
  history: {
    role: "user" | "assistant";
    content: string;
  }[]
) {
  return request<string>("/api/ai/chat", {
    method: "POST",
    body: {
      message,
      history,
    },
  });
}
export interface GenerateDescriptionPayload {
  name: string;
  category: string;
  brand: string;
  keywords: string;
  length: string;
}

export async function generateDescription(
  payload: GenerateDescriptionPayload
) {
  return request<string>(
    "/api/ai/generate-description",
    {
      method: "POST",
      body: payload,
    }
  );
}
export async function placeOrder(
  data: PlaceOrderPayload
) {
  return request("/api/orders", {
    method: "POST",
    body: data,
  });
}

export interface Order {
  _id: string;

  userId: string;

  customer: {
    fullName: string;
    email: string;
    phone: string;
    country: string;
    city: string;
    area: string;
    streetAddress: string;
    postalCode: string;
    paymentMethod: "cod" | "card";
    orderNotes: string;
  };

  items: {
    productId: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
  }[];

  total: number;

  paymentMethod: string;

  status: string;

  createdAt: string;
}

export async function getMyOrders(
  userId: string
) {
  return request<Order[]>(
    `/api/orders/${userId}`
  );
}
interface SellerOrder {
  _id: string;
  userId: string;

  total: number;

  status: string;

  createdAt: string;

  customer: {
    fullName: string;

    phone: string;
  };

  items: {
    productId: string;

    sellerId: string;

    sellerEmail: string;

    name: string;

    quantity: number;

    price: number;
  }[];
}

export async function getSellerOrders(
  sellerId: string
) {
  return request<SellerOrder[]>(
    `/api/orders/seller/${sellerId}`
  );
}