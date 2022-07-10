import styles from "./Buttons.module.scss";

const Buttons = ({ title }) => {
  return (
    <button className={styles.color} type="submit">
      {title}
    </button>
  );
};

export default Buttons;
