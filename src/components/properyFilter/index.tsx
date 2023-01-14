import { batch, createSignal } from "solid-js";
import { InputCheckBox } from "../common/inputCheckBox/inputCheckBox";
import { InputNumber } from "../common/inputNumber/InputNumber";
import { InputText } from "../common/inputText/inputText";
import storePropertyFilter from "../../stores/storePropertyFilter";
import css from "./propertyFilter.module.css";

const {
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  province,
  setProvince,
  apartment,
  setApartment,
  house,
  setHouse,
  shower,
  setShower,
  bath,
  setBath,
  furnished,
  setFurnished,
  showPropertyFilter,
  setShowPropertyFilter,
} = storePropertyFilter;

export default function PropertyFilter() {
  const [_minPrice, _setMinPrice] = createSignal(minPrice());
  const [_maxPrice, _setMaxPrice] = createSignal(maxPrice());
  const [_province, _setProvince] = createSignal(province());
  const [_house, _setHouse] = createSignal(house());
  const [_apartment, _setApartment] = createSignal(apartment());
  const [_shower, _setShower] = createSignal(shower());
  const [_bath, _setBath] = createSignal(bath());
  const [_furnished, _setFurnished] = createSignal(furnished());

  const onApply = () => {
    batch(() => {
      setMinPrice(_minPrice());
      setMaxPrice(_maxPrice());
      setProvince(_province());
      setApartment(_apartment());
      setHouse(_house());
      setShower(_shower());
      setBath(_bath());
      setFurnished(_furnished());
    });

    setShowPropertyFilter(!showPropertyFilter());
  };

  const onCancel = () => {
    setShowPropertyFilter(!showPropertyFilter());
  };
  return (
    <article
      style={{
        visibility: showPropertyFilter() ? "visible" : "hidden",
      }}
      class={css.container}
    >
      <section>
        <InputNumber
          signal={_minPrice}
          signalSetter={_setMinPrice}
          name="minPrice"
          label="Minimum price"
          min={0}
        />

        <InputNumber
          signal={_maxPrice}
          signalSetter={_setMaxPrice}
          name="maxPrice"
          label="Maximum price"
        />

        <InputText
          name="province"
          label="Province"
          signal={_province}
          signalSetter={_setProvince}
        />
      </section>
      <section>
        <InputCheckBox
          name="apartment"
          label="Apartment"
          signal={_apartment}
          signalSetter={_setApartment}
        />

        <InputCheckBox
          name="house"
          label="House"
          signal={_house}
          signalSetter={_setHouse}
        />

        <InputCheckBox
          name="shower"
          label="Shower"
          signal={_shower}
          signalSetter={_setShower}
        />

        <InputCheckBox
          name="bath"
          label="Bath"
          signal={_bath}
          signalSetter={_setBath}
        />

        <InputCheckBox
          name="furnished"
          label="Furnished"
          signal={_furnished}
          signalSetter={_setFurnished}
        />
      </section>
      <button onClick={onApply}>Apply</button>
      <button onClick={onCancel}>Canel</button>
    </article>
  );
}
