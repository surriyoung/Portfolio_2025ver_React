import ScrollTopIcon from "../assets/icons/ScrollTopIcon";

function TopBtn() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button className="top-btn" onClick={scrollToTop}>
      <ScrollTopIcon />
    </button>
  );
}
export default TopBtn;
