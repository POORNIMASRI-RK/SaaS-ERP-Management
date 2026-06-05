import { useState } from "react";
import { updateEmployee } from "../services/employeeServices";

function EditEmployeeModal({
  employee,
  employees,
  setEmployees,
  onClose,
}) {
  const [form, setForm] = useState({
    name: employee.name || "",
    employeeId: employee.employeeId || "",
    gender: employee.gender || "",
    department: employee.department || "",
    email: employee.email || "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      setLoading(true);

      const res = await updateEmployee(
        employee._id,
        form
      );

      setEmployees(
        employees.map((e) =>
          e._id === employee._id
            ? res.data
            : e
        )
      );

      setLoading(false);
      onClose();
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("Failed to update employee");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h2>Edit Employee</h2>

        <div className="form-grid">

          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Employee ID</label>
            <input
              name="employeeId"
              value={form.employeeId}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <input
              name="gender"
              value={form.gender}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Department</label>
            <input
              name="department"
              value={form.department}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="modal-actions">

          <button
            className="btn-secondary"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="btn-primary"
            onClick={handleUpdate}
            disabled={loading}
          >
            {loading
              ? "Updating..."
              : "Update Employee"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default EditEmployeeModal;