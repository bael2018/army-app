import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from '../UI/Logo'
import cls from './Navbar.module.css'
import { burgerAction } from '../../redux/action'

const Navbar = () => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.backGround.theme)

    return (
        <section 
            className={cls.navbar}
            style={{
                background: 
                theme === 'dark' ? '#002134' : '#F6F6F6'
            }}
        >
            <div className={cls.navbar_container}>
                <div className={cls.burger_container}>
                    <div 
                        className={cls.burger}
                        onClick={() => {
                            dispatch(burgerAction(true))
                        }}
                    >
                        <span></span><span></span><span></span>
                    </div>
                    <Logo/>
                </div>

                <div className={cls.navbar_container_wrapper}>
                    <h3
                        style={{
                            color:
                            theme === 'dark' ? 'white' : 'black'
                        }}
                    >Payouts:</h3>
                    <Link to='/finance' className={
                        theme === 'dark' ? cls.navbar_container_child : 
                        `${cls.navbar_container_child} ${cls.navbar_container_child_active}`
                    }>
                        <span className={cls.navbar_container_child_first}>~</span>
                        <span className={cls.navbar_container_child_second}>~</span>
                        <p>$4241.3</p>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Navbar