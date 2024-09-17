import { create } from 'zustand';

export const useStore = create((set) => ({
  canGoBack: false,
  setCanGoBack: (value) => set({ canGoBack: value }),
}));
