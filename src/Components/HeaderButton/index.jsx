export const Button = ({ title, icon, onclick }) => {
    return (
        <button className='btnHead' onClick={onclick}>
            <img className='btnImg' src={icon} alt=""/>
            {title}
        </button>
    )
}