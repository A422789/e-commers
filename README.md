# 🛍️ E-Commerce Storefront

> A modern, feature-rich, and fully responsive e-commerce storefront built with React and Bootstrap. This application provides a seamless shopping experience, allowing users to browse products, manage a shopping cart, and handle their accounts, with robust state management for both authenticated users and guests.

**Live Demo:** **[https://a422789.github.io/e-commers/](https://a422789.github.io/e-commers/ )**

---

## ✨ Core Features

This application is designed to provide a complete and intuitive user journey from browsing to checkout.

### User & Guest Experience
*   **Guest Browsing:** Visitors can freely browse the entire product catalog without needing an account.
*   **Persistent Guest Cart:** Guests can add items to their shopping cart, and the cart state is saved locally in their browser using **Local Storage**. This ensures their selections are not lost between sessions.
*   **User Authentication:** A full authentication system allows users to create an account, log in, and log out.
*   **Account-Synced Cart:** For logged-in users, the shopping cart is synchronized with their account, allowing them to access their cart from any device.
*   **Smart Admin Redirection:** The system intelligently identifies users with an "Admin" role upon login and automatically redirects them to the dedicated admin panel.

### Shopping & Navigation
*   **Dynamic Product Catalog:** All products are fetched dynamically from the backend, ensuring the storefront is always up-to-date.
*   **Interactive Shopping Cart:** Users can easily add products to their cart, view cart contents, and adjust item quantities.
*   **Smooth Page Navigation:** Built as a Single Page Application (SPA) using **React Router** for instant, seamless navigation between pages without full-page reloads.

### Technical Excellence
*   **Custom Hooks:** The project leverages custom hooks like `useLocalStorage` for persistent state and `useApi` for streamlined, reusable API requests, demonstrating a deep understanding of React's composition model.
*   **Responsive First Design:** Using the **React Bootstrap** framework, the UI is meticulously crafted to provide an optimal viewing and interaction experience across all devices, from small mobile screens to large desktops.

---

## 🛠️ Tech Stack

*   **[React.js](https://reactjs.org/ ):** A JavaScript library for building powerful, component-based user interfaces.
*   **[React Bootstrap](https://react-bootstrap.github.io/ ):** The most popular front-end framework, rebuilt for React, used for the responsive grid and UI components.
*   **[React Router](https://reactrouter.com/ ):** For declarative routing and managing navigation within the SPA.
*   **[Axios](https://axios-http.com/ ):** A promise-based HTTP client for making asynchronous requests to the backend API.
*   **Custom Hooks:** For abstracting and reusing stateful logic (`useLocalStorage`, `useApi`).

---

## 🔗 The Full E-Commerce System

This repository represents the **client-facing storefront** of a complete e-commerce ecosystem. The products, inventory, and users are managed through a separate, powerful admin panel.

*   **To view the Admin Panel code:** ➡️ [**Admin Panel Repository**](https://github.com/A422789/AdminPanal )
*   **To try the Admin Panel live:** ➡️ **[Live Demo - Admin Panel](https://a422789.github.io/AdminPanal/ )**

---

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v16 or later)
*   `npm` or `yarn` package manager

### Installation

1.  **Clone the repo:**
    ```bash
    git clone https://github.com/A422789/e-commers.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd e-commers
    ```
3.  **Install NPM packages:**
    ```bash
    npm install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
The application will be available at `http://localhost:5173` (or another port if 5173 is in use ).
