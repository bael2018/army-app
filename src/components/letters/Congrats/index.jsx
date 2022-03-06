import cls from './Congrats.module.css'

const Congrats = () => {

    return (
        <section className={cls.parent}>   
            <img src="/img/present.png" alt="present    " />
            <h4>Congratulations!</h4>
            <p>Your email has been verified. Thank you for choosing us.</p>
        </section>
    )
}

export default Congrats