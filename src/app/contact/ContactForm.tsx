"use client";

import { useState } from "react";

const inputClasses =
  "w-full border border-warm-black/20 px-4 py-3 bg-cream text-warm-black text-base focus:outline-none focus:border-forest-teal transition";

const INTEREST_OPTIONS = [
  "Brand strategy + identity",
  "Multi-channel marketing",
  "Web design + build",
  "Event design + execution",
  "Full marketing partnership",
  "Single project / one-off",
  "Not sure yet — let's talk",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, interest, message }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.message ?? data.error ?? "Submit failed");
      }
      setStatus("sent");
      setName("");
      setEmail("");
      setCompany("");
      setInterest("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError((err as Error).message);
    }
  }

  if (status === "sent") {
    return (
      <div className="border-l-2 border-forest-teal pl-6 py-8">
        <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-4">
          Thank you
        </p>
        <p className="text-2xl md:text-3xl font-serif italic leading-snug mb-4">
          We&apos;ll be in touch within one business day.
        </p>
        <p className="text-sm text-warm-black/70">
          In the meantime, your note&apos;s landed with the team and Collie
          will reply personally.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-[10px] uppercase tracking-[0.25em] text-forest-teal block mb-2">
            Your name *
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClasses}
          />
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-[0.25em] text-forest-teal block mb-2">
            Email *
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label className="text-[10px] uppercase tracking-[0.25em] text-forest-teal block mb-2">
          Company / project
        </label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={inputClasses}
        />
      </div>

      <div>
        <label className="text-[10px] uppercase tracking-[0.25em] text-forest-teal block mb-2">
          Interested in
        </label>
        <select
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className={inputClasses}
        >
          <option value="">— pick one —</option>
          {INTEREST_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-[10px] uppercase tracking-[0.25em] text-forest-teal block mb-2">
          Tell us what you&apos;re building *
        </label>
        <textarea
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClasses} resize-y`}
          placeholder="Context, timing, what's worked so far, what hasn't."
        />
      </div>

      {error && (
        <p className="text-sm text-red-700 border-l-2 border-red-700 pl-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full md:w-auto bg-butter-yellow text-warm-black px-10 py-4 font-medium tracking-wide hover:opacity-90 transition disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Start the conversation →"}
      </button>

      <p className="text-xs text-warm-black/50">
        We&apos;ll reply within one business day. Your note is private — we
        won&apos;t add you to any list.
      </p>
    </form>
  );
}
