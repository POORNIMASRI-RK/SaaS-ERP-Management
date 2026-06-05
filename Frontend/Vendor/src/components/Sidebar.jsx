import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="logo">ERP System</h2>

      <nav className="menu">

        <Link to="/" className="menu-item">
          🏠 Dashboard
        </Link>

        <Link to="/inventory" className="menu-item">
          📊 Inventory
        </Link>

        <Link to="/stockin">Stock In</Link>
        <Link to="/stockout">Stock Out</Link>
        <Link to="/purchaseorders">Purchase Order</Link>

        <Link to="/warehouses" className= "menu-item">
            📦 Warehouse
        </Link>

        <Link to="/employees" className="menu-item">
          👨‍💼 Employees
        </Link>
        <Link to="/machines"className="menu-item">
          🛠️ Machines
        </Link>
        <Link to="/maintenance" className="menu-item
        ">
        Maintenance
        </Link>

        <Link to="/vendors" className="menu-item">
          🏢 Vendors
        </Link>

      </nav>

    </div>
  );
}

export default Sidebar;