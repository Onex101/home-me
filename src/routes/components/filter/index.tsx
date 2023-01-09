import css from "./filter.module.css";

export default function Filter() {
  return (
    <article>
      <section>
        <input name="minPrice" type="number" placeholder="Min price" min={0} />
        <input name="maxPrice" type="number" placeholder="Max price" />
        <input type="text" name="province" placeholder="Province" />
      </section>
      <section>
        <label>
          Apartment
          <input name="apartment" type="checkbox" />
        </label>
        <label>
          House
          <input name="apartment" type="checkbox" />
        </label>
      </section>
    </article>
  );
}
