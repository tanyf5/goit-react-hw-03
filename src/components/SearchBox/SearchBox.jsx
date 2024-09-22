import css from './SearchBox.module.css';

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.search}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={e => {
          onFilter(e.target.value);
        }}
      ></input>
    </div>
  );
}