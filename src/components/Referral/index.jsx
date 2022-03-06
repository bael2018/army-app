import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Alert from '../UI/Alert'
import cls from './Referral.module.css'
import Empty from '../Empty'
import { useSelector } from 'react-redux'

const initialEmail = [
    {
        title: 'User #1234'
    },
    {
        title: 'User #1234'
    },
    {
        title: 'User #1234'
    },
    {
        title: 'User #1234'
    },
    {
        title: 'User #1234'
    },
    {
        title: 'User #1234'
    },
    {
        title: 'User #1234'
    },
    {
        title: 'User #1234'
    },
    {
        title: 'User #1234'
    },
]

const initialEarn = [
    {
        title: '0.0000432 ETH'
    },
    {
        title: '0.0000432 ETH'
    },
    {
        title: '0.0000432 ETH'
    },
    {
        title: '0.0000432 ETH'
    },
    {
        title: '0.0000432 ETH'
    },
    {
        title: '0.0000432 ETH'
    },
    {
        title: '0.0000432 ETH'
    },{
        title: '0.0000432 ETH'
    },
    {
        title: '0.0000432 ETH'
    },
]

const Refferal = () => {
    const theme = useSelector(state => state.backGround.theme)
    const [alert , setAlert] = useState(false)

    const handleLink = () => {
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        } , 3000)
    }

    return (
        <section className={cls.referral}>
            <Alert mood='success' value='Link copied' state={alert}/>
            <div className={theme === 'dark' ? cls.referral_header : `${cls.referral_header} ${cls.referral_header_active}`}>
                <h3>Referral system</h3>
                <p>Each registered user can use their referral link to invite referrals and receive a percentage of their income.</p>
            </div>
            <div className={cls.referral_body}>
                <div className={cls.referral_body_child}>
                    <div className={theme === 'dark' ? cls.referral_body_child_upper : `${cls.referral_body_child_upper}
                    ${cls.referral_body_child_upper_light}`}>
                        <h3 className={cls.referral_body_child_upper_title}>Your referral link:</h3>

                        <span 
                            className={theme === 'dark' ? cls.referral_body_child_upper_inner : `${cls.referral_body_child_upper_inner}
                            ${cls.referral_body_child_upper_inner_light}`}
                            onClick={handleLink}
                        >
                            https://1mln.army/ref102
                        </span>

                        <div className={cls.referral_body_child_upper_wrapper}>
                            <div className={cls.referral_body_child_upper_wrapper_item}>
                                <span>
                                    <p>Income from referrals:</p>
                                    <h3 style={{
                                        color: theme === 'dark' ? 'white' : 'black'
                                    }}>0.0004 ETH</h3>
                                </span>
                            </div>

                            <div className={cls.referral_body_child_upper_wrapper_item}>
                                <span>
                                    <p>Total referrals:</p>
                                    <h5 style={{
                                        color: theme === 'dark' ? 'white' : 'black'
                                    }}>10</h5>
                                </span>
                                <span>
                                    <p>Profit percentage:</p>
                                    <h5 style={{
                                        color: theme === 'dark' ? 'white' : 'black'
                                    }}>10%</h5>
                                </span>
                            </div>
                        </div>  
                    </div>

                    <div 
                        className={
                            `${cls.referral_body_child_container} ${cls.referral_body_child_container_show}`
                        }
                        style={{
                            background: theme === 'dark' ? '#032030' : 'white',
                            border: theme === 'dark' ? 'none' : '1px solid #C8C8C8'
                        }}
                    >
                        {
                            initialEmail.length === 0 && initialEarn.length === 0 ? 
                            <Empty value='You have no referrance'/> : (
                                <>
                                    <h3 
                                        className={cls.referral_body_child_upper_title}
                                        style={{
                                            color: theme === 'dark' ? 'white' : 'black'
                                        }}
                                    >Your referral link:</h3>
                                    <div className={cls.referral_body_child_container_wrapper}>
                                    <div className={theme === 'dark' ? cls.referral_body_child_container_wrapper_inner : 
                                        `${cls.referral_body_child_container_wrapper_inner} ${cls.referral_body_child_container_wrapper_inner_light}`
                                        }>
                                            <h4>Referral mail</h4>
                                            {
                                                initialEmail.map(({title} , id) => {
                                                    return <p key={id}>{title}</p>
                                                })
                                            }
                                        </div>

                                        <div className={theme === 'dark' ? cls.referral_body_child_container_wrapper_inner : 
                                        `${cls.referral_body_child_container_wrapper_inner} ${cls.referral_body_child_container_wrapper_inner_light}`
                                        }>
                                            <h4>Earned</h4>
                                            {
                                                initialEarn.map(({title} , index) => {
                                                    return <p key={index}>{title}</p>
                                                })
                                            }
                                        </div>
                                    </div>

                                    <div className={cls.hero_list_footer}>
                                        <button 
                                                className={
                                                    theme === 'dark' ? cls.activeBtn : `${cls.activeBtn} ${cls.activeBtn_alt}`
                                                }
                                            >
                                                <FiChevronLeft/>
                                        </button>
                                        <div 
                                            style={{
                                            color: theme === 'dark' ? 'white'  :'#353535'
                                        }}>
                                            Page
                                            <span
                                                style={{
                                                    color: theme === 'dark' ? 'white'  :'#353535'
                                                }}
                                            >
                                                <input 
                                                    type="text" placeholder='1' 
                                                    style={{
                                                        color: theme === 'dark' ? '#e0e0e0' : '#3a3a3a'
                                                    }}
                                                />
                                            </span>
                                            of 2
                                        </div>
                                        <button
                                            className={theme === 'dark' ? null : cls.lightBtn}
                                        >
                                            <FiChevronRight/>
                                        </button>
                                    </div>
                                </>
                            )
                        }
                    </div>

                    <div className={theme === 'dark' ? cls.referral_body_child_lower : `${cls.referral_body_child_lower}
                    ${cls.referral_body_child_lower_active}`}>
                        <h4 className={cls.contact_header}
                         style={{
                            color: theme === 'dark' ? 'white' : '#353535'
                        }}>
                            Any question?
                        </h4>

                        <div className={cls.contact_body}>
                            <div className={cls.contact_body_wrapper}>
                                <div className={cls.contact_body_wrapper_icon}>
                                    <img src='/img/tel.png'  alt="telegram" />
                                </div>  
                                <div className={cls.contact_body_wrapper_content}>
                                    <a 
                                        href="https://t.me/1mln.army"
                                        style={{
                                            color: theme === 'dark' ? 'white' : '#353535'
                                        }}
                                    >@1mln.army</a>
                                    <p  style={{
                                        color: theme === 'dark' ? '#f6fbfd59' : '#0000008e'
                                    }}>We offer 24/7 support</p>
                                </div>
                            </div>

                            <div className={cls.contact_body_wrapper}>
                                <div className={cls.contact_body_wrapper_icon}>
                                    <img src='/img/email.png' alt="telegram" />
                                </div>  
                                <div className={cls.contact_body_wrapper_content}>
                                    <a 
                                        href="mailto:support.army@gmail.com"
                                        style={{
                                            color: theme === 'dark' ? 'white' : '#353535'
                                        }}
                                    >support.army@gmail.com</a>
                                    <p  style={{
                                        color: theme === 'dark' ? '#f6fbfd59' : '#0000008e'
                                    }}>Contact us via email</p>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>

                <div className={cls.referral_body_child}>
                    <div 
                        className={
                            `${cls.referral_body_child_container} ${cls.referral_body_child_container_close}`
                        }
                        style={{
                            background: theme === 'dark' ? '#032030' : 'white',
                            border: theme === 'dark' ? 'none' : '1px solid #C8C8C8'
                        }}
                    >
                        {
                            initialEmail.length === 0 && initialEarn.length === 0 ? 
                            <Empty value='You have no referrance'/> : (
                                <>
                                    <h3 
                                        className={cls.referral_body_child_upper_title}
                                        style={{
                                            color: theme === 'dark' ? 'white' : 'black'
                                        }}
                                    >
                                        Your referral link:</h3>
                                    <div className={cls.referral_body_child_container_wrapper}>
                                        <div className={theme === 'dark' ? cls.referral_body_child_container_wrapper_inner : 
                                        `${cls.referral_body_child_container_wrapper_inner} ${cls.referral_body_child_container_wrapper_inner_light}`
                                        }>
                                            <h4>Referral mail</h4>
                                            {
                                                initialEmail.map(({title} , id) => {
                                                    return <p key={id}>{title}</p>
                                                })
                                            }
                                        </div>

                                        <div className={theme === 'dark' ? cls.referral_body_child_container_wrapper_inner : 
                                        `${cls.referral_body_child_container_wrapper_inner} ${cls.referral_body_child_container_wrapper_inner_light}`
                                        }>
                                            <h4>Earned</h4>
                                            {
                                                initialEarn.map(({title} , index) => {
                                                    return <p key={index}>{title}</p>
                                                })
                                            }
                                        </div>
                                    </div>

                                    <div className={cls.hero_list_footer}>
                                        <button 
                                                className={
                                                    theme === 'dark' ? cls.activeBtn : `${cls.activeBtn} ${cls.activeBtn_alt}`
                                                }
                                            >
                                                <FiChevronLeft/>
                                        </button>
                                        <div 
                                            style={{
                                            color: theme === 'dark' ? 'white'  :'#353535'
                                        }}>
                                            Page
                                            <span
                                                style={{
                                                    color: theme === 'dark' ? 'white'  :'#353535'
                                                }}
                                            >
                                                <input 
                                                    type="text" placeholder='1' 
                                                    style={{
                                                        color: theme === 'dark' ? '#e0e0e0' : '#3a3a3a'
                                                    }}
                                                />
                                            </span>
                                            of 2
                                        </div>
                                        <button
                                            className={theme === 'dark' ? null : cls.lightBtn}
                                        >
                                            <FiChevronRight/>
                                        </button>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>      
            </div>
        </section>
    )
}

export default Refferal