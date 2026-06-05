// function MachineTable({ machines }) {
//   return (
//     <div>
//       <h3>Machine List</h3>

//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Model</th>
//             <th>Location</th>
//             <th>Status</th>
//           </tr>
//         </thead>

//         <tbody>
//           {machines.map((m) => (
//             <tr key={m._id}>
//               <td>{m.name}</td>
//               <td>{m.model}</td>
//               <td>{m.location}</td>
//               <td>{m.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default MachineTable;