import { RefObject } from "react";
import { create } from "zustand";

interface NavStore {
  setTopRef: (ref: RefObject<any>) => void;
  topRef: any;
}

const useNavStore = create<NavStore>((set) => ({
  topRef: undefined,
  setTopRef: (ref) => set((store) => ({ ...store, topRef: ref })),
}));

export default useNavStore;
