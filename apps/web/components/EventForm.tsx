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
//       className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 space-y-5 border border-gray-200"
//     >
//       <h2 className="text-lg font-semibold text-gray-800">Add New Event</h2>

//       <div className="space-y-1">
//         <label className="block text-sm font-medium text-gray-600">Event Name</label>
//         <input
//           {...register("name", { required: true })}
//           type="text"
//           placeholder="e.g. Team Meeting"
//           className="w-full rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 p-2 text-gray-800 transition"
//         />
//       </div>

//       <div className="space-y-1">
//         <label className="block text-sm font-medium text-gray-600">Date</label>
//         <input
//           {...register("date", { required: true })}
//           type="date"
//           className="w-full rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 p-2 text-gray-800 transition"
//         />
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2 rounded-xl hover:opacity-90 transition-all duration-200 shadow-md"
//       >
//         ➕ Add Event
//       </button>
//     </form>
//   );
// }

// "use client";

// import { useForm } from "react-hook-form";
// import { v4 as uuidv4 } from "uuid";
// import { useEventStore } from "@/store/eventStore";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Calendar, Plus } from "lucide-react";

// type FormData = {
//   title: string;
//   date: string;
//   description: string;
// };

// export default function EventForm() {
//   const { register, handleSubmit, reset } = useForm<FormData>();
//   const addEvent = useEventStore((s) => s.addEvent);

//   const onSubmit = (data: FormData) => {
//     addEvent({ id: uuidv4(), ...data });
//     reset();
//   };

//   return (
//     <div className="p-6 bg-gray-900 shadow-lg rounded-2xl border border-gray-700">
//       <h2 className="text-xl font-semibold mb-4 text-cyan-400 flex items-center gap-2">
//         <Calendar className="w-5 h-5" /> Add New Event
//       </h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <Input
//           placeholder="Event Title"
//           {...register("title", { required: true })}
//           className="bg-gray-800 text-white border-gray-600 focus:border-cyan-500"
//         />
//         <Input
//           type="date"
//           {...register("date", { required: true })}
//           className="bg-gray-800 text-white border-gray-600 focus:border-cyan-500"
//         />
//         <Textarea
//           placeholder="Description"
//           {...register("description")}
//           className="bg-gray-800 text-white border-gray-600 focus:border-cyan-500"
//         />
//         <Button
//           type="submit"
//           className="w-full bg-cyan-600 hover:bg-cyan-500 text-white"
//         >
//           <Plus className="w-4 h-4 mr-2" /> Add Event
//         </Button>
//       </form>
//     </div>
//   );
// }


// "use client";
// import { useState } from "react";

// export default function EventForm({ onAdd }: { onAdd: (event: string) => void }) {
//   const [event, setEvent] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!event.trim()) return;
//     onAdd(event.trim());
//     setEvent("");
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col gap-4 bg-gray-900 border border-gray-700 p-6 rounded-2xl shadow-lg"
//     >
//       <h2 className="text-xl font-semibold text-cyan-400">Add Event</h2>
//       <input
//         type="text"
//         value={event}
//         onChange={(e) => setEvent(e.target.value)}
//         placeholder="Enter event name..."
//         className="w-full rounded-lg bg-gray-800 border border-gray-600 text-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
//       />
//       <button
//         type="submit"
//         className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg px-4 py-2 font-medium transition"
//       >
//         Add
//       </button>
//     </form>
//   );
// }


// apps/web/components/EventForm.tsx
"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { CalendarPlus } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { useEventStore } from "@/store/eventStore";

type FormValues = {
  title: string;
  date: string;
  description: string;
};

export default function EventForm() {
  const addEvent = useEventStore((s) => s.addEvent);
  const { register, handleSubmit, reset, formState } = useForm<FormValues>({
    defaultValues: { title: "", date: "", description: "" },
  });

  const onSubmit = (data: FormValues) => {
    const item = { id: uuidv4(), ...data };
    addEvent(item);
    reset();
  };

  return (
    <aside className="bg-gradient-to-b from-gray-900/60 to-gray-900/40 border border-gray-800 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-cyan-700/20 text-cyan-300">
          <CalendarPlus className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-100">Add Event</h3>
          <p className="text-sm text-gray-400">Create an event — it will be saved to localStorage</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <label className="block text-sm text-gray-300">Title</label>
        <input
          {...register("title", { required: true })}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          placeholder="Team sync, Interview, Birthday..."
        />

        <label className="block text-sm text-gray-300">Date</label>
        <input
          {...register("date", { required: true })}
          type="date"
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-600"
        />

        <label className="block text-sm text-gray-300">Description (optional)</label>
        <textarea
          {...register("description")}
          rows={3}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          placeholder="Short note about the event..."
        />

        <div className="pt-2">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg px-4 py-2 shadow-md transition"
          >
            <span className="text-lg">➕</span>
            <span>Add event</span>
          </button>
        </div>

        {/* show validation errors lightly */}
        {formState.errors.title && (
          <p className="text-xs text-red-400">Title is required</p>
        )}
        {formState.errors.date && (
          <p className="text-xs text-red-400">Date is required</p>
        )}
      </form>
    </aside>
  );
}
