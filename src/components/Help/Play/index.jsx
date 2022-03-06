import Contact from "../../Contact"
import cls from './Play.module.css'
import How from './How'

const Play = () => {
    return (
        <section className={cls.play}>
            <How/>
            <Contact/>
        </section>
    )
}

export default Play