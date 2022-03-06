import cls from './Alert.module.css'
import { AiOutlineCheck , AiOutlineExclamation } from 'react-icons/ai'
import { RiCloseFill } from 'react-icons/ri'
import { useSelector } from 'react-redux'

const Alert = ({ state , value , mood }) => {
    const theme = useSelector(state => state.backGround.theme)
    
    return (
        <section 
            className={theme === 'dark' ? cls.alert : `${cls.alert} ${cls.alert_light}`}
            style={{
                pointerEvents: state ? 'all' : 'none',
                opacity: state ? '1' : '0',
                transform: state ? 'scale(1)' : 'scale(.9)',
                border: `
                    1px solid ${
                        mood === 'success' ? '#95FFA6' : 
                        mood === 'warning' ? '#FFF495' : 
                        mood === 'danger' ? '#FF9595' : null
                    }
                `
            }}
        >
            <span style={{
                border: `
                    1px solid ${
                        mood === 'success' ? '#95FFA6' : 
                        mood === 'warning' ? '#FFF495' : 
                        mood === 'danger' ? '#FF9595' : null
                    }
                ` , 
                color: mood === 'success' ? '#95FFA6' : 
                    mood === 'warning' ? '#FFF495' : 
                    mood === 'danger' ? '#FF9595' : null
            }}>
                {
                    mood === 'success' ? <AiOutlineCheck/> :
                    mood === 'warning' ? <AiOutlineExclamation/> : 
                    mood === 'danger' ? <RiCloseFill/> : null
                }
            </span>
            {value}
        </section>
    )
}

export default Alert