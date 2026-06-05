function MaintenanceTable({ records }) {
  return (
    <div>
      <h3>Maintenance Records</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Issue</th>
            <th>Type</th>
            <th>Cost</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {records.map((r) => (
            <tr key={r._id}>
              <td>{r.issue}</td>
              <td>{r.maintenanceType}</td>
              <td>₹{r.cost}</td>
              <td>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MaintenanceTable;