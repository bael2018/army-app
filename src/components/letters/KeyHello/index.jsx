import cls from './KeyHello.module.css'

const KeyHello = () => {

    return (
        <section className={cls.parent}>   
            <img src="/img/brown.png" alt="brown" />
            <h4>Hello!</h4>
            <p>We have received a request to reset your password. Click on the button below to set a new password:</p>

            <button>
                <span>
                    CHANGE PASSWORD
                </span>
            </button>

            <p>or follow this link:</p>
            <a href="#">1mln.army.com/feqrPOIHkjhfresnkjewrlknvej</a>
        </section>
    )
}

export default KeyHello