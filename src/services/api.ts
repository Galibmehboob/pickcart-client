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

  const contentType = response.headers.get("content-type");

  let data: unknown = null;

  if (contentType?.includes("application/json")) {
    data = await response.json();
  }

  if (!response.ok) {
    const message =
      typeof data === "object" &&
      data !== null &&
      "message" in data &&
      typeof data.message === "string"
        ? data.message
        : `Request failed with status ${response.status}`;

    throw new Error(message);
  }

  return data as T;
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

  return request<Product[]>(
    `/products${query ? `?${query}` : ""}`,
  );
}

export async function getProductById(
  id: string,
): Promise<Product> {
  return request<Product>(`/products/${id}`);
}

export async function createProduct(
  data: Product,
): Promise<Product> {
  return request<Product>("/products", {
    method: "POST",
    body: data,
  });
}

export async function updateProduct(
  id: string,
  data: Partial<Product>,
): Promise<Product> {
  return request<Product>(`/products/${id}`, {
    method: "PATCH",
    body: data,
  });
}

export async function deleteProduct(
  id: string,
): Promise<void> {
  await request<void>(`/products/${id}`, {
    method: "DELETE",
  });
}