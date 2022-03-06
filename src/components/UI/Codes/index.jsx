import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { codesAction } from '../../../redux/action'
import cls from './Codes.module.css'

const Codes = () => {
    const theme = useSelector(state => state.backGround.theme)
    const state = useSelector(state => state.qr.code)
    const dispatch = useDispatch()

    return (
        <section 
            className={
                state ? `${cls.codes} ${cls.codes_active}` : cls.codes
            }
        >  
            <div className={theme === 'dark' ? cls.codes_container : `${cls.codes_container} ${
                cls.codes_container_light
            }`}>
                <div>
                    <span 
                        className={cls.close_btn}
                        onClick={() => dispatch(codesAction(false))}
                    >x</span>
                    <h3>Login with QR code</h3>
                    <p>DO NOT share this QR code to anyone</p>
                </div>
                <img src="/img/code.png" alt="code" />
            </div>
        </section>
    )
}

export default Codes