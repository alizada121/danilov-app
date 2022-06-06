import { useEffect } from "react";

const useOutsideClick = (refRef, callback) => {
  const handleClick = e => {
    if (refRef.current && !refRef.current.contains(e.target)) {
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