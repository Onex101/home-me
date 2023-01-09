import { createSignal } from "solid-js";
import counter from "./Counter.module.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <button class={counter.increment} onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </button>
  );
}
