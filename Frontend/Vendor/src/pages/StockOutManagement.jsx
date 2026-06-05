import { useEffect, useState } from "react";

import AddStockOutModal from "../components/StockOut/AddStockOutModal";
import EditStockOutModal from "../components/StockOut/EditStockOutModal";
import DeleteStockOutModal from "../components/StockOut/DeleteStockOutModal";

import { getStockOut } from "../services/stockOutService";

function StockOutManagement() {
  const [stockOut, setStockOut] = useState([]);
  const [search, setSearch] = useState("");

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getStockOut();
      setStockOut(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load stock out records");
    }
  };

  const filtered = stockOut.filter(
    (item) =>
      item.itemName
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      item.itemCode
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <>
      <div className="container">

        <div className="header">
          <h1>Stock Out Management</h1>

          <button
            className="add-btn"
            onClick={() => setShowAdd(true)}
          >
            + Add Stock Out
          </button>
        </div>

        <input
          className="search-box"
          placeholder="Search Item Name or Item Code"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Item Name</th>
              <th>Item Code</th>
              <th>Quantity</th>
              <th>Department</th>
              <th>Reason</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.itemName}</td>
                <td>{item.itemCode}</td>
                <td>{item.quantity}</td>
                <td>{item.department}</td>
                <td>{item.reason}</td>
                <td>
                  {item.date
                    ? new Date(
                        item.date
                      ).toLocaleDateString()
                    : ""}
                </td>

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

      </div>

      {showAdd && (
        <AddStockOutModal
          stockOut={stockOut}
          setStockOut={setStockOut}
          onClose={() =>
            setShowAdd(false)
          }
        />
      )}

      {showEdit && selectedItem && (
        <EditStockOutModal
          item={selectedItem}
          stockOut={stockOut}
          setStockOut={setStockOut}
          onClose={() =>
            setShowEdit(false)
          }
        />
      )}

      {showDelete && selectedItem && (
        <DeleteStockOutModal
          item={selectedItem}
          stockOut={stockOut}
          setStockOut={setStockOut}
          onClose={() =>
            setShowDelete(false)
          }
        />
      )}
    </>
  );
}

export default StockOutManagement;