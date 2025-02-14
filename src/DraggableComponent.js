import { useDraggable } from "@dnd-kit/core";

function DraggableComponent({ id, children }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : "",
      }}
      className="p-2 m-1 bg-gray-200 rounded cursor-pointer"
    >
      {children}
    </div>
  );
}

export default DraggableComponent;
