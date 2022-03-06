import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import cls from './Help.module.css'

const initialState = [
    {
        path: '/help/settings',
        image: '/img/helpIcon.png',
        title: 'Rules'
    },
    {
        path: '/help/faq',
        image: '/img/faq.png',
        title: 'FAQ'
    },
    {
        path: '/help/play',
        image: '/img/gameIcon.png',
        title: 'How to play'
    },
]

const Help = () => {
    const theme = useSelector(state => state.backGround.theme)

    return (
        <section className={cls.help}>
            <div className={theme === 'dark' ? cls.help_header : `${cls.help_header} ${cls.help_header_active}`}>
                <h3>How can we help you?</h3>
            </div>

            <div 
                className={cls.help_body}
                style={{overflowY: initialState.length > 6 ? 'scroll' : 'none'}}
            >
                {
                    initialState.map(({path , image , title} , id) => {
                        return <Link key={id} className={theme === 'dark' ? cls.help_body_link : 
                        `${cls.help_body_link} ${cls.help_body_link_active}`} exact to={path}>
                        <img src={image} alt={image} />
                        <p>{title}</p>
                    </Link>
                    })
                }

                <div className={theme === 'dark' ? cls.help_body_lower : `${cls.help_body_lower} ${cls.help_body_lower_active}`}>
                    <div className={cls.help_body_lower_wrapper}>
                        <div className={theme === 'dark' ? cls.help_body_lower_title : `${cls.help_body_lower_title} ${cls.help_body_lower_title_light}`}>
                            Any questions?
                        </div>
                        <div className={theme === 'dark' ? cls.help_body_lower_content : `${cls.help_body_lower_content}
                        ${cls.help_body_lower_content_active}`}>
                            <div className={cls.help_body_lower_content_child}>
                                <img src="/img/tel.png" alt="telegram" />
                                <span>
                                    <a href="https://t.me/1mln.army">@1mln.army</a>
                                    <p>We offer 24/7 support</p>
                                </span>
                            </div>

                            <div className={cls.help_body_lower_content_child}>
                                <img src="/img/email.png" alt="telegram" />
                                <span>
                                    <a href="mailto:support.army@gmail.com">support.army@gmail.com</a>
                                    <p>Contact us via email</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>      
        </section>
    )
}

export default Help