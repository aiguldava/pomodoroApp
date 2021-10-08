import './modal.css'
export const Modal = () => {
    return(
        <div className='modal'>
            <div className='mdlHead'>
                <h3>TIMER SETTING</h3>
                <hr/>
                <span>Timer (minutes)</span>
                <div className='mdlBlock'>
                    <div className='mdlBlock1'>
                        <div>
                            <div className='mdlBtn'>Pomodoro</div>
                            <input type="number" />
                        </div>
                        <div>
                            <div className='mdlBtn'>Short Break</div>
                            <input type="number" />
                        </div>
                        <div>
                            <div className='mdlBtn'>Long Break</div>
                            <input type="number"/>
                        </div>                      
                    </div>
                </div>
                <hr/>
                <div className='mdlText'>Auto start Breaks?</div>
                <hr/>
                <div className='mdlText1'>Auto start Pomodoros?</div>
                <hr/>
                <div className='mdlText2'>Long Break interval</div>
                <hr/>
            </div>
        </div>
    )
}