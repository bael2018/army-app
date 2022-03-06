import { useDispatch, useSelector } from 'react-redux'
import cls from './Sidebar.module.css'
import SidebarGames from './SidebarGames'
import SidebarLinks from './SidebarLinks'
import { BsChevronLeft } from 'react-icons/bs'
import { burgerAction } from '../../redux/action'
import Logo from '../UI/Logo'

const Sidebar = () => {
    const theme = useSelector(state => state.backGround.theme)
    const show = useSelector(state => state.burger.burger)
    const dispatch = useDispatch()

    return (
        <>
            <div className={
                show ? `${cls.cover} ${cls.cover_active}` : cls.cover
            }></div>
            <section 
                className={
                    show ? `${cls.sidebar} ${cls.sidebar_active}` : cls.sidebar
                }
                style={{
                    background: 
                    theme === 'dark' ? '#002134' : 'white',
                    border :
                    theme === 'dark' ? 'none' : '1px solid #C8C8C8'
                }}
            >
                <div className={
                    theme === 'dark' ? cls.closeBtn : `${cls.closeBtn} ${cls.closeBtn_light}`
                }>
                    <BsChevronLeft onClick={() => dispatch(burgerAction(false))}/>
                    <Logo/>
                </div>

                <div className={cls.sidebar_inside}>
                    <p>Account</p>
                    <h5
                        style={{
                            color: 
                            theme === 'dark' ? 'white' : '#262626'
                        }}
                    >user@gmail.com</h5>
                    <SidebarLinks/>
                </div>

                <div className={cls.sidebar_inside}>
                    <h4
                        style={{
                            color: 
                            theme === 'dark' ? '#ffffff80' : '#22222280'
                        }}
                    >Supported games</h4>
                    <SidebarGames/>
                </div>

                <div className={cls.sidebar_logOut}>
                <span>
                        <img src="/img/logout.png" alt="logOut" />
                        Log out
                </span>
                </div>

                <div 
                    className={cls.sidebar_footer}
                    style={{
                        background:
                        theme === 'dark' ? '#003B5A' : 'none',
                        borderTop: 
                        theme === 'dark' ? 'none' : '1px solid #C8C8C8',
                        color:
                        theme === 'dark' ? 'white' : '#3E3E3E'
                    }}
                >
                    Version 1.0
                </div>
            </section>
        </>
    )
}

export default Sidebar