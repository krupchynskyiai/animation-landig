import React, { useRef } from "react";
// import { CSSTransition } from "react-transition-group";
import * as SC from "./Loader.styled";
import { Progress } from "./Progress/Progress";
import { Title } from "./Title/Title";

const Loader = ({ isLoading, setIsLoading, scale }) => {
  // const [showLoader, setShowLoader] = useState(true);

  const loader = useRef(null);

  // useEffect(() => {
  //   if (isLoading) {
  //     setShowLoader(true);
  //   } else {
  //     setTimeout(() => {
  //       setShowLoader(false);
  //     }, 2000);
  //   }
  // }, [isLoading]);

  return (
    <>
      {/* {isLoading ? ( */}
      <SC.LoaderContainer
        ref={loader}
        style={{
          height: `${document.documentElement.clientHeight / scale}px`,
          width: `${document.documentElement.clientWidth / scale}px`,
          transform: `scale(${scale})`,
          transformOrigin: "left top",
        }}
      >
        <Title isLoading={isLoading} />
        <Progress isLoading={isLoading} setIsLoading={setIsLoading} />
      </SC.LoaderContainer>
      {/* ) : (
        <CSSTransition in={!showLoader} timeout={1000} classNames>
          <svg
            style={{
              height: "100vh",
              width: "100%",
              display: "block",
              fill: "red",
            }}
            width="100%"
            height="100vh"
            preserveAspectRatio="none"
            viewBox="0 0 1440 800"
          >
            <path
              d="M -44,-50 C -52.71,28.52 15.86,8.186 184,14.69 383.3,22.39 462.5,12.58 638,14 835.5,15.6 987,6.4 1194,13.86 1661,30.68 1652,-36.74 1582,-140.1 1512,-243.5 15.88,-589.5 -44,-50 Z"
              pathdataId="M -44,-50 C -137.1,117.4 67.86,445.5 236,452 435.3,459.7 500.5,242.6 676,244 873.5,245.6 957,522.4 1154,594 1593,753.7 1793,226.3 1582,-126 1371,-478.3 219.8,-524.2 -44,-50 Z"
            ></path>
          </svg>
        </CSSTransition>
      )} */}
    </>
  );
};

export default Loader;
