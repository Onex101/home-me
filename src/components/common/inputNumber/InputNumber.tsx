import { Accessor } from "solid-js";
import css from "./InputNumber.module.css";

interface IParams {
  signal: Accessor<number>;
  signalSetter: (value: number) => void;
  name?: string;
  label?: string;
  placeholder?: string;
  min?: number;
}
export const InputNumber = ({
  signal,
  signalSetter,
  name = "",
  label = "",
  placeholder = "",
  min = 0,
}: IParams) => {
  return (
    <div class={css.container}>
      <label class={css.label} for={name}>{label}</label>
      <input
        id={name}
        name={name}
        type="number"
        onKeyUp={(event) => {
          const value = event.currentTarget.value;
          signalSetter(+value);
        }}
        value={signal()}
        placeholder={placeholder}
        min={min}
        class={css.input}
      />
    </div>
  );
};
