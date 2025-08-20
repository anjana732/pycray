import {create} from 'zustand';

type Event = {
    id: number,
    name: string,
    date: string
}

type EventState = {
    events: Event[];
    addEvent : (name: string, date: string ) => void;
    deleteEvent : (id: number) => void;
}

export const useEventStore = create<EventState>((set) => ({
  events: [],
  addEvent: (name, date) =>
    set((state) => ({
      events: [...state.events, { id: Date.now(), name, date }],
    })),
  deleteEvent: (id) =>
    set((state) => ({
      events: state.events.filter((event) => event.id !== id),
    })),
}));