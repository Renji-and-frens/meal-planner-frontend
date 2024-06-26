/*
Utility functions goes here
For example:-
    - calculateTotalCalories(ingredients) that takes ingredients can add total calories
    - formateCookingTime(minutes) that takes minutes and gives out in hour minute format
*/

//Convert second to hr min sec format
const convertSeconds = (time) => {
  const totalSeconds = parseInt(time, 10);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours === 0 && minutes === 0) {
    return `${seconds} sec`;
  } else if (hours === 0) {
    return `${minutes} min ${seconds ? `${seconds} sec` : ""}`.trim();
  } else if (minutes === 0 && seconds === 0) {
    return `${hours} hrs`;
  } else {
    return `${hours} hrs ${minutes} min ${
      seconds ? `${seconds} sec` : ""
    }`.trim();
  }
};

export default convertSeconds;
