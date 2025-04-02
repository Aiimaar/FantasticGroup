REMOTE COFFEE FINDER
--------------------------------------------------------------------------------------------------------------
Project SUMMARY
This project aims to develop a web platform allowing remote workers to find cafés and spaces that suit their needs (stable Wi-Fi, calm ambiance, available power outlets, special offers, etc.).

Main Features:
Advanced Search and Filters: Search for cafés based on criteria such as Wi-Fi, noise level, available outlets, and promotions.

Café Listings: Display details about partner cafés, including location, available services, and user reviews.

User Account Creation: Users can sign up, create favorites for cafés, and manage their profiles.

Café Dashboard: Cafés can add promotions, manage their availability, and view user reviews.

Rating and Review System: Users can rate cafés and leave comments based on their experiences.
---------------------------------------------------------------------------------------------------------------

Project ARCHITECTURE
The project is divided into two main parts:

Frontend (React): For a dynamic and smooth user interface.

Backend (Node.js with Express): For handling business logic, APIs, and interaction with the database.

Database (MySQL): For storing café information, user data, reviews, and promotions.
---------------------------------------------------------------------------------------------------------------

Project STRUCTURE
FantasticGroup/
├── README.md
├── backend/
│   ├── .env
│   ├── package.json
│   ├── src/
│   │   ├── app.js
│   │   ├── server.js
│   │   ├── config/
│   │   │   └── database.js
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
└── frontend/
    ├── package.json
    ├── src/
    │   ├── App.js
    │   ├── components/
    │   ├── pages/
    │   └── services/

backend/src/ : Contains backend code (logic, routes, controllers).

frontend/src/ : Contains frontend code (React components, pages, services).

backend/config/database.js : Manages the MySQL database connection.




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
