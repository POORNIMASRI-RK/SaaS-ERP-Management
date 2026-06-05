function EditVendorModal({
  show,
  form,
  setForm,
  handleUpdate,
  onClose,
}) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h2>Update Vendor</h2>

        <form onSubmit={handleUpdate}>

          <div className="form-grid">

            <div className="form-group">
              <label>Company Name</label>
              <input
                value={form.companyName}
                onChange={(e) =>
                  setForm({ ...form, companyName: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Registration Number</label>
              <input
                value={form.registrationNumber}
                onChange={(e) =>
                  setForm({ ...form, registrationNumber: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Contact Number</label>
              <input
                value={form.contactNumber}
                onChange={(e) =>
                  setForm({ ...form, contactNumber: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <input
                value={form.address}
                onChange={(e) =>
                  setForm({ ...form, address: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Total Spends</label>
              <input
                value={form.totalSpends}
                onChange={(e) =>
                  setForm({ ...form, totalSpends: e.target.value })
                }
              />
            </div>

          </div>

          <div className="modal-actions">

            <button type="submit" className="btn-primary">
              Update
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

export default EditVendorModal;