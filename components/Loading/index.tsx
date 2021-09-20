import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center mt-10">
      <Loader type="ThreeDots" color="#7EB5A6" height={100} width={100} />
    </div>
  );
};

export default Loading;
