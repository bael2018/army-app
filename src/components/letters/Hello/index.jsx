import cls from './Hello.module.css'

const Hello = () => {

    return (
        <section className={cls.parent}>   
            <img src="/img/Emoji.png" alt="emoji" />
            <h4>Hello!</h4>
            <p>Click on the button to confirm your email:</p>

            <button>
                <span>
                    CONFIRM EMAIL
                </span>
            </button>

            <p>or follow this link:</p>
            <a href="#">1mln.army.com/feqrPOIHkjhfresnkjewrlknvej</a>
        </section>
    )
}

export default Hello