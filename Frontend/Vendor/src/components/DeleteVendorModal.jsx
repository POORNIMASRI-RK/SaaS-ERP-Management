function DeleteVendorModal({
  show,
  vendor,
  onConfirm,
  onCancel,
}) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h2 style={{ color: "#ef4444" }}>
          Delete Vendor
        </h2>

        <p style={{ marginTop: "10px" }}>
          Are you sure you want to delete:
        </p>

        <h3 style={{ margin: "10px 0", color: "#0f172a" }}>
          {vendor?.companyName}
        </h3>

        <p style={{ fontSize: "13px", color: "#64748b" }}>
          This action cannot be undone.
        </p>

        <div className="modal-actions">

          <button
            className="btn-secondary"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="btn-danger"
            onClick={onConfirm}
          >
            Yes, Delete
          </button>

        </div>

      </div>
    </div>
  );
}

export default DeleteVendorModal;