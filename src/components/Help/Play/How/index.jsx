import { FiChevronLeft } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import cls from './How.module.css'

const About = () => {
    const theme = useSelector(state => state.backGround.theme)

    return (
        <>
            <div className={theme === 'dark' ? cls.mobile_title : `${cls.mobile_title} ${cls.mobile_title_light}`}>
                <span>?</span>
                <h3>How to play</h3>
            </div>
            <section className={theme === 'dark' ? cls.about : `${cls.about} ${cls.about_light}`}>
                <Link to='/help' className={cls.back_btn}>
                    <FiChevronLeft/>
                    Back
                </Link>

                <div className={theme === 'dark' ? cls.about_container : `${cls.about_container} ${cls.about_container_light}`}>
                    <div className={cls.about_container_header}>
                        <h3>How to play</h3>
                    </div>

                    <div className={cls.about_container_body}>
                        <p>
                            To register, click the "register" button on the main page, enter your email address and password
                        </p>
                        <p>
                            Check your mail - a letter with a password will be sent there. If there is no email, check your Spam folder, it might be there. If suddenly there is no letter - write to the support service, it works around the clock.
                        </p>
                        <p style={{marginBottom: '0px'}}>
                            Have you opened the letter? Click the "Confirm" button and go to your personal account. 🙂 <br/>
                            Then you can get acquainted with your personal account
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About