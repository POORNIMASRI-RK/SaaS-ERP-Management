function EmployeeTable({ employees, onEdit, onDelete }) {
  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Roll No</th>
          <th>Gender</th>
          <th>Department</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((emp, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{emp.name}</td>
            <td>{emp.employeeId}</td>
            <td>{emp.gender}</td>
            <td>{emp.department}</td>
            <td>{emp.email}</td>
            <td>
              <button onClick={() => onEdit(emp)}>Edit</button>
              <button onClick={() => onDelete(emp)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;