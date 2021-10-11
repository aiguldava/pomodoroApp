import "../../assets/styles/block.css";
import nextPage from "../../assets/icons/next.png";
import { ButtonH } from "../BlockHButtons";

const BlockH = () => {
  return (
    <div className="headerBlock">
      <div className="block">
        <div className="block1">
          <div className="block2">
            <div className="blockButtons">
              <ButtonH title='Pomodoro' color='pomodoro' active='pomodoro'/>
              <ButtonH title='Short Break' color='shortbreak'active='shortbreak'/>
              <ButtonH title='Long Break' color='longbreak' active='longbreak'/>
              {/* <button className="btnP">Pomofocus</button>
              <button className="btnS">Short Break</button>
              <button className="btnL">Long Break</button> */}
            </div>
            <div>
              <div className="clock">
                <p className="time">25:00</p>
              </div>
              <div className="blockStart">
                <button className="start">STOP</button>
                <div className='next'>                
                  <img className="nextIcon" src={nextPage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlockH;
