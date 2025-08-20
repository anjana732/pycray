// "use client";

// import { useEventStore } from "../store/eventStore";

// export default function EventList({ search }: { search: string }) {
//   const { events, removeEvent } = useEventStore();

//   const filteredEvents = events.filter((event) =>
//     event.name.toLowerCase().includes(search.toLowerCase())
//   );

//   if (filteredEvents.length === 0) {
//     return <p className="text-gray-500 text-center mt-4">No events yet</p>;
//   }

//   return (
//     <div className="w-full max-w-md mt-6 space-y-3">
//       {filteredEvents.map((event, index) => (
//         <div
//           key={index}
//           className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm"
//         >
//           <div>
//             <p className="font-medium">{event.name}</p>
//             <p className="text-sm text-gray-500">{event.date}</p>
//           </div>
//           <button
//             onClick={() => removeEvent(index)}
//             className="text-red-500 hover:text-red-700 font-semibold"
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }


// "use client";

// import { useEventStore } from "../store/eventStore";

// export default function EventList({ search }: { search: string }) {
//   const { events, removeEvent } = useEventStore();

//   const filteredEvents = events.filter((event) =>
//     event.name.toLowerCase().includes(search.toLowerCase())
//   );

//   if (filteredEvents.length === 0) {
//     return <p className="text-gray-500 text-center mt-6 italic">No events yet 🚀</p>;
//   }

//   return (
//     <div className="w-full max-w-md mt-6 space-y-4">
//       {filteredEvents.map((event, index) => (
//         <div
//           key={index}
//           className="flex justify-between items-center bg-white/90 backdrop-blur rounded-xl shadow-md p-4 border border-gray-200 hover:shadow-lg transition-all duration-200"
//         >
//           <div>
//             <p className="font-semibold text-gray-800">{event.name}</p>
//             <p className="text-sm text-gray-500">{event.date}</p>
//           </div>
//           <button
//             onClick={() => removeEvent(index)}
//             className="text-red-500 hover:text-red-700 font-semibold transition"
//           >
//             ✖
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }


// "use client";
// import { useEffect, useState } from "react";
// import Lottie from "lottie-react";
// import { Trash2, Search, XCircle } from "lucide-react";


// export default function EventList({ events, setEvents }: { events: string[], setEvents: (ev: string[]) => void }) {
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     localStorage.setItem("events", JSON.stringify(events));
//   }, [events]);

//   const filtered = events.filter((e) => e.toLowerCase().includes(search.toLowerCase()));

//   const clearStorage = () => {
//     localStorage.removeItem("events");
//     setEvents([]);
//   };

//   return (
//     <div className="flex flex-col gap-4 bg-gray-900 border border-gray-700 p-6 rounded-2xl shadow-lg">
//       <h2 className="text-xl font-semibold text-cyan-400">Event List</h2>

//       <div className="flex items-center gap-2 bg-gray-800 rounded-lg px-3 py-2 border border-gray-600">
//         <Search className="text-gray-400 w-4 h-4" />
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search event..."
//           className="bg-transparent w-full text-gray-200 focus:outline-none"
//         />
//         {search && (
//           <XCircle
//             className="w-4 h-4 text-gray-400 cursor-pointer hover:text-red-400"
//             onClick={() => setSearch("")}
//           />
//         )}
//       </div>

//       {filtered.length === 0 ? (
//         <div className="flex flex-col items-center justify-center text-gray-400 py-6">
          
//           <p>No events found</p>
//           <Lottie animationData={require("/public/empty.json")} loop={true} />
//         </div>
//       ) : (
//         <ul className="flex flex-col gap-2">
//           {filtered.map((e, idx) => (
//             <li
//               key={idx}
//               className="flex justify-between items-center bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-gray-200"
//             >
//               {e}
//               <Trash2
//                 className="w-5 h-5 text-red-400 cursor-pointer hover:text-red-500"
//                 onClick={() => setEvents(events.filter((_, i) => i !== idx))}
//               />
//             </li>
//           ))}
//         </ul>
//       )}

//       <button
//         onClick={clearStorage}
//         className="mt-2 bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-2 font-medium transition"
//       >
//         Clear Storage
//       </button>
//     </div>
//   );
// }

// apps/web/components/EventList.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useEventStore } from "@/store/eventStore";
import { Trash2, Search, X } from "lucide-react";
import Lottie from "lottie-react";

/**
 * This component preserves all behaviour:
 *  - reads events from the Zustand store
 *  - supports search
 *  - remove (by id)
 *  - clearEvents -> clears the store (and localStorage via persist)
 *
 * It only adjusts styling / UX.
 */

export default function EventList() {
  const events = useEventStore((s) => s.events);
  const removeEvent = useEventStore((s) => s.removeEvent);
  const clearEvents = useEventStore((s) => s.clearEvents);

  const [search, setSearch] = useState("");
  const [animData, setAnimData] = useState<any>(null);

  // load public Lottie JSON at runtime (place file at apps/web/public/animations/empty.json)
  useEffect(() => {
    fetch("/animations/empty.json")
      .then((r) => r.json())
      .then((d) => setAnimData(d))
      .catch(() => setAnimData(null));
  }, []);

  const filtered = events.filter((e) =>
    [e.title, e.description, e.date]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="bg-gradient-to-b from-gray-900/60 to-gray-900/40 border border-gray-800 rounded-2xl p-6 shadow-lg flex flex-col">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-100">Events</h3>
          <p className="text-sm text-gray-400">Search, view, delete or clear all events</p>
        </div>

        <div className="flex items-center gap-2">
          {events.length > 0 && (
            <button
              onClick={() => clearEvents()}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-sm px-3 py-2 rounded-md transition shadow-sm"
              title="Clear all events"
            >
              <Trash2 className="w-4 h-4" />
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title / date / description..."
          className="pl-10 pr-10 w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-600"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-200"
            aria-label="clear search"
            title="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* List or Lottie empty */}
      <div className="flex-1 overflow-auto">
        {events.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            {animData ? (
              <div className="w-56 h-56">
                <Lottie animationData={animData} loop />
              </div>
            ) : (
              <div className="w-56 h-56 rounded-lg bg-gray-800 flex items-center justify-center text-gray-500">
                {/* fallback visual */}
                <span className="text-2xl">📭</span>
              </div>
            )}
            <p className="mt-4 text-gray-400">No events yet — add your first event.</p>
          </div>
        ) : filtered.length === 0 ? (
          <p className="text-center text-gray-400 py-8">No events match “{search}”</p>
        ) : (
          <ul className="space-y-3">
            {filtered.map((ev) => (
              <li
                key={ev.id}
                className="flex justify-between items-start gap-4 bg-gray-800 border border-gray-700 rounded-lg p-4 hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold text-gray-100">{ev.title}</h4>
                    <span className="text-xs text-gray-400">{ev.date}</span>
                  </div>
                  {ev.description && (
                    <p className="mt-1 text-sm text-gray-400">{ev.description}</p>
                  )}
                </div>

                <button
                  onClick={() => removeEvent(ev.id)}
                  className="text-red-400 hover:text-red-300"
                  aria-label={`Delete ${ev.title}`}
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
