import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface EventItem {
  id: string;
  title: string;
  date: string;
  description?: string;
}

interface EventState {
  events: EventItem[];
  addEvent: (event: EventItem) => void;
  removeEvent: (id: string) => void;
  clearEvents: () => void;
}

export const useEventStore = create<EventState>()(
  persist(
    (set) => ({
      events: [],
      addEvent: (event) =>
        set((state) => ({ events: [...state.events, event] })),
      removeEvent: (id) =>
        set((state) => ({ events: state.events.filter((e) => e.id !== id) })),
      clearEvents: () => set({ events: [] }),
    }),
    {
      name: "event-storage", // localStorage key
    }
  )
);
