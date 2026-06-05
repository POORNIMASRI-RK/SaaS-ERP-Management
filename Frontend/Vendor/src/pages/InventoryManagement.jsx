import { useEffect, useState } from "react";
import AddInventoryModal from "../components/Inventory/AddInventoryModal";
import EditInventoryModal from "../components/Inventory/EditInventoryModal";
import DeleteInventoryModal from "../components/Inventory/DeleteInventoryModal";
import { getInventory } from "../services/inventoryService";

function InventoryManagement() {
  const [inventory, setInventory] = useState([]);
  const [search, setSearch] = useState("");

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  // Load data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getInventory();
      setInventory(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Search filter
  const filteredInventory = (inventory || []).filter((item) =>
    item.itemName?.toLowerCase().includes(search.toLowerCase()) ||
    item.itemCode?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      {/* HEADER */}
      <div className="header">
        <h1>Inventory Management</h1>

        <button className="add-btn" onClick={() => setShowAdd(true)}>
          + Add Inventory
        </button>
      </div>

      {/* SEARCH */}
      <input
        className="search-box"
        placeholder="Search Item Name or Item Code"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* TABLE */}
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Item Name</th>
            <th>Item Code</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Low Stock</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredInventory.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.itemName}</td>
              <td>{item.itemCode}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.lowStockLimit}</td>

              <td>
                <button
                  className="edit-btn"
                  onClick={() => {
                    setSelectedItem(item);
                    setShowEdit(true);
                  }}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => {
                    setSelectedItem(item);
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
        <AddInventoryModal
          inventory={inventory}
          setInventory={setInventory}
          onClose={() => setShowAdd(false)}
        />
      )}

      {showEdit && selectedItem && (
        <EditInventoryModal
          item={selectedItem}
          inventory={inventory}
          setInventory={setInventory}
          onClose={() => setShowEdit(false)}
        />
      )}

      {showDelete && selectedItem && (
        <DeleteInventoryModal
          item={selectedItem}
          inventory={inventory}
          setInventory={setInventory}
          onClose={() => setShowDelete(false)}
        />
      )}

    </div>
  );
}

export default InventoryManagement;