import { NavLink } from 'react-router-dom'
import cls from './SidebarLinks.module.css'
import { FaCoins } from 'react-icons/fa'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { burgerAction } from '../../../redux/action'

const SidebarLinks = () => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.backGround.theme)

    document.addEventListener('click' , e => {
        if(e.target.id === 'burger'){
            dispatch(burgerAction(false))
        }
    })

    return (
        <div  className={
            theme === 'dark' ? cls.sidebar_links : `${cls.sidebar_links} ${cls.sidebar_links_alt}`
        }>
            <NavLink 
                id='burger'
                exact
                activeClassName={cls.sidebar_links_active}
                to='/'
                style={{
                    color:
                    theme === 'dark' ? '#E5E5E5' : '#353535'
                }}
            >
                <span>
                    <img src={
                        theme === 'dark' ? '/img/settings.png' : '/img/darkSet.png'
                    } alt="setup" />
                </span>
                Settings
            </NavLink>
            <NavLink 
                id='burger'
                activeClassName={cls.sidebar_links_active}
                to='/finance'
                style={{
                    color:
                    theme === 'dark' ? '#E5E5E5' : '#353535'
                }}
            >
                <span>
                    {
                        theme === 'dark' ? <FaCoins/> : <img src="/img/darkFin.png" alt="darkFin" />
                    } 
                </span>
                Finance
            </NavLink>
            <NavLink 
                id='burger'
                activeClassName={cls.sidebar_links_active}
                to='/help'
                style={{
                    color:
                    theme === 'dark' ? '#E5E5E5' : '#353535'
                }}
            >
                <span>
                    <img src={
                        theme === 'dark' ? '/img/help.png' : '/img/darkHelp.png'
                    } alt="help" />
                </span>
                Help & rules
            </NavLink>
            <NavLink 
                id='burger'
                activeClassName={cls.sidebar_links_active}
                to='/referral'
                style={{
                    color:
                    theme === 'dark' ? '#E5E5E5' : '#353535'
                }}
            >
                <span>
                    {
                        theme === 'dark' ? <HiOutlineUserGroup/> : <img src="/img/darkPep.png" alt="darkPep" />
                    }
                </span>
                Refferal system
            </NavLink>
        </div>
    )
}

export default SidebarLinks