import { useSelector } from 'react-redux'
import cls from './Contact.module.css'

const Contact = () => {
    const theme = useSelector(state => state.backGround.theme)

    return (
        <section 
            className={cls.contact}
            style={{
                background: theme === 'dark' ? '#032030' : 'none',
                border: theme === 'dark' ? 'none' : '1px solid #C8C8C8'
            }}
        >
            <h4 
                className={cls.contact_header}
                style={{
                    color: theme === 'dark' ? 'white' : '#353535'
                }}
            >
                Any question?
            </h4>

            <div className={cls.contact_body}>
                <div className={cls.contact_body_wrapper}>
                    <div className={cls.contact_body_wrapper_icon}>
                        <img src='/img/tel.png' alt="telegram" />
                    </div>  
                    <div className={cls.contact_body_wrapper_content}>
                        <a 
                            style={{
                                color: theme === 'dark' ? 'white' : '#353535'
                            }}
                            href="https://t.me/1mln.army"
                        >@1mln.army</a>
                        <p 
                            style={{
                                color: theme === 'dark' ? '#f6fbfd59' : '#0000008e'
                            }}
                        >We offer 24/7 support</p>
                    </div>
                </div>

                <div className={cls.contact_body_wrapper}>
                    <div className={cls.contact_body_wrapper_icon}>
                        <img src='/img/email.png' alt="telegram" />
                    </div>  
                    <div className={cls.contact_body_wrapper_content}>
                        <a 
                            style={{
                                color: theme === 'dark' ? 'white' : '#353535'
                            }}
                            href="mailto:support.army@gmail.com"
                        >support.army@gmail.com</a>
                        <p 
                            style={{
                                color: theme === 'dark' ? '#f6fbfd59' : '#0000008e'
                            }}
                        >Contact us via email</p>
                    </div>
                </div>
            </div>  
        </section>
    )
}

export default Contact