import { useSelector } from 'react-redux'
import cls from './Title.module.css'

const Title = ({value}) => {
    const theme = useSelector(state => state.backGround.theme)
    
    return (
        <section 
            className={cls.title}
            style={{
                color: theme === 'dark' ? 'white' : 'black'
            }}
        >
            {value}
        </section>
    )
}

export default Title