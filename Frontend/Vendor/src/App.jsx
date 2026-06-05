import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import VendorManagement from "./pages/VendorManagement";
import EmployeeManagement from "./pages/EmployeeManagement";
import InventoryManagement from "./pages/InventoryManagement";
import Dashboard from "./pages/Dashboard";
import StockInManagement from "./pages/StockInManagement";
import StockOutManagement from "./pages/StockOutManagement";
import PurchaseOrderManagement from "./pages/PurchaseOrderManagement";
import WarehouseManagement from "./pages/WarehouseManagement";
import Machine from "./pages/Machinemanagement";
import Maintenance from "./pages/Maintenance";

function App() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-content">
        <Routes>
          
          <Route path="/vendors" element={<VendorManagement />} />
          <Route path="/employees" element={<EmployeeManagement />} />
          <Route path="/inventory" element={<InventoryManagement />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/stockin" element={<StockInManagement />} />
          <Route path="/stockout" element={<StockOutManagement />} />
          <Route path="/purchaseorders" element={<PurchaseOrderManagement />} />
          <Route path="/warehouses" element={<WarehouseManagement />} />
          <Route path="/machines" element={<Machine />} />
          <Route path="/maintenance" element={<Maintenance />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;