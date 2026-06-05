import { deleteEmployee } from "../services/employeeServices";

function DeleteEmployeeModal({
  employee,
  employees,
  setEmployees,
  onClose,
}) {
  const handleDelete = async () => {
    try {
      await deleteEmployee(employee._id);

      setEmployees(
        employees.filter(
          (e) => e._id !== employee._id
        )
      );

      onClose();
    } catch (error) {
      console.log(error);
      alert("Failed to delete employee");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box delete-modal">

        <div className="delete-icon">
          🗑️
        </div>

        <h2>Delete Employee</h2>

        <p>
          Are you sure you want to delete
          <strong> {employee.name}</strong>?
        </p>

        <div className="modal-actions">
          <button
            className="btn-secondary"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="delete-btn"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}

export default DeleteEmployeeModal;