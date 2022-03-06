import { BrowserRouter as Router , Redirect , Switch , Route } from 'react-router-dom'
import Filters from '../Filters'
import cls from './Game.module.css'
import GameHeader from './GameHeader'
import HeroInfo from './HeroInfo'
import HeroInvent from './HeroInvent'
import HeroList from './HeroList'

const Game = () => {
    return (
        <Router>
            <section className={cls.game}>
                <div className={cls.game_content}>
                    <GameHeader/>
                    <div className={cls.game_content_body}>
                        <Switch>
                            <Route exact path='/game/heroes' component={HeroList}/>
                            <Route exact path='/game/info' component={HeroInfo}/>
                            <Route exact path='/game/inventory' component={HeroInvent}/>
                            <Redirect to='/game/heroes'/>
                        </Switch>
                    </div>
                </div>
                <Filters/>
            </section>
        </Router>
    )
}

export default Game