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


"use client";

import { useEventStore } from "../store/eventStore";

export default function EventList({ search }: { search: string }) {
  const { events, removeEvent } = useEventStore();

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  if (filteredEvents.length === 0) {
    return <p className="text-gray-500 text-center mt-6 italic">No events yet 🚀</p>;
  }

  return (
    <div className="w-full max-w-md mt-6 space-y-4">
      {filteredEvents.map((event, index) => (
        <div
          key={index}
          className="flex justify-between items-center bg-white/90 backdrop-blur rounded-xl shadow-md p-4 border border-gray-200 hover:shadow-lg transition-all duration-200"
        >
          <div>
            <p className="font-semibold text-gray-800">{event.name}</p>
            <p className="text-sm text-gray-500">{event.date}</p>
          </div>
          <button
            onClick={() => removeEvent(index)}
            className="text-red-500 hover:text-red-700 font-semibold transition"
          >
            ✖
          </button>
        </div>
      ))}
    </div>
  );
}
