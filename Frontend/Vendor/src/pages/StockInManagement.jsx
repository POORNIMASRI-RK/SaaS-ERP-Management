import { useEffect, useState } from "react";

import AddStockInModal from "../components/StockIn/AddStockInModal";
import EditStockInModal from "../components/StockIn/EditStockInModal";
import DeleteStockInModal from "../components/StockIn/DeleteStockInModal";

import { getStockIn } from "../services/stockInService";

function StockInManagement() {
  const [stockIn, setStockIn] = useState([]);
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
      const res = await getStockIn();
      setStockIn(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filtered = stockIn.filter(
    (item) =>
      item.itemName?.toLowerCase().includes(search.toLowerCase()) ||
      item.itemCode?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="container">

        <div className="header">
          <h1>Stock In Management</h1>

          <button
            className="add-btn"
            onClick={() => setShowAdd(true)}
          >
            + Add Stock In
          </button>
        </div>

        <input
          className="search-box"
          placeholder="Search Item"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Item Name</th>
              <th>Item Code</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Vendor</th>
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
                <td>{item.unitPrice}</td>
                <td>{item.vendor}</td>
                <td>
                  {new Date(item.date)
                    .toLocaleDateString()}
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
        <AddStockInModal
          stockIn={stockIn}
          setStockIn={setStockIn}
          onClose={() => setShowAdd(false)}
        />
      )}

      {showEdit && selectedItem && (
        <EditStockInModal
          item={selectedItem}
          stockIn={stockIn}
          setStockIn={setStockIn}
          onClose={() => setShowEdit(false)}
        />
      )}

      {showDelete && selectedItem && (
        <DeleteStockInModal
          item={selectedItem}
          stockIn={stockIn}
          setStockIn={setStockIn}
          onClose={() => setShowDelete(false)}
        />
      )}
    </>
  );
}

export default StockInManagement;