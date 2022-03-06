import Contact from '../Contact'
import cls from './Finance.module.css'
import Payout from './Payout'
import Title from '../../components/UI/Title'

const Finance = () => {
    return (
        <section className={cls.finance}>
            <Title value='Finance'/>
            <Payout/>
            <Contact/>
        </section>
    )
}

export default Finance