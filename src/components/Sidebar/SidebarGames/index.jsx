import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { burgerAction } from '../../../redux/action'
import cls from './SidebarGames.module.css'

const SidebarGames = () => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.backGround.theme)

    document.addEventListener('click' , e => {
        if(e.target.id === 'burger'){
            dispatch(burgerAction(false))
        }
    })
    
    return (
        <section className={cls.games}>
            <NavLink
                id='burger'
                to='/game1'
                style={{
                    color:
                    theme === 'dark' ? '#E5E5E5' : '#353535'
                }}
                activeClassName={cls.games_active}
            >
                <span>
                    <img src="/img/game.png" alt="game" />
                </span>
                AXIE INFINITY
            </NavLink>
            <div
                className={theme === 'dark' ? null : cls.active_div}
                style={{
                color:
                theme === 'dark' ? '#E5E5E5' : '#353535'
            }}>
                <span>
                    <img src="/img/soon1.png" alt="game" />
                </span>
                <p>SOON</p>
            </div>
            <div
                className={theme === 'dark' ? null : cls.active_div}
                style={{
                color:
                theme === 'dark' ? '#E5E5E5' : '#353535'
            }}>
                <span>
                    <img src="/img/soon2.png" alt="game" />
                </span>
                <p>SOON</p>
            </div>
            <div
                className={theme === 'dark' ? null : cls.active_div}
                style={{
                color:
                theme === 'dark' ? '#E5E5E5' : '#353535'
            }}>
                <span>
                    <img src="/img/game.png" alt="game" />
                </span>
                <p>SOON</p>
            </div>
        </section>
    )
}

export default SidebarGames