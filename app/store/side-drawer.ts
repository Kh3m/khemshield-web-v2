import { create } from "zustand";

interface SideDrawerStore {
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;
}

const useSideDrawerStore = create<SideDrawerStore>((set) => ({
  open: false,
  handleOpen: () => set((store) => ({ open: true })),
  handleClose: () => set((store) => ({ open: false })),
}));

export default useSideDrawerStore;
