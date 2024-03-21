import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./divcolumn-inner1.module.css";

export type DivcolumnInner1Type = {
  stationeryBicycle13cAxSMp?: string;
  o1ZeY3bpng?: string;
  heading4CardioExercises?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const DivcolumnInner1: NextPage<DivcolumnInner1Type> = ({
  stationeryBicycle13cAxSMp,
  o1ZeY3bpng,
  heading4CardioExercises,
  propWidth,
}) => {
  const o1ZeY3bpngIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.divcolumnInner}>
      <div className={styles.inputLink}>
        <div className={styles.outputLink}>
          <div className={styles.stationeryBicycle13caxsmpnWrapper}>
            <img
              className={styles.stationeryBicycle13caxsmpnIcon}
              loading="lazy"
              alt=""
              src={stationeryBicycle13cAxSMp}
            />
          </div>
          <img
            className={styles.o1ZeY3bpngIcon}
            loading="lazy"
            alt=""
            src={o1ZeY3bpng}
            style={o1ZeY3bpngIconStyle}
          />
        </div>
        <div className={styles.heading4CardioExercisesWrapper}>
          <h2 className={styles.heading4}>{heading4CardioExercises}</h2>
        </div>
      </div>
      <div className={styles.divcolumnInnerInner}>
        <div className={styles.projectServingTheFromMakeParent}>
          <div className={styles.projectServingTheContainer}>
            <p className={styles.projectServingThe}>
              Project serving the from make my in
            </p>
            <p className={styles.showedSchoolRoasted}>
              showed school roasted. 
            </p>
          </div>
          <div className={styles.buttonReadMoreWrapper}>
            <div className={styles.buttonRead}>Read More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivcolumnInner1;
