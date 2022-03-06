import Congrats from './Congrats'
import Hello from './Hello'
import KeyGrats from './KeyGrats'
import KeyHello from './KeyHello'
import cls from './Letters.module.css'

const Letters = () => {

    return (
        <section className={cls.parent}>   
            <div className={cls.parent_container}>
                <div className={cls.parent_container_header}>
                    <img src="/img/darkLogo.png" alt="logo" />
                </div>

                {/* Letters inside components */}

                {/* <Hello/> */}
                {/* <Congrats/> */}
                {/* <KeyHello/> */}
                {/* <KeyGrats/> */}

                <div className={cls.parent_container_footer}>
                    <h3>Any questions?</h3>
                    <div className={cls.parent_container_footer_inner}>
                        <img src="/img/lightEm.png" alt="email" />
                        <a href="mailTo:support.army@gmail.com">support.army@gmail.com</a>
                        <p>Contact us via email</p>
                    </div>
                    <div className={cls.parent_container_footer_inner}>
                        <img src="/img/lightTel.png" alt="tel" />
                        <a href="mailTo:@1mln.army">@1mln.army</a>
                        <p>We offer 24/7 support</p>
                    </div>
                </div>
            </div>  
        </section>
    )
}

export default Letters