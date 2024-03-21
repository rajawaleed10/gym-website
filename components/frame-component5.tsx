import type { NextPage } from "next";
import DivcolumnInner1 from "./divcolumn-inner1";
import styles from "./frame-component5.module.css";

const FrameComponent5: NextPage = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.frameParent}>
            <div className={styles.divdorikTextWrapper}>
              <div className={styles.divdorikText}>
                <div className={styles.ourPrograms}>Our Programs</div>
              </div>
            </div>
            <h1 className={styles.heading3}>Shape Your Perfact Body</h1>
          </div>
        </div>
        <div className={styles.dataProcessor}>
          <DivcolumnInner1
            stationeryBicycle13cAxSMp="/stationerybicycle13caxsmpng@2x.png"
            o1ZeY3bpng="/o1ze-y3bpng@2x.png"
            heading4CardioExercises="Cardio Exercises"
          />
          <DivcolumnInner1
            stationeryBicycle13cAxSMp="/weightlifter1jk2lb4png@2x.png"
            o1ZeY3bpng="/o2nf70png@2x.png"
            heading4CardioExercises="Weightlifting"
            propWidth="49px"
          />
          <div className={styles.divcolumnInner}>
            <div className={styles.frameGroup}>
              <div className={styles.dumbbell11ObenhnpngWrapper}>
                <img
                  className={styles.dumbbell11ObenhnpngIcon}
                  loading="lazy"
                  alt=""
                  src="/dumbbell11obenhnpng@2x.png"
                />
              </div>
              <img
                className={styles.o3C7ezmzpngIcon}
                loading="lazy"
                alt=""
                src="/o3c7ezmzpng@2x.png"
              />
            </div>
            <div className={styles.divcolumnInnerInner}>
              <div className={styles.frameContainer}>
                <div className={styles.heading4CrossfitTrainingParent}>
                  <h2 className={styles.heading4}>Crossfit Training</h2>
                  <div className={styles.projectServingTheContainer}>
                    <p className={styles.projectServingThe}>
                      Project serving the from make my in
                    </p>
                    <p className={styles.showedSchoolRoasted}>
                      showed school roasted. 
                    </p>
                  </div>
                </div>
                <div className={styles.buttonReadMoreWrapper}>
                  <div className={styles.buttonRead}>Read More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
