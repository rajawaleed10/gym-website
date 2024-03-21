import type { NextPage } from "next";
import FrameComponent1 from "./frame-component1";
import styles from "./frame-component.module.css";

const FrameComponent: NextPage = () => {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.frameParent}>
            <div className={styles.divdorikTextWrapper}>
              <div className={styles.divdorikText}>
                <div className={styles.newsArticles}>{`News & Articles`}</div>
              </div>
            </div>
            <h1 className={styles.heading3}>Read Our Latest Blog Posts</h1>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <FrameComponent1
            linkMaskGroup9O4fb0png="/link--maskgroup9o4fb0png@2x.png"
            weightlifting="Weightlifting"
            howToChooseTheFitness="How to Choose the Fitness"
            careerPathThatIsRightFor="Career Path That is Right for"
            you="You"
          />
          <FrameComponent1
            linkMaskGroup9O4fb0png="/link--rectangle101xx1lkbpng@2x.png"
            weightlifting="Cardio"
            howToChooseTheFitness="Fitness and Nutrition Tips"
            careerPathThatIsRightFor="from the Healthiest"
            you="Countries"
            propMinWidth="52.6px"
          />
          <div className={styles.linkRectangle10JzgapwpngParent}>
            <img
              className={styles.linkRectangle10Jzgapwpng}
              loading="lazy"
              alt=""
              src="/link--rectangle10jzgapwpng@2x.png"
            />
            <div className={styles.crossfitParent}>
              <div className={styles.crossfit}>Crossfit</div>
              <div className={styles.linkHeading410TipsHowParent}>
                <h2 className={styles.linkHeadingContainer}>
                  <p className={styles.tipsHowTo}>
                    10 Tips How to Prepare Meals
                  </p>
                  <p className={styles.fastAndEasy}>Fast and Easy</p>
                </h2>
                <div className={styles.linkRead}>Read More</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <div className={styles.button}>
            <div className={styles.loadMore}>Load More</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
