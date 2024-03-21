import type { NextPage } from "next";
import DivcolumnInner from "./divcolumn-inner";
import styles from "./frame-component3.module.css";

const FrameComponent3: NextPage = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.frameParent}>
            <div className={styles.divdorikTextWrapper}>
              <div className={styles.divdorikText}>
                <div className={styles.pricingPlan}>Pricing Plan</div>
              </div>
            </div>
            <h1 className={styles.heading3}>Find The Perfect Plan</h1>
          </div>
        </div>
        <div className={styles.divcolumnInnerParent}>
          <DivcolumnInner
            standard="Standard"
            heading5For1Month="For 1 Month"
            heading2129="$129"
          />
          <DivcolumnInner
            standard="Premium"
            heading5For1Month="For 6 Month"
            heading2129="$359"
            propPadding="var(--padding-9xs) 28.799999999999997px var(--padding-9xs) 29.299999999999997px"
            propPadding1="0px 70.69999999999999px var(--padding-2xs) var(--padding-52xl)"
            propTextDecoration="unset"
            propPadding2="0px var(--padding-54xl-7) 0px var(--padding-55xl)"
            propPadding3="var(--padding-3xs-5) 28.59999999999999px var(--padding-2xs-5) var(--padding-11xl)"
          />
          <div className={styles.divcolumnInner}>
            <div className={styles.divdorikTextContainer}>
              <div className={styles.divdorikText1}>
                <div className={styles.platinum}>Platinum</div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.heading5For1YearWrapper}>
                <h3 className={styles.heading5}>For 1 Year</h3>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.heading2799Wrapper}>
                    <div className={styles.heading2}>$799</div>
                  </div>
                  <div className={styles.divdorikLineAvt5o912Wrappe}>
                    <div className={styles.separator} />
                  </div>
                </div>
                <div className={styles.logicGate}>
                  <div className={styles.freeRiding}>Free Riding</div>
                </div>
                <div className={styles.logicGate1}>
                  <div className={styles.yogaMeditation}>Yoga Meditation</div>
                </div>
              </div>
              <div className={styles.outputPort}>
                <div className={styles.unlimitedEquipments}>
                  Unlimited Equipments
                </div>
              </div>
              <div className={styles.personalTrainerWrapper}>
                <div className={styles.personalTrainer}>Personal Trainer</div>
              </div>
            </div>
            <div className={styles.buttonWrapper}>
              <div className={styles.button}>
                <div className={styles.getStarted}>Get Started</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
