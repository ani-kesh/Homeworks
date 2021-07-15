import styles from "./input.module.css";

function Input({ onChange, id, value }) {
  return (
    <>
      <input
        type="number"
        className={styles.counterInputs}
        id={id}
        onChange={onChange}
        value={value}
      />
    </>
  );
}
export default Input;
