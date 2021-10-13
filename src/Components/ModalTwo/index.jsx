import "./modalTwo.css";

export const ModalTwo = ({ onclose }) => {
  return (
    <div className="modal1">
      <div className="mdlTwo">
        <p className="mdlP">
          Подтвердите действие на странице <b> pomofocuse.io</b>
        </p>
        <p className="mdlP2">
          The timer is still running, are you sure you want to switch?
        </p>
        <div className="mdlTwoOk">
          <button className="btnMdlTwoOk"> OK </button>
        </div>
        <div className="mdlTwoOtm">
          <button onClick={onclose} className="btnMdlTwoOtm">
            {" "}
            ОТМЕНА{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
