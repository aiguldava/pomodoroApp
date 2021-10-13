import "./modal.css";
import onIcon from "../../assets/icons/Switch (1).svg";
import offIcon from "../../assets/icons/Switch.svg";
import { useState } from "react";
import { Button } from "../HeaderButton";
import setting from "../../assets/icons/settings.png";
import xIcon from "../../assets/icons/remove.png";

export const Modal = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      {/* <Button title='' icon={setting}></Button> */}
      <Button title="Setting" icon={setting} onclick={toggleModal} />
      {modal && (
        <div className="modal">
          <div className="mdlHead">
            <img className="xIcon" onClick={toggleModal} src={xIcon} alt="" />
            <div className="modalContent">
              <div className="modalContent2">
                <h3>TIMER SETTING</h3>
                <hr />
                <div className="modalContent3">
                  <div className="mdlBlock">
                    <span>Timer (minutes)</span>
                    <div className="mdlBlock1">
                      <div>
                        <div className="mdlBtn">Pomodoro</div>
                        <input type="number" defaultValue="25" min="0" />
                      </div>
                      <div>
                        <div className="mdlBtn">Short Break</div>
                        <input type="number" defaultValue="5" min="0" />
                      </div>
                      <div>
                        <div className="mdlBtn">Long Break</div>
                        <input type="number" defaultValue="15" min="0" />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="threeMdlText">
                    <div className="changeMdlText">
                      <p className="mdlText"> Auto Start Breaks?</p>
                      <div className="mdlBtnIcon">
                        <img src={onIcon} alt="" />
                      </div>
                    </div>
                    <hr />
                    <div className="changeMdlText">
                      <p className="mdlText">Auto start Pomodoros?</p>
                      <div className="mdlBtnIcon">
                        <img src={offIcon} alt="" />
                      </div>
                    </div>
                    <hr />
                    <div className="changeMdlText">
                      <p className="mdlText">Long Break interval</p>
                      <input
                        className="mdlInp"
                        type="number"
                        defaultValue="4"
                        min="1"
                      />
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="mdlOk">
                <button className="btnOk"> OK </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
