import cls from './MoreBtn.module.css'
import { AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const MoreBtn = () => {
    const theme = useSelector(state => state.backGround.theme)

    return (
        <Link 
            to='/game/info' 
            className={cls.more_btn}
            style={{
                color: theme === 'dark' ? 'white' : 'black'
            }}
        >
            More details <AiOutlineRight/>
        </Link>
    )
}

export default MoreBtn