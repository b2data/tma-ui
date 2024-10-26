import { Wave } from "./model";
import styles from "./Ripple.module.css";

export interface RippleProps {
  clicks: Wave[];
}

export const Ripple = ({ clicks }: RippleProps) => (
  <span aria-hidden className={styles.wrapper}>
    {clicks.map((wave) => (
      <span
        key={wave.date}
        className={styles.wave}
        style={{
          top: wave.y,
          left: wave.x,
        }}
      />
    ))}
  </span>
);
