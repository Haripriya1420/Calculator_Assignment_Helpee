import create from "zustand";

const useStore = create((set) => ({
  components: [], // Stores added buttons and inputs
  addComponent: (component) =>
    set((state) => ({ components: [...state.components, component] })),
  removeComponent: (index) =>
    set((state) => ({
      components: state.components.filter((_, i) => i !== index),
    })),
}));

export default useStore;
