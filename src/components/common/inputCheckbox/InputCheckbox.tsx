import { Accessor } from "solid-js";
import css from "./InputCheckbox.module.css";
interface IParams {
  signal: Accessor<boolean>;
  signalSetter: (value: boolean) => void;
  name?: string;
  label?: string;
}
export const InputCheckBox = ({
  signal,
  signalSetter,
  name = "",
  label = "",
}: IParams) => {
  return (
    <div class={css.container}>
      <label for={name}>{label}</label>
      <input
        name={name}
        id={name}
        type="checkbox"
        checked={signal()}
        onchange={() => {
          signalSetter(!signal());
        }}
      />
    </div>
  );
};
