import styles from "../Input/input.module.css";

export default function Input({ type, onChange, id, placeholder, value }) {
  return (
    <>
      <input
        type={type}
        onChange={onChange}
        id={id}
        className={styles.counterInputs}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
}
