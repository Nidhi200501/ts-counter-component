"use client";

import React, { useState } from "react";

type CounterProps = {
  initial: number; // required, only number allowed
};

export default function Counter({ initial }: CounterProps) {
  const [count, setCount] = useState<number>(initial);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initial);

  return (
    <div style={{
      display: "inline-block",
      padding: 12,
      border: "1px solid #ddd",
      borderRadius: 8,
      minWidth: 160,
      textAlign: "center"
    }}>
      <div style={{ marginBottom: 8, fontWeight: 700 }}>Count: {count}</div>

      <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
        <button onClick={decrement} aria-label="decrement">-</button>
        <button onClick={increment} aria-label="increment">+</button>
        <button onClick={reset} aria-label="reset">Reset</button>
      </div>
    </div>
  );
}