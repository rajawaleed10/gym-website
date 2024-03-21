import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./divcolumn-inner.module.css";

export type DivcolumnInnerType = {
  standard?: string;
  heading5For1Month?: string;
  heading2129?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propPadding2?: CSSProperties["padding"];
  propPadding3?: CSSProperties["padding"];
};

const DivcolumnInner: NextPage<DivcolumnInnerType> = ({
  standard,
  heading5For1Month,
  heading2129,
  propPadding,
  propPadding1,
  propTextDecoration,
  propPadding2,
  propPadding3,
}) => {
  const divdorikTextStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const delUnlimitedStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding3,
    };
  }, [propPadding3]);

  return (
    <div className={styles.divcolumnInner}>
      <div className={styles.divdorikTextWrapper}>
        <div className={styles.divdorikText} style={divdorikTextStyle}>
          <div className={styles.standard}>{standard}</div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.heading5For1MonthWrapper}>
          <h3 className={styles.heading5}>{heading5For1Month}</h3>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.heading2129Wrapper}>
            <div className={styles.heading2}>{heading2129}</div>
          </div>
          <div className={styles.divdorikLineB3gawre1Wrappe}>
            <div className={styles.separator} />
          </div>
        </div>
      </div>
      <div className={styles.divcolumnInnerInner} style={frameDivStyle}>
        <div className={styles.frameContainer}>
          <div className={styles.freeRidingWrapper}>
            <div className={styles.freeRiding}>Free Riding</div>
          </div>
          <div className={styles.yogaMeditationWrapper}>
            <div className={styles.yogaMeditation}>Yoga Meditation</div>
          </div>
          <div className={styles.delUnlimited} style={delUnlimitedStyle}>
            Unlimited Equipments
          </div>
          <div className={styles.delPersonalTrainerWrapper}>
            <div className={styles.delPersonal}>Personal Trainer</div>
          </div>
        </div>
      </div>
      <div className={styles.buttonWrapper} style={frameDiv1Style}>
        <div className={styles.button} style={buttonStyle}>
          <div className={styles.getStarted}>Get Started</div>
        </div>
      </div>
    </div>
  );
};

export default DivcolumnInner;
