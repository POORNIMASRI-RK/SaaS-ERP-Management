import { useEffect, useState } from "react";

import AddWarehouseModal from "../components/Warehouse/AddWarehouseModal.jsx";
import EditWarehouseModal from "../components/Warehouse/EditWarehouseModal.jsx";
import DeleteWarehouseModal from "../components/Warehouse/DeleteWarehouseModal.jsx";
import { getWarehouses } from "../services/warehouseService";

function WarehouseManagement() {
  const [warehouses, setWarehouses] = useState([]);
  const [search, setSearch] = useState("");

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [selectedWarehouse, setSelectedWarehouse] = useState(null);

  // Load data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getWarehouses();
      setWarehouses(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Search filter
  const filteredWarehouses = (warehouses || []).filter((w) =>
    w.name?.toLowerCase().includes(search.toLowerCase()) ||
    w.location?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      {/* HEADER */}
      <div className="header">
        <h1>Warehouse Management</h1>

        <button className="add-btn" onClick={() => setShowAdd(true)}>
          + Add Warehouse
        </button>
      </div>

      {/* SEARCH */}
      <input
        className="search-box"
        placeholder="Search Warehouse Name or Location"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* TABLE */}
      <table>
        <thead>
          <tr>
            <th>Warehouse Name</th>
            <th>Warehouse Code</th>
            <th>Location</th>
            <th>Manager Name</th>
            <th>Capacity</th>
            <th>Current Stock</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
  {filteredWarehouses.map((w, index) => (
    <tr key={w._id}>
      <td>{index + 1}</td>
      <td>{w.warehouseName}</td>
      <td>{w.warehouseCode}</td>
      <td>{w.location}</td>
      <td>{w.managerName}</td>
      <td>{w.capacity}</td>
      <td>{w.currentStock}</td>
      <td>{w.status}</td>

      <td>
        <button
          className="edit-btn"
          onClick={() => {
            setSelectedWarehouse(w);
            setShowEdit(true);
          }}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => {
            setSelectedWarehouse(w);
            setShowDelete(true);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  ))}
</tbody>
      </table>

      {/* MODALS */}

      {showAdd && (
        <AddWarehouseModal
          warehouses={warehouses}
          setWarehouses={setWarehouses}
          onClose={() => setShowAdd(false)}
        />
      )}

      {showEdit && selectedWarehouse && (
        <EditWarehouseModal
          warehouse={selectedWarehouse}
          warehouses={warehouses}
          setWarehouses={setWarehouses}
          onClose={() => setShowEdit(false)}
        />
      )}

      {showDelete && selectedWarehouse && (
        <DeleteWarehouseModal
          warehouse={selectedWarehouse}
          warehouses={warehouses}
          setWarehouses={setWarehouses}
          onClose={() => setShowDelete(false)}
        />
      )}

    </div>
  );
}

export default WarehouseManagement;