import { useEffect, useState } from "react";

import AddPurchaseOrderModal from "../components/PurchaseOrder/AddPurchaseOrderModal";
import EditPurchaseOrderModal from "../components/PurchaseOrder/EditPurchaseOrderModal";
import DeletePurchaseOrderModal from "../components/PurchaseOrder/DeletePurchaseOrderModal";

import { getPurchaseOrders } from "../services/purchaseOrderService";

function PurchaseOrderManagement() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await getPurchaseOrders();
      setOrders(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load purchase orders");
    }
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.poNumber
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      order.vendorName
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      order.itemName
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <>
      <div className="container">

        <div className="header">
          <h1>Purchase Order Management</h1>

          <button
            className="add-btn"
            onClick={() => setShowAdd(true)}
          >
            + Add Purchase Order
          </button>
        </div>

        <input
          className="search-box"
          placeholder="Search PO Number, Vendor or Item"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>PO Number</th>
              <th>Vendor</th>
              <th>Item Name</th>
              <th>Item Code</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th>Order Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{order.poNumber}</td>
                <td>{order.vendorName}</td>
                <td>{order.itemName}</td>
                <td>{order.itemCode}</td>
                <td>{order.quantity}</td>
                <td>{order.unitPrice}</td>
                <td>{order.totalAmount}</td>
                <td>{order.status}</td>
                <td>
                  {order.orderDate
                    ? new Date(
                        order.orderDate
                      ).toLocaleDateString()
                    : ""}
                </td>

                <td>
                  <button
                    className="edit-btn"
                    onClick={() => {
                      setSelectedOrder(order);
                      setShowEdit(true);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => {
                      setSelectedOrder(order);
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
        <AddPurchaseOrderModal
          orders={orders}
          setOrders={setOrders}
          onClose={() => setShowAdd(false)}
        />
      )}

      {showEdit && selectedOrder && (
        <EditPurchaseOrderModal
          order={selectedOrder}
          orders={orders}
          setOrders={setOrders}
          onClose={() => setShowEdit(false)}
        />
      )}

      {showDelete && selectedOrder && (
        <DeletePurchaseOrderModal
          order={selectedOrder}
          orders={orders}
          setOrders={setOrders}
          onClose={() => setShowDelete(false)}
        />
      )}
    </>
  );
}

export default PurchaseOrderManagement;