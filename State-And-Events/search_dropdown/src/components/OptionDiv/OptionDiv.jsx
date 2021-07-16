import FlagIcons from "../../data/img/FlagIcons";
import styles from "./optionDiv.module.css";

export default function OptionDiv({ label, url }) {
  return (
    <div className={styles.option}>
      <FlagIcons src={url} alt={label} />
      <label className={styles.countryName}>{label}</label>
    </div>
  );
}
