import { useSelector } from 'react-redux'
import cls from './LongBtn.module.css'

const LongBtn = ({ value }) => {
    const theme = useSelector(state => state.backGround.theme)
    
    return (
        <button className={ 
            theme === 'dark' ? cls.btn : `${cls.btn} ${cls.btn_active}`
        }>
            <span
                style={{
                    color: theme == 'dark' ? '#5158FF' : '#353535'
                }}
            >
                {value}
            </span>
        </button>
    )
}

export default LongBtn