import { createStore } from "redux";
import PomodoroApp from "./reducers";

export const store=createStore(PomodoroApp)