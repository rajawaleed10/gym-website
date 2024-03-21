import type { NextPage } from "next";
import styles from "./error-handler.module.css";

const ErrorHandler: NextPage = () => {
  return (
    <section className={styles.errorHandler}>
      <div className={styles.section}>
        <div className={styles.frameParent}>
          <div className={styles.divdorikTextWrapper}>
            <div className={styles.divdorikText}>
              <div className={styles.joinNow}>Join Now</div>
            </div>
          </div>
          <div className={styles.heading3ShapeYourPerfactWrapper}>
            <h1 className={styles.heading3}>Shape Your Perfact Body</h1>
          </div>
          <div className={styles.throughPowerFollowContainer}>
            <p className={styles.throughPowerFollow}>
              Through power follow took the that following be of changes of
              necessary the of
            </p>
            <p className={styles.writtenHeShe}>
              written he she its and congress
            </p>
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

export default ErrorHandler;
