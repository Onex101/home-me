import storePropertyFilter from "~/stores/storePropertyFilter";
import Filter from "~/components/properyFilter/index";

const { showPropertyFilter, setShowPropertyFilter } = storePropertyFilter;

export default function Components() {
  const toggleFilter = () => setShowPropertyFilter(!showPropertyFilter());

  return (
    <>
      {showPropertyFilter() && <Filter />}
      <button onclick={toggleFilter}>Toggle Filer</button>
    </>
  );
}
