import create from "zustand";

interface State {
  isDark: boolean;
  switchMode: () => void;
}

export const themeStore = create<State>((set) => ({
  isDark: false,
  switchMode: () => {
    set((state) => ({
      isDark: !state.isDark,
    }));
  },
}));
