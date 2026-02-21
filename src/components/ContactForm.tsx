"use client";

import { useState } from "react";

const INTEREST_OPTIONS = [
  "",
  "Home network & device security (VIP / creator)",
  "Risk assessment",
  "Cloud security review (M365 / Azure / AWS)",
  "Compliance / framework alignment",
  "ICS / OT security",
  "Training & awareness",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company") || undefined,
      interest: formData.get("interest") || undefined,
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-stone-700/50 bg-stone-900/30 p-8 text-center">
        <p className="text-lg text-white">Message sent.</p>
        <p className="mt-2 text-sm text-stone-400">
          I’ll respond within a business day or two.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-stone-500 underline underline-offset-4 hover:text-stone-400"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm text-stone-500">
          Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded border border-stone-700 bg-stone-900 px-4 py-2.5 text-white placeholder-stone-600 focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
          placeholder="Your name"
          disabled={status === "sending"}
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-stone-500">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded border border-stone-700 bg-stone-900 px-4 py-2.5 text-white placeholder-stone-600 focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
          placeholder="you@company.com"
          disabled={status === "sending"}
        />
      </div>
      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm text-stone-500">
          Organization
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="w-full rounded border border-stone-700 bg-stone-900 px-4 py-2.5 text-white placeholder-stone-600 focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
          placeholder="Company or organization"
          disabled={status === "sending"}
        />
      </div>
      <div>
        <label htmlFor="interest" className="mb-1.5 block text-sm text-stone-500">
          What do you need help with?
        </label>
        <select
          id="interest"
          name="interest"
          className="w-full rounded border border-stone-700 bg-stone-900 px-4 py-2.5 text-white focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500"
          disabled={status === "sending"}
        >
          {INTEREST_OPTIONS.map((opt) => (
            <option key={opt || "none"} value={opt} className="bg-stone-900">
              {opt || "Select…"}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-stone-500">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full rounded border border-stone-700 bg-stone-900 px-4 py-2.5 text-white placeholder-stone-600 focus:border-stone-500 focus:outline-none focus:ring-1 focus:ring-stone-500 resize-none"
          placeholder="Briefly describe what you’re looking for…"
          disabled={status === "sending"}
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-400/90">{errorMessage}</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded border border-stone-600 bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-stone-500 hover:bg-stone-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
