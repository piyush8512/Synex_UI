"use client";
import { useState } from "react";
import { MessageCircleMore } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // handle sending here
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-4">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Talk to our sales team</h1>
          <p className="text-zinc-400">
            Reach out to our dedicated sales and service groups for
            demonstrations, initiation assistance, and product inquiries.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-4">
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 text-white">
            <div className="flex items-center gap-2 mb-3 text-purple-400">
              <MessageCircleMore size={18} />
              <h3 className="font-semibold">Sales</h3>
            </div>
            <p className="text-sm text-zinc-400 mb-2">
              Chat with our selling department about options and costs
            </p>
            <a
              href="mailto:hello@example.com"
              className="text-sm text-purple-300 hover:underline"
            >
              hello@example.com
            </a>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 text-white">
            <div className="flex items-center gap-2 mb-3 text-purple-400">
              <MessageCircleMore size={18} />
              <h3 className="font-semibold">Help & support</h3>
            </div>
            <p className="text-sm text-zinc-400 mb-2">
              Inquire about items, highlight issues, or provide opinion.
            </p>
            <a
              href="mailto:help@example.com"
              className="text-sm text-purple-300 hover:underline"
            >
              help@example.com
            </a>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 text-white"
        >
          <div className="mb-4">
            <label className="text-sm block mb-1">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label className="text-sm block mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="jane@framer.com"
              className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label className="text-sm block mb-1">How can we help?</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white h-32 resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 transition-colors text-white py-2 px-6 rounded w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
