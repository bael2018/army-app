import cls from './KeyGrats.module.css'

const KeyGrats = () => {

    return (
        <section className={cls.parent}>   
            <img src="/img/brown.png" alt="brown" />
            <h4>Congratulations!</h4>
            <p>You have successfully changed your password</p>
        </section>
    )
}

export default KeyGrats