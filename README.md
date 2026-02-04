# 🐶 The Dog App

A full-stack application for exploring, searching, and creating dog breeds. Designed as a comprehensive catalog, it consumes [The Dog API](https://thedogapi.com/) and allows users to create and store their own custom breeds in a local PostgreSQL database.

## 🚀 Technologies

The project is built using the **PERN Stack** (Postgres, Express, React, Node).

### Frontend
*   ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) **React.js**: Component-based UI architecture.
*   ![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white) **Redux**: Predictable state container for global data management.
*   ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) **CSS Modules**: Scoped styling for modular components.

### Backend
*   ![Nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) **Node.js** & **Express**: Robust RESTful API handling requests and routing.
*   ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white) **Sequelize**: Promise-based ORM for PostgreSQL.
*   ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) **PostgreSQL**: Relational database for persistent storage.

## 🏗 Architecture Overview

The system utilizes a decoupled client-server architecture:

1.  **Client Application**: A Single Page Application (SPA) built with React. It communicates with the custom backend API to fetch breed data. It features client-side routing (React Router) and complex state management (Redux) to handle filtering, sorting, and pagination of breeds.
2.  **API Gateway / Server**: The Express backend serves as a unified entry point. It employs a **Data Aggregation Pattern**, simultaneously fetching data from the external "The Dog API" and the local PostgreSQL database, merging the results before sending them to the client. This ensures the user sees a unified list of breeds regardless of their source.
3.  **Persistence Layer**: A PostgreSQL database is used to persist user-generated breeds and their relationships with temperaments (Many-to-Many relationship).

## 🛠 Installation & Execution Guide

### Prerequisites
*   **Node.js**: v18.x or higher.
*   **PostgreSQL**: Installed and running locally.

### 1. Database Setup
Ensure you have a PostgreSQL instance running. Create a database (e.g., `dogs_db`).

### 2. Backend Setup (API)
Navigate to the `api` directory:
```bash
cd api
```

Install dependencies:
```bash
npm install
```

**Configuration:**
Create a `.env` file in the `api` root with the following variables (adjust to your local setup):
```env
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_NAME=dogs_db
API_KEY=your_thedogapi_api_key
PORT=3001
```

Start the server:
```bash
npm start
```
The server will initialize and sync the database models. It listens on port `3001`.

### 3. Frontend Setup (Client)
Open a new terminal and navigate to the `client` directory:
```bash
cd client
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm start
```
The application will open in your browser at `http://localhost:3000`.

## 🧪 Running Tests

The project includes unit tests for the backend logic.
```bash
cd api
npm test
```

---
*Refactored and Audited by Jules - Technical Lead*
