import { createSignal, createRoot } from "solid-js";

function createStorePropertyFilter() {
  const [showPropertyFilter, _setShowPropertyFilter] = createSignal(false);
  const setShowPropertyFilter = (value: boolean) => _setShowPropertyFilter(value);
  
  const [minPrice, _setMinPrice] = createSignal(0);
  const setMinPrice = (value: number) => _setMinPrice(value);

  const [maxPrice, _setMaxPrice] = createSignal(0);
  const setMaxPrice = (value: number) => _setMaxPrice(value);

  const [province, _setProvince] = createSignal("");
  const setProvince = (value: string) => _setProvince(value);

  const [house, _setHouse] = createSignal(false);
  const setHouse = (value: boolean) => _setHouse(value);

  const [apartment, _setApartment] = createSignal(false);
  const setApartment = (value: boolean) => _setApartment(value);

  const [shower, _setShower] = createSignal(false);
  const setShower = (value: boolean) => _setShower(value);

  const [bath, _setBath] = createSignal(false);
  const setBath = (value: boolean) => _setBath(value);

  const [furnished, _setFurnished] = createSignal(false);
  const setFurnished = (value: boolean) => _setFurnished(value);

  return {
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    province,
    setProvince,
    house,
    setHouse,
    apartment,
    setApartment,
    shower,
    setShower,
    bath,
    setBath,
    furnished,
    setFurnished,
    showPropertyFilter,
    setShowPropertyFilter
  };
}

export default createRoot(createStorePropertyFilter);
