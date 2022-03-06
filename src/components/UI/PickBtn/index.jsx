import { useSelector } from 'react-redux'
import cls from './PickBtn.module.css'

const PickBtn = ({state , value}) => {
    const theme = useSelector(state => state.backGround.theme)

    return (
        <button className={
            theme === 'dark' ? cls.pick_btn : `${cls.pick_btn} ${cls.pick_btn_active}`
        }>
            <span 
                style={{
                    color: state ? '#5158FF' : '#FF5151'
                }}
            >
                {value}
            </span>
        </button>
    )
}

export default PickBtn