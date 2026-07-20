<!-- # PickCart

PickCart is a modern full-stack e-commerce platform built with Next.js, Express.js, MongoDB, and Better Auth. It provides a complete shopping experience for customers and a dedicated dashboard for sellers to manage products.

## Live Demo

**Client:** https://your-client.vercel.app

**Server:** https://your-server.onrender.com

---

## Features

### Authentication

* User registration and login
* Better Auth authentication
* Role-based access (Customer & Seller)
* Protected routes
* Secure session management

### Customer

* Browse all products
* Product details page
* Add products to cart
* Update cart quantity
* Remove items from cart
* Checkout UI
* User dashboard
* Responsive design

### Seller

* Seller dashboard
* Add new products
* Edit existing products
* Delete products
* Manage all products
* View product statistics

### General

* Fully responsive UI
* Modern animations with Framer Motion
* Dark themed interface
* Image upload support
* REST API
* MongoDB database
* Clean project architecture

---

## Tech Stack

### Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS
* HeroUI
* Framer Motion
* TanStack Query
* Better Auth Client
* Lucide React
* Sonner

### Backend

* Node.js
* Express.js
* TypeScript
* MongoDB
* Better Auth

---

## Folder Structure

### Client

```text
src/
│
├── app/
├── components/
├── hooks/
├── lib/
├── providers/
├── services/
├── types/
└── utils/
```

### Server

```text
src/
│
├── auth.ts
├── index.ts
│
└── modules/
    ├── auth/
    ├── product/
    └── user/
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/pickcart.git
```

---

### Client

```bash
cd pickcart-client
npm install
npm run dev
```

---

### Server

```bash
cd pickcart-server
npm install
npm run dev
```

---

## Environment Variables

### Client (.env.local)

```env
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
```

---

### Server (.env)

```env
PORT=5000

MONGODB_URI=

DB_NAME=

BETTER_AUTH_SECRET=

BETTER_AUTH_URL=http://localhost:5000

CLIENT_URL=http://localhost:3000
```

---

## API Endpoints

### Authentication

```
POST /api/register

/api/auth/*
```

### Products

```
GET    /api/products
GET    /api/products/:id
POST   /api/products
PATCH  /api/products/:id
DELETE /api/products/:id
GET    /api/products/seller/:sellerId
```

### Cart

```
GET    /api/cart/:userId
POST   /api/cart
PATCH  /api/cart/:id
DELETE /api/cart/:id
```

---

## Deployment

### Frontend

* Vercel

### Backend

* Render

### Database

* MongoDB Atlas

---

## Future Improvements

* Wishlist
* Online Payment Gateway
* Product Reviews
* Order History
* Search & Filtering
* Product Categories
* Coupon System
* Admin Dashboard
* Email Verification
* Order Tracking

---

## Author

Galib Mehboob -->
