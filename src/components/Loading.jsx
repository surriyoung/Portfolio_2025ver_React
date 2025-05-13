import Spinner from "../assets/spinner.gif";

const Loading = ({ cont }) => {
  return (
    <>
      <span>{cont}</span>
      <img src={Spinner} alt="로딩중" width="5%" />
    </>
  );
};

export default Loading;
