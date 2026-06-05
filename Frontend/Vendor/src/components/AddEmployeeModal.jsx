import { useState } from "react";
import { addEmployee } from "../services/employeeServices";

function AddEmployeeModal({ employees, setEmployees, onClose }) {
  const [form, setForm] = useState({
    name: "",
    employeeId: "",
    gender: "",
    department: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      // basic validation
      if (!form.name || !form.employeeId || !form.email) {
        alert("Please fill required fields");
        setLoading(false);
        return;
      }

      const res = await addEmployee(form);

      // update UI with backend response
      setEmployees([...employees, res.data]);

      setLoading(false);
      onClose();
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert(error.response?.data?.message || "Failed to add employee");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h2>Add Employee</h2>

        <div className="form-grid">
          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Name"
            />
          </div>

          <div className="form-group">
            <label>Employee ID</label>
            <input
              name="employeeId"
              value={form.employeeId}
              onChange={handleChange}
              placeholder="EmpId"
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <input
              name="gender"
              value={form.gender}
              onChange={handleChange}
              placeholder="Male / Female"
            />
          </div>

          <div className="form-group">
            <label>Department</label>
            <input
              name="department"
              value={form.department}
              onChange={handleChange}
              placeholder="IT / HR / Intern"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@mail.com"
            />
          </div>
        </div>

        <div className="modal-actions">
          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>

          <button
            className="btn-primary"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Employee"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default AddEmployeeModal;