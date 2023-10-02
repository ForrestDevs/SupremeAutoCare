"use client";

import { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch("/api/email", {
      body: JSON.stringify({
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((res) => {
      if (res.ok) {
        setEmail("");
        alert("Success! 🎉 You are now subscribed to the newsletter.");
      } else {
        res.json().then((json) => {
          alert(json.error.message);
        });
      }
    });
  }

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <div className="flex items-center py-2 ">
        <input
          className="rounded-lg border border-black w-full text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none"
          type="email"
          placeholder="Email"
          aria-label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="flex-shrink-0 bg-white hover:bg-slate-300 border border-black text-sm text-black py-2 px-2 rounded-lg"
          type="submit"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}
