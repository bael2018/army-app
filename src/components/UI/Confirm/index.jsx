import { useSelector } from 'react-redux'
import cls from './Confirm.module.css'

const Confirm = ({state , close , alert}) => {
    const theme = useSelector(state => state.backGround.theme)

    const handleClose = () => {
        close(false)
        alert(true)
        setTimeout(() => {
            alert(false)
        } , 3000)
    }

    return (
        <section 
            style={{
                opacity: state ? '1' : '0',
                pointerEvents: state ? 'all' : 'none',
            }}
            className={cls.confirm}
        >
            <div className={theme === 'dark' ? cls.confirm_container : `${cls.confirm_container} ${
                cls.confirm_container_light
            }`}>
                <h3 className={cls.confirm_container_header}>Are you sure you want to return the hero?</h3>

                <div className={cls.confirm_container_body}>
                    <span>
                        <img src="/img/heartIcon.png" alt="heart" />
                        #2435862
                    </span>
                    <img className={cls.confirm_container_body_image} src="/img/buble-min.png" alt="buble" />
                </div>

                <div className={theme === 'dark' ? cls.confirm_container_footer : `${cls.confirm_container_footer} ${
                    cls.confirm_container_footer_light
                }`}>
                    <span onClick={() => close(false)}>No, leave</span>
                    <button onClick={handleClose}>
                        <span>Yes</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Confirm