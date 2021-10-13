import { CHANGE_BACKGROUND } from "../actionTypes";

const initialState = {
  changeBackground: "pomodoro",
  time: { pomodoro: 25, shortbreak: 5, longbreak: 15 },
};

const PomodoroApp = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BACKGROUND:
      return {
        ...state,
        changeBackground: action.color,
      };
    default:
      return state;
  }
};
export default PomodoroApp;
