// // apps/web/app/events/page.tsx
// "use client";

// import React, { useEffect, useMemo, useState } from "react";

// /**
//  * Mini Event Manager
//  * - stores events in local state
//  * - persists to localStorage (key: "pf_events")
//  * - search filter
//  */

// /* ---------- Types ---------- */
// type EventItem = {
//   id: string;
//   name: string;
//   date: string; // ISO yyyy-mm-dd from <input type="date">
// };

// /* ---------- LocalStorage hook ---------- */
// function useLocalStorage<T>(key: string, initial: T) {
//   const [state, setState] = useState<T>(() => {
//     try {
//       if (typeof window === "undefined") return initial;
//       const raw = localStorage.getItem(key);
//       return raw ? (JSON.parse(raw) as T) : initial;
//     } catch {
//       return initial;
//     }
//   });

//   useEffect(() => {
//     try {
//       localStorage.setItem(key, JSON.stringify(state));
//     } catch {
//       // ignore write errors (e.g., quota)
//     }
//   }, [key, state]);

//   return [state, setState] as const;
// }

// /* ---------- Small helpers ---------- */
// const id = () => Date.now().toString();

// function formatDate(inputIso: string) {
//   try {
//     const d = new Date(inputIso + "T00:00:00");
//     return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
//   } catch {
//     return inputIso;
//   }
// }

// /* ---------- Components ---------- */

// function EventForm({ onAdd }: { onAdd: (ev: EventItem) => void }) {
//   const [name, setName] = useState("");
//   const [date, setDate] = useState("");

//   const canSubmit = name.trim().length > 0 && date.trim().length > 0;

//   function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     if (!canSubmit) return;
//     onAdd({ id: id(), name: name.trim(), date });
//     setName("");
//     setDate("");
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-3">
//       <div>
//         <label className="block text-sm font-medium text-gray-200">Event Name</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//           placeholder="e.g. Team sync"
//           className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400"
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-200">Date</label>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           required
//           className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400"
//         />
//       </div>

//       <div>
//         <button
//           type="submit"
//           disabled={!canSubmit}
//           className="inline-flex items-center justify-center rounded-md bg-cyan-500 px-4 py-2 text-sm font-semibold text-black disabled:opacity-50"
//         >
//           Add Event
//         </button>
//       </div>
//     </form>
//   );
// }

// function EventList({
//   events,
//   onDelete,
// }: {
//   events: EventItem[];
//   onDelete: (id: string) => void;
// }) {
//   if (!events.length) {
//     return <p className="text-sm text-gray-400">No events yet. Add your first event above.</p>;
//   }

//   return (
//     <ul className="space-y-2">
//       {events.map((ev) => (
//         <li
//           key={ev.id}
//           className="flex items-center justify-between rounded-md border border-gray-700 bg-gray-850 px-4 py-3"
//         >
//           <div>
//             <div className="text-sm font-medium text-gray-100">{ev.name}</div>
//             <div className="text-xs text-gray-400">{formatDate(ev.date)}</div>
//           </div>

//           <button
//             onClick={() => onDelete(ev.id)}
//             className="ml-4 rounded-md px-3 py-1 text-sm font-medium text-red-400 hover:text-red-300"
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// /* ---------- Page (main) ---------- */

// export default function EventsPage() {
//   // persist across reloads (bonus)
//   const [events, setEvents] = useLocalStorage<EventItem[]>("pf_events", []);
//   const [query, setQuery] = useState("");

//   const handleAdd = (ev: EventItem) => {
//     setEvents((prev) => [ev, ...prev]); // newest at top
//   };

//   const handleDelete = (id: string) => {
//     setEvents((prev) => prev.filter((p) => p.id !== id));
//   };

//   const filtered = useMemo(() => {
//     const q = query.trim().toLowerCase();
//     if (!q) return events;
//     return events.filter((e) => e.name.toLowerCase().includes(q));
//   }, [events, query]);

//   return (
//     <main className="min-h-screen bg-gray-900 py-10">
//       <div className="mx-auto max-w-xl px-4">
//         <h1 className="mb-6 text-center text-2xl font-bold text-white">Mini Event Manager</h1>

//         <section className="mb-6 rounded-lg bg-gray-800 p-6 shadow">
//           <EventForm onAdd={handleAdd} />
//         </section>

//         <section className="mb-4 flex items-center justify-between gap-4">
//           <div className="flex-1">
//             <input
//               type="search"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               placeholder="Search events by name..."
//               className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400"
//             />
//           </div>
//           <div>
//             <button
//               onClick={() => {
//                 setEvents([]);
//                 setQuery("");
//               }}
//               className="ml-2 rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white"
//             >
//               Clear All
//             </button>
//           </div>
//         </section>

//         <section className="rounded-lg bg-gray-800 p-6 shadow">
//           <EventList events={filtered} onDelete={handleDelete} />
//         </section>

//         <p className="mt-6 text-center text-xs text-gray-500">
//           Client-side only • No DB • Persisted to localStorage (optional)
//         </p>
//       </div>
//     </main>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { useEventStore } from "../../store/eventStore";
import EventForm from "../../components/EventForm";
import EventList from "../../components/EventList";

export default function EventsPage() {
  const { events, setEvents } = useEventStore();
  const [search, setSearch] = useState("");

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("events");
    if (stored) {
      setEvents(JSON.parse(stored));
    }
  }, [setEvents]);

  // Save to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">📅 Event Manager</h1>

      {/* Form */}
      <EventForm />

      {/* Search */}
      <div className="w-full max-w-md mt-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search events..."
          className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2"
        />
      </div>

      {/* List */}
      <EventList search={search} />
    </div>
  );
}
