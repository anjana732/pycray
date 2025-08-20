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
      className="w-full max-w-md bg-white rounded-xl shadow-md p-6 space-y-4"
    >
      <div>
        <label className="block text-sm font-medium mb-1">Event Name</label>
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Enter event name"
          className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Date</label>
        <input
          {...register("date", { required: true })}
          type="date"
          className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add Event
      </button>
    </form>
  );
}
