import { useEffect, useState } from "react";
import EmployeeTable from "../components/EmployeeTable";
import AddEmployeeModal from "../components/AddEmployeeModal";
import EditEmployeeModal from "../components/EditEmployeeModal";
import DeleteEmployeeModal from "../components/DeleteEmployeeModal";
import { getEmployees } from "../services/employeeServices";

function EmployeeManagement() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  const filtered = employees.filter((e) =>
  (e.name?.toLowerCase().includes(search.toLowerCase()) ||
   e.employeeId?.toLowerCase().includes(search.toLowerCase()) ||
   e.department?.toLowerCase().includes(search.toLowerCase()) ||
   e.email?.toLowerCase().includes(search.toLowerCase()))
);

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Employee Management System</h1>

          <button className="add-btn" onClick={() => setShowAdd(true)}>
            + Add Employee
          </button>
        </div>

        <input
          className="search-box"
          placeholder="Search Employee"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <EmployeeTable
          employees={filtered}
          onEdit={(emp) => {
            setSelectedEmployee(emp);
            setShowEdit(true);
          }}
          onDelete={(emp) => {
            setSelectedEmployee(emp);
            setShowDelete(true);
          }}
        />
      </div>

      {showAdd && (
        <AddEmployeeModal
          employees={employees}
          setEmployees={setEmployees}
          onClose={() => setShowAdd(false)}
        />
      )}

      {showEdit && selectedEmployee && (
        <EditEmployeeModal
          employee={selectedEmployee}
          employees={employees}
          setEmployees={setEmployees}
          onClose={() => setShowEdit(false)}
        />
      )}

      {showDelete && selectedEmployee && (
        <DeleteEmployeeModal
          employee={selectedEmployee}
          employees={employees}
          setEmployees={setEmployees}
          onClose={() => setShowDelete(false)}
        />
      )}
    </>
  );
}

export default EmployeeManagement;