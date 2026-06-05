import { useEffect, useState } from "react";
import { getEmployees } from "../services/employeeServices";
import { getInventory } from "../services/inventoryService";

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const empRes = await getEmployees();
      const invRes = await getInventory();

      setEmployees(empRes.data);
      setInventory(invRes.data);
    } catch (err) {
      console.log(err);
    }
  };

  const lowStockItems = inventory.filter(
    (item) => item.quantity <= item.lowStockLimit
  );

  return (
    <div className="dashboard-container">

      <h1>ERP Dashboard</h1>

      {/* CARDS */}
      <div className="card-grid">

        <div className="card">
          <h3>Total Employees</h3>
          <p>{employees.length}</p>
        </div>

        <div className="card">
          <h3>Total Inventory</h3>
          <p>{inventory.length}</p>
        </div>

        <div className="card warning">
          <h3>Low Stock Items</h3>
          <p>{lowStockItems.length}</p>
        </div>

      </div>

      {/* LOW STOCK LIST */}
      <div className="table-section">
        <h2>Low Stock Alerts</h2>

        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Limit</th>
            </tr>
          </thead>

          <tbody>
            {lowStockItems.map((item) => (
              <tr key={item._id}>
                <td>{item.itemName}</td>
                <td>{item.quantity}</td>
                <td>{item.lowStockLimit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Dashboard;