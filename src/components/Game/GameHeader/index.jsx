import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import cls from './GameHeader.module.css'

const GameHeader = () => {
    const theme = useSelector(state => state.backGround.theme)

    return (
        <section 
            className={cls.game_header}
            style={{
                borderBottom: theme === 'dark' ? '2px solid #002134' : '2px solid #E6E6E6'
            }}
        >
            <NavLink
                style={{ 
                    color: theme === 'dark' ? 'white' : 'black'
                }}
                to='/game/heroes'
                activeClassName={cls.game_header_active}
            >
                Choice of heroes
            </NavLink>

            <NavLink
                style={{ 
                    color: theme === 'dark' ? 'white' : 'black'
                }}
                to='/game/inventory'
                activeClassName={cls.game_header_active}
            >
                Inventory
                <span 
                  style={{ 
                    color: theme === 'dark' ? 'white' : 'white'
                }}>0</span>
            </NavLink>
        </section>
    )
}

export default GameHeader