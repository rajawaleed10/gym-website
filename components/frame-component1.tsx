import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  linkMaskGroup9O4fb0png?: string;
  weightlifting?: string;
  howToChooseTheFitness?: string;
  careerPathThatIsRightFor?: string;
  you?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  linkMaskGroup9O4fb0png,
  weightlifting,
  howToChooseTheFitness,
  careerPathThatIsRightFor,
  you,
  propMinWidth,
}) => {
  const weightliftingStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.linkMaskGroup9o4fb0pngParent}>
      <img
        className={styles.linkMaskGroup9o4fb0png}
        loading="lazy"
        alt=""
        src={linkMaskGroup9O4fb0png}
      />
      <div className={styles.weightliftingParent}>
        <div className={styles.weightlifting} style={weightliftingStyle}>
          {weightlifting}
        </div>
        <div className={styles.linkHeading4HowToChooParent}>
          <h2 className={styles.linkHeadingContainer}>
            <p className={styles.howToChoose}>{howToChooseTheFitness}</p>
            <p className={styles.careerPathThat}>{careerPathThatIsRightFor}</p>
            <p className={styles.you}>{you}</p>
          </h2>
          <div className={styles.linkRead}>Read More</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
