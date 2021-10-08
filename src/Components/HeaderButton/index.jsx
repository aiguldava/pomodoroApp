export const Button = ({ title, icon }) => {
    return (
        <button className='btnHead'>
            <img className='btnImg' src={icon} alt=""/>
            {title}
        </button>
    )
}