import "../../assets/styles/block.css";
import nextPage from "../../assets/icons/next.png";
import { ButtonH } from "../BlockHButtons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ModalTwo } from "../ModalTwo";

const BlockH = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [skipModal, setSkipModal] = useState(false);

  const state = useSelector((state) => state);
  const time = state.time;
  const backgroundColor = state.changeBackground;

  const toggleFunc = () => {
    setIsStarted(!isStarted);
  };

  const skipModalHandler = (value) => {
    setSkipModal(value);
    setIsStarted(!isStarted);
  };

  useEffect(() => {
    if (backgroundColor === "pomodoro") {
      setMinute(time.pomodoro);
      setSecond(0);
      setIsStarted(false);
    } else if (backgroundColor === "shortbreak") {
      setMinute(time.shortbreak);
      setSecond(0);
      setIsStarted(false);
    } else {
      setMinute(time.longbreak);
      setSecond(0);
      setIsStarted(false);
    }
  }, [backgroundColor, time]);

  useEffect(() => {
    let interval = setInterval(() => {
      if (isStarted) {
        if (second > 0) {
          setSecond(second - 1);
        }
        if (second === 0) {
          if (minute === 0) {
            clearInterval(interval);
          } else {
            setMinute(minute - 1);
            setSecond(59);
          }
        }
      }
    }, 1000);
    if (second == "0" && minute == "0") {
      setIsStarted(false);
      clearInterval(interval);
    }
    if (!isStarted) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isStarted, second]);

  let timerMinute = minute < 10 ? `0${minute}` : minute;
  let timerSecond = second < 10 ? `0${second}` : second;
  return (
    <div className="headerBlock">
      <div className="block">
        <div className="block1">
          <div className="block2">
            <div className="blockButtons">
              <ButtonH title="Pomodoro" color="pomodoro" active="pomodoro" />
              <ButtonH
                title="Short Break"
                color="shortbreak"
                active="shortbreak"
              />
              <ButtonH
                title="Long Break"
                color="longbreak"
                active="longbreak"
              />
            </div>
            <div>
              <div className="clock">
                <p className="time">
                  {timerMinute}:{timerSecond}
                </p>
              </div>
              <div className="blockStart">
                <button onClick={toggleFunc} className="start start-color">
                  {isStarted ? "STOP" : "START"}
                </button>
                {isStarted ? (
                  <div
                    className="next"
                    onClick={() => {
                      skipModalHandler(true);
                    }}
                  >
                    <img className="nextIcon" src={nextPage} alt="asd" />
                  </div>
                ) : (
                  ""
                )}
              </div>
              {skipModal ? (
                <ModalTwo
                  onclose={() => {
                    skipModalHandler(false);
                  }}
                ></ModalTwo>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlockH;
