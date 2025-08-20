// import { create } from "zustand";

// export type EventItem = {
//   name: string;
//   date: string;
// };

// type EventStore = {
//   events: EventItem[];
//   addEvent: (event: EventItem) => void;
//   removeEvent: (index: number) => void;
//   setEvents: (events: EventItem[]) => void;
// };

// export const useEventStore = create<EventStore>((set) => ({
//   events: [],
//   addEvent: (event) =>
//     set((state) => ({ events: [...state.events, event] })),
//   removeEvent: (index) =>
//     set((state) => ({
//       events: state.events.filter((_, i) => i !== index),
//     })),
//   setEvents: (events) => set({ events }),
// }));


// apps/web/store/eventStore.ts
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
