// import { useState } from "react";

// function MachineForm({ onAdd }) {
//   const [form, setForm] = useState({
//     name: "",
//     model: "",
//     location: ""
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAdd(form);
//     setForm({ name: "", model: "", location: "" });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h3>Add Machine</h3>

//       <input
//         placeholder="Machine Name"
//         value={form.name}
//         onChange={(e) => setForm({ ...form, name: e.target.value })}
//       />

//       <input
//         placeholder="Model"
//         value={form.model}
//         onChange={(e) => setForm({ ...form, model: e.target.value })}
//       />

//       <input
//         placeholder="Location"
//         value={form.location}
//         onChange={(e) => setForm({ ...form, location: e.target.value })}
//       />

//       <button type="submit">Add</button>
//     </form>
//   );
// }

// export default MachineForm;