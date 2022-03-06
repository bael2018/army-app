import { Route, Switch } from 'react-router'
import Finance from '../../components/Finance'
import Game from '../../components/Game'
import Help from '../../components/Help'
import cls from './Content.module.css'
import Setup from '../../components/Setup'
import Platform from '../../components/Help/Platform'
import Refferal from '../../components/Referral'
import Rules from '../../components/Rules'
import FAQ from '../../components/Help/FAQ'
import Play from '../../components/Help/Play'
import Codes from '../../components/UI/Codes'
import Letters from '../../components/letters'

const Content = () => {
    return (
        <section className={cls.content}>

            {/* Letters
            {/* <Letters/> */}
            {/* Letters */} 
            
            <Rules/>
            <Codes/>
            <Switch>
                <Route exact path='/game1' component={Game}/>
                <Route exact path='/' component={Setup}/>
                <Route exact path='/finance' component={Finance}/>
                <Route exact path='/help' component={Help}/>
                <Route exact path='/help/settings' component={Platform}/>
                <Route exact path='/help/faq' component={FAQ}/>
                <Route exact path='/help/play' component={Play}/>
                <Route exact path='/referral' component={Refferal}/>
            </Switch>
        </section>
    )
}

export default Content