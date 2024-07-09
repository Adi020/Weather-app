import "./style/Loader.css";

const Loader = () => {
  return (
    <div className="lds-spinner absolute top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Loader;
