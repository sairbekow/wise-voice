import { ILaw, ILawState } from "@/models";
import { create } from "zustand";
import axios from "axios";

const useLaw = create<ILawState>((set, get) => ({
  laws: [],
  loading: false,
  error: null,
  fetchLaws: async () => {
    try {
      set({ loading: true });
      const posts = await axios.get<ILaw[], any>(
        "http://localhost:3000/api/laws/getAll"
      );
      set({ laws: posts.data });
    } catch (error) {
      if (error instanceof Error) set({ error: error.message });
      else set({ error: "Uknown error!" });
    } finally {
      set({ loading: false });
    }
  },
  getLaw: (id) => {
    return get().laws.find((law) => id === law.id);
  },
  addLaw: (law) => {
    set({ laws: [...get().laws, law] });
  },
  editLaw: (id, law) => {
    set({
      laws: [
        ...get().laws.map((l) => {
          if (id === l.id) {
            return law;
          }
          return l;
        }),
      ],
    });
  },
  removeLaw: (id) => {
    set({ laws: [...get().laws.filter((law) => law.id !== id)] });
  },
  vote: (id) => null,
}));
