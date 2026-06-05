function AddVendorModal({
  show,
  form,
  setForm,
  handleSubmit,
  onClose,
}) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <div className="modal-header">
          <h2>Add Vendor</h2>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">

          <div className="form-grid">

            <input
              type="text"
              placeholder="Company Name"
              value={form.companyName}
              onChange={(e) =>
                setForm({ ...form, companyName: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Registration Number"
              value={form.registrationNumber}
              onChange={(e) =>
                setForm({ ...form, registrationNumber: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Contact Number"
              maxLength="10"
              value={form.contactNumber}
              onChange={(e) =>
                setForm({ ...form, contactNumber: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Address"
              value={form.address}
              onChange={(e) =>
                setForm({ ...form, address: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Total Spends"
              value={form.totalSpends}
              onChange={(e) =>
                setForm({ ...form, totalSpends: e.target.value })
              }
            />

          </div>

          <div className="modal-actions">

            <button type="submit" className="btn-primary">
              Save Vendor
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={onClose}
            >
              Cancel
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}

export default AddVendorModal;