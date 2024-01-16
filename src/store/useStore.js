import { create } from 'zustand'

const useStore = create((set) => ({
  fruitsData: [],
  action: (fruit) => set((state) => {
    let newFruits = [];

    if (state.fruitsData.includes(fruit)) {
      newFruits = state.fruitsData.filter((f) => fruit !== f)
    } else {
      newFruits = [...state.fruitsData, fruit];
    }

    return {fruitsData: newFruits};
  }),
}))

export default useStore;
