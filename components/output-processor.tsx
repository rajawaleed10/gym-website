import type { NextPage } from "next";
import styles from "./output-processor.module.css";

const OutputProcessor: NextPage = () => {
  return (
    <section className={styles.outputProcessor}>
      <div className={styles.section}>
        <div className={styles.frameParent}>
          <div className={styles.heading4KeepYourBodyWrapper}>
            <h2 className={styles.heading4}>Keep your Body</h2>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.heading1BurningWrapper}>
              <h1 className={styles.heading1}>Burning</h1>
            </div>
            <div className={styles.whatRenderingToContainer}>
              <p className={styles.whatRenderingTo}>
                What rendering to such trust, rationale versus it out palace be
              </p>
              <p className={styles.fantasticUsingDoctors}>
                fantastic using doctor's palace time
              </p>
            </div>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <div className={styles.button}>
            <div className={styles.getStarted}>Get Started</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutputProcessor;
