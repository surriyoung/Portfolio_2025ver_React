import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <div style={{ width: "100%", aspectRatio: "625 / 409" }}>
      <Skeleton height="100%" style={{ borderRadius: "10px" }} />
    </div>
  );
};

export default Loading;
