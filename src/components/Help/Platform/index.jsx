import Contact from "../../Contact"
import About from "./About"
import cls from './Platform.module.css'

const Platform = () => {
    return (
        <section className={cls.platform}>
            <About/>
            <Contact/>
        </section>
    )
}

export default Platform