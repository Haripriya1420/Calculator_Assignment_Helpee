import { create } from "zustand";

const useStore = create((set) => ({
  components: [],
  addComponent: (component) =>
    set((state) => ({ components: [...state.components, component] })),
  clearComponents: () => set({ components: [] }), // Reset calculator
}));

export default useStore;
