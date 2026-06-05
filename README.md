🏭 Multi-Tenant SaaS ERP for Manufacturing Industries

⭐ Key Features

📦 Inventory Management – Add, update, delete, and track inventory items with real-time stock visibility
🏢 Multi-Warehouse Support – Manage multiple warehouses with location-based organization
⚙️ Machine Tracking – Monitor machine lifecycle including Active and Maintenance status
🧾 Vendor Management – Manage suppliers, contact details, and supply history
📊 Stock Monitoring – Track capacity, low stock alerts, and inventory levels
🔍 Advanced Search & Filters – Quickly find items, warehouses, and machines
🧩 Modular Architecture – Scalable system design for easy feature expansion
🌐 REST API Integration – Clean backend APIs using Express.js
⚡ Responsive UI – Modern React-based interface for all devices
🔐 Multi-Tenant Ready Structure – Designed to support multiple organizations in future expansion
⚡ Responsive frontend UI (React)

🛠️ Tech Stack

### Frontend
- React.js
- Axios
- CSS / Tailwind (optional)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

⚙️ Installation & Setup
📥 Clone the Repository
git clone https://github.com/your-username/saas-erp.git
cd saas-erp
🧩 Install Dependencies
Backend Setup
cd backend
npm install
Frontend Setup
cd ../frontend
npm install
🔐 Set Up Environment Variables
Backend (.env)

Create a .env file inside the backend/ directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
Frontend (.env) (if needed)

Create a .env file inside the frontend/ directory:

REACT_APP_API_URL=http://localhost:5000/api
▶️ Run the Application

You need to run both backend and frontend simultaneously.

🚀 Terminal 1 – Backend
cd backend
npm run dev
💻 Terminal 2 – Frontend
cd frontend
npm start
🌐 Access the Application

Once both servers are running:

Frontend: http://localhost:3000
Backend API: http://localhost:5000

📁 Project Structure
ERP-System/
│
├── backend/
│   ├── config/              # Database & environment configuration
│   ├── models/              # Mongoose schemas (DB models)
│   ├── routes/              # API routes (Inventory, Warehouse, etc.)
│   ├── controllers/         # Business logic layer
│   ├── middlewares/         # Auth, error handling, validations
│   ├── utils/               # Helper functions (logs, helpers)
│   ├── server.js            # Entry point of backend
│   └── app.js               # Express app setup
│
├── frontend/
│   ├── public/              # Static files
│   ├── src/
│   │   ├── assets/          # Images, icons, styles
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Warehouse/
│   │   │   ├── Inventory/
│   │   │   ├── Machine/
│   │   │   ├── Vendor/
│   │   │   ├── Common/
│   │   │
│   │   ├── pages/           # Page-level components (Dashboard, etc.)
│   │   ├── services/        # Axios API calls
│   │   ├── hooks/           # Custom React hooks
│   │   ├── context/         # State management (Context API)
│   │   ├── utils/           # Helper functions
│   │   ├── App.js
│   │   └── index.js
│
├── .env                     # Environment variables
├── .gitignore
├── package.json
└── README.md

🔌 API Endpoints

📦 Inventory APIs

| Method | Endpoint             | Description   |
| ------ | -------------------- | ------------- |
| GET    | `/api/inventory`     | Get all items |
| POST   | `/api/inventory`     | Add new item  |
| PUT    | `/api/inventory/:id` | Update item   |
| DELETE | `/api/inventory/:id` | Delete item   |

🏢 Warehouse APIs

| Method | Endpoint             | Description        |
| ------ | -------------------- | ------------------ |
| GET    | `/api/warehouse`     | Get all warehouses |
| POST   | `/api/warehouse`     | Add new warehouse  |
| PUT    | `/api/warehouse/:id` | Update warehouse   |
| DELETE | `/api/warehouse/:id` | Delete warehouse   |

⚙️ Machine APIs

| Method | Endpoint           | Description            |
| ------ | ------------------ | ---------------------- |
| GET    | `/api/machine`     | Get all machines       |
| POST   | `/api/machine`     | Add new machine        |
| PUT    | `/api/machine/:id` | Update machine details |
| DELETE | `/api/machine/:id` | Delete machine         |

🧾 Vendor APIs

| Method | Endpoint          | Description     |
| ------ | ----------------- | --------------- |
| GET    | `/api/vendor`     | Get all vendors |
| POST   | `/api/vendor`     | Add new vendor  |
| PUT    | `/api/vendor/:id` | Update vendor   |
| DELETE | `/api/vendor/:id` | Delete vendor   |

📌 Notes
All APIs follow RESTful standards
All endpoints return data in JSON format
Future upgrade: JWT authentication & role-based access control

