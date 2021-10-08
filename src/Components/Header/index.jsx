import '../../assets/styles/header.css'
import report from '../../assets/icons/Vector.svg'
import setting from '../../assets/icons/settings.png'
import { Button } from '../HeaderButton'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-child'>
                <h1>Pomofocus</h1>
                <div className='btnDiv'>
                 <Button title='Setting' icon={report}></Button>
                <Button title='Report' icon={setting}></Button>
                </div>          
            </div>      
            <div className='timer'>
                <div className='secondT'>
             </div>
            </div>   
        </div>
    )
}
export default Header