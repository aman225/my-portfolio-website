import { create } from 'zustand';

type State = {
  filter: string | null;
  setFilter: (value: string | null) => void;
};

export const useProjectFilter = create<State>((set) => ({
  filter: null,
  setFilter: (value) => set({ filter: value }),
}));