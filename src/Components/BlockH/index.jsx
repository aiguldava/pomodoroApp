import "../../assets/styles/block.css";
import nextPage from "../../assets/icons/next.png";

const BlockH = () => {
  return (
    <div className="header">
      <div className="block">
        <div className="block1">
          <div className="block2">
            <div className="blockButtons">
              <button className="btnP">Pomofocus</button>
              <button className="btnP">Short Break</button>
              <button className="btnP">Long Break</button>
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
