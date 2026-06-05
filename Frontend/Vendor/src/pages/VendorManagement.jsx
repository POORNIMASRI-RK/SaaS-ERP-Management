import { useEffect, useState } from "react";
import {
  getVendors,
  addVendor,
  updateVendor,
  deleteVendor,
} from "../services/vendorService";

import AddVendorModal from "../components/AddVendorModal";
import EditVendorModal from "../components/EditVendorModal";

function VendorManagement() {
  const [vendors, setVendors] = useState([]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [selectedVendorId, setSelectedVendorId] = useState(null);

  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    companyName: "",
    registrationNumber: "",
    contactNumber: "",
    email: "",
    address: "",
    totalSpends: "",
  });

  // Load vendors
  const loadVendors = async () => {
    try {
      const res = await getVendors();
      setVendors(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load vendors");
    }
  };

  useEffect(() => {
    loadVendors();
  }, []);

  // Add Vendor
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!/^\d{10}$/.test(form.contactNumber)) {
    alert("Phone number must be exactly 10 digits");
    return;
  }

  try {
    await addVendor(form);

    alert("Vendor added successfully");

    setShowAddModal(false);

    setForm({
      companyName: "",
      registrationNumber: "",
      contactNumber: "",
      email: "",
      address: "",
      totalSpends: "",
    });

    await loadVendors();
  } catch (error) {
    console.log(error);
    alert(error.response?.data?.message || "Add failed");
  }
};

  // Open Edit Modal
  const openEditModal = (vendor) => {
    setSelectedVendorId(vendor._id);

    setForm({
      companyName: vendor.companyName,
      registrationNumber: vendor.registrationNumber,
      contactNumber: vendor.contactNumber,
      email: vendor.email,
      address: vendor.address,
      totalSpends: vendor.totalSpends,
    });

    setShowEditModal(true);
  };

  // Update Vendor
  const handleUpdate = async (e) => {
  e.preventDefault();

  try {
    await updateVendor(selectedVendorId, form);

    alert("Vendor updated successfully");

    setShowEditModal(false);
     setForm({
      companyName: "",
      registrationNumber: "",
      contactNumber: "",
      email: "",
      address: "",
      totalSpends: "",
    });

    await loadVendors();
  } catch (error) {
    console.log(error);
    alert(error.response?.data?.message || "Update failed");
  }
};

//Delete Vendor
const handleDelete = async (id) => {
  try {
    await deleteVendor(id);
    loadVendors();
  } catch (error) {
    alert("Delete failed");
  }
};
  return (
    <div className="container">

      {/* Header */}
      <div className="header">
        <h1>Vendor Management System</h1>

        <button onClick={() => setShowAddModal(true)}>
          + Add Vendor
        </button>
      </div>

      {/* Search */}
      <input
        className="search-box"
        type="text"
        placeholder="Search by Company, Registration No, Contact..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Company</th>
            <th>Registration</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Total Spends</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {vendors
            .filter((vendor) =>
              vendor.companyName.toLowerCase().includes(search.toLowerCase()) ||
              vendor.registrationNumber.toLowerCase().includes(search.toLowerCase()) ||
              vendor.contactNumber.includes(search)
            )
            .map((vendor, index) => (
              <tr key={vendor._id}>
                <td>{index + 1}</td>
                <td>{vendor.companyName}</td>
                <td>{vendor.registrationNumber}</td>
                <td>{vendor.contactNumber}</td>
                <td>{vendor.email}</td>
                <td>₹{vendor.totalSpends}</td>

                <td>
                  <button
                    className="edit-btn"
                    onClick={() => openEditModal(vendor)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteVendor(vendor._id).then(loadVendors)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Add Modal */}
      <AddVendorModal
        show={showAddModal}
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
        onClose={() => setShowAddModal(false)}
      />

      {/* Edit Modal */}
      <EditVendorModal
        show={showEditModal}
        form={form}
        setForm={setForm}
        handleUpdate={handleUpdate}
        onClose={() => setShowEditModal(false)}
      />

    </div>
  );
}

export default VendorManagement;

