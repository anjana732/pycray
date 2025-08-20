import { create } from "zustand";

export type EventItem = {
  name: string;
  date: string;
};

type EventStore = {
  events: EventItem[];
  addEvent: (event: EventItem) => void;
  removeEvent: (index: number) => void;
  setEvents: (events: EventItem[]) => void;
};

export const useEventStore = create<EventStore>((set) => ({
  events: [],
  addEvent: (event) =>
    set((state) => ({ events: [...state.events, event] })),
  removeEvent: (index) =>
    set((state) => ({
      events: state.events.filter((_, i) => i !== index),
    })),
  setEvents: (events) => set({ events }),
}));
