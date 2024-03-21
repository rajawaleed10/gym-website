import type { NextPage } from "next";
import OutputProcessor from "../components/output-processor";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent from "../components/frame-component";
import ErrorHandler from "../components/error-handler";
import styles from "./index.module.css";

const GYMCO: NextPage = () => {
  return (
    <div className={styles.gymco}>
      <div className={styles.logicBranch}>
        <img
          className={styles.sectionLinkFrame2Gtbqr}
          loading="lazy"
          alt=""
          src="/section--link--frame2gtbqripng@2x.png"
        />
      </div>
      <OutputProcessor />
      <FrameComponent6 />
      <FrameComponent5 />
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent />
      <ErrorHandler />
    </div>
  );
};

export default GYMCO;
