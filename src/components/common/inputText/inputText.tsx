import { Accessor } from "solid-js";
import css from "./inputText.module.css";

interface IParams {
  signal: Accessor<string>;
  signalSetter: (value: string) => void;
  name?: string;
  label?: string;
  placeholder?: string;
}
export const InputText = ({
  signal,
  signalSetter,
  name = "",
  label = "",
  placeholder = "",
}: IParams) => {
  return (
    <div class={css.container}>
      <label class={css.label} for={name}>{label}</label>
      <input
        name={name}
        id={name}
        type="text"
        onKeyUp={(event) => {
          const value = event.currentTarget.value;
          signalSetter(value);
        }}
        value={signal()}
        placeholder={placeholder}
        class={css.input}
      />
    </div>
  );
};
