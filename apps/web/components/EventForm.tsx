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
