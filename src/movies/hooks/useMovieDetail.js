import { useNavigate } from "react-router-dom";

export const useMovieDetail = () => {
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate("/movies", {
      replace: true,
    });
  };

  const numberTwoDecimals = (number = 0) => {
    return Number(number.toFixed(1));
  };
  const getYear = (date = "2024") => {
    return date.split("-")[0];
  };

  const startMovie = (vote = 0) => {
    return vote / 2;
  };

  const hourFormat = (runtime = 0) => {
    return (runtime / 60).toFixed(0) + "h " + (runtime % 60) + "min";
  };

  const objectLines = (dataObj = {}) => {
    let stringObject = "";
    dataObj.forEach((data, index) => {
      if (index == dataObj.length - 1) {
        stringObject = stringObject + data.name;
      } else {
        stringObject = stringObject + data.name + "/";
      }
    });
    return stringObject;
  };

  return {
    onNavigateBack,
    numberTwoDecimals,
    getYear,
    startMovie,
    hourFormat,
    objectLines,
  };
};
