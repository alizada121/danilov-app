import { useEffect } from "react";

const useOutsideClick = (SearchRef, callback) => {
  const handleClick = e => {
    if (SearchRef.current && !SearchRef.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;