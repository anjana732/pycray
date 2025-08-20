// "use client";

// import { useForm } from "react-hook-form";
// import { useEventStore } from "../store/eventStore";

// type EventFormValues = {
//   name: string;
//   date: string;
// };

// export default function EventForm() {
//   const { addEvent } = useEventStore();
//   const { register, handleSubmit, reset } = useForm<EventFormValues>();

//   const onSubmit = (data: EventFormValues) => {
//     addEvent({ name: data.name, date: data.date });
//     reset();
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="w-full max-w-md bg-white rounded-xl shadow-md p-6 space-y-4"
//     >
//       <div>
//         <label className="block text-sm font-medium mb-1">Event Name</label>
//         <input
//           {...register("name", { required: true })}
//           type="text"
//           placeholder="Enter event name"
//           className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2"
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium mb-1">Date</label>
//         <input
//           {...register("date", { required: true })}
//           type="date"
//           className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2"
//         />
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
//       >
//         Add Event
//       </button>
//     </form>
//   );
// }


"use client";

import { useForm } from "react-hook-form";
import { useEventStore } from "../store/eventStore";

type EventFormValues = {
  name: string;
  date: string;
};

export default function EventForm() {
  const { addEvent } = useEventStore();
  const { register, handleSubmit, reset } = useForm<EventFormValues>();

  const onSubmit = (data: EventFormValues) => {
    addEvent({ name: data.name, date: data.date });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 space-y-5 border border-gray-200"
    >
      <h2 className="text-lg font-semibold text-gray-800">Add New Event</h2>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-600">Event Name</label>
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="e.g. Team Meeting"
          className="w-full rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 p-2 text-gray-800 transition"
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-600">Date</label>
        <input
          {...register("date", { required: true })}
          type="date"
          className="w-full rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 p-2 text-gray-800 transition"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2 rounded-xl hover:opacity-90 transition-all duration-200 shadow-md"
      >
        ➕ Add Event
      </button>
    </form>
  );
}

