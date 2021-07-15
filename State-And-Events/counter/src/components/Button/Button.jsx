import styles from "./button.module.css";

function Button({ id, onClick, value, disabled }) {
  return (
    <>
      <input
        type="button"
        className={styles.button}
        id={id}
        onClick={onClick}
        value={value}
        disabled={disabled}
      />
    </>
  );
}
export default Button;
