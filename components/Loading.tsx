import { BeatLoader, DotLoader, HashLoader } from "react-spinners";

export const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: "0",
        right: "0",
        left: "0",
        bottom: "0",
        position: "absolute",
      }}>
      <HashLoader color='#295AA9' />
    </div>
  );
};

export const LoadingBlur = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: "1000",
        backgroundColor: "rgba(255,255,255,0.25)",
        backdropFilter: "blur(8px)",
      }}>
      <DotLoader color='#793EF5' />
    </div>
  );
};
