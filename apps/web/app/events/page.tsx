"use client" 

import Lottie from "lottie-react";
import EventForm from "@/components/EventForm";
import EventList from "@/components/EventList";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-gray-100 flex flex-col">
      {/* Header */}
      <header className="px-6 py-6 border-b border-gray-800 bg-transparent">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Lottie className="w-10 h-10" animationData={require("../../public/Event.json")} loop />
          <h1 className="text-2xl font-bold">📅 Event Manager</h1>
          {/* <p className="text-sm text-gray-400">Dark theme · local-only · Tailwind</p> */}
          
        </div>
      </header>

      {/* Content */}
      <section className="flex-1 max-w-8xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <EventForm />
        <EventList />
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-transparent py-6">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-400">
          <div>© {new Date().getFullYear()} Anjana Singh</div>
          <div className="flex items-center justify-center gap-4 mt-2">
            <a className="hover:text-cyan-400" href="https://github.com/anjana732" target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:text-cyan-400" href="https://linkedin.com/in/anjana732" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:text-cyan-400" href="https://nextjs-portfolio-rosy-six.vercel.app/" target="_blank" rel="noreferrer">Portfolio</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
