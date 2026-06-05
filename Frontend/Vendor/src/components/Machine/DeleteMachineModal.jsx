import { deleteMachine } from "../services/machineService";

const handleDelete = async (id) => {
  try {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    
    if (!confirmDelete) return;

    await deleteMachine(id);
    fetchMachines(); // reload table after delete

  } catch (error) {
    console.error("Delete failed:", error);
  }
};

export default DeledeMachineModal;