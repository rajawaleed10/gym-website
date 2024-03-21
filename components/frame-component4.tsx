import type { NextPage } from "next";
import styles from "./frame-component4.module.css";

const FrameComponent4: NextPage = () => {
  return (
    <section className={styles.gymcoInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.sectionWrapper}>
              <div className={styles.section}>
                <div className={styles.ourClass}>Our Class</div>
              </div>
            </div>
            <h1 className={styles.sectionHeading}>Classes Designed For You</h1>
          </div>
        </div>
        <div className={styles.sectionParent}>
          <div className={styles.section1}>
            <img
              className={styles.linkImg}
              loading="lazy"
              alt=""
              src="/link--img@2x.png"
            />
            <h3 className={styles.heading5}>OutDoor Classes</h3>
          </div>
          <div className={styles.section2}>
            <img className={styles.linkImg1} alt="" src="/link--img-1@2x.png" />
            <h3 className={styles.heading51}>Personal Training</h3>
          </div>
          <div className={styles.section3}>
            <img className={styles.linkImg2} alt="" src="/link--img-2@2x.png" />
            <h3 className={styles.heading52}>Group Training</h3>
          </div>
          <div className={styles.section4}>
            <img className={styles.linkImg3} alt="" src="/link--img-3@2x.png" />
            <h3 className={styles.heading53}>Digital Coaching</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
