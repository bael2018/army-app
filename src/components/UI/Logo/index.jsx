import { useSelector } from 'react-redux'
import cls from './Logo.module.css'

const Logo = () => {
    const theme = useSelector(state => state.backGround.theme)
    
    return (
        <section className={cls.logo}>
            <img src={
                theme === 'dark' ? '/img/1Mln.Army.png' : '/img/darkLogo.png'
            } alt="Logo" />
        </section>
    )
}

export default Logo