import { useDraggable } from "@dnd-kit/core";

const DraggableComponent = ({ id, children }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id,
  });

  return (
    <button
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="p-2 m-2 bg-blue-500 text-white rounded"
    >
      {children}
    </button>
  );
};

export default DraggableComponent;
