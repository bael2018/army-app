import cls from './Payout.module.css'
import { FiChevronLeft , FiChevronRight } from 'react-icons/fi'
import Empty from '../../Empty'
import Alert from '../../UI/Alert'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const initialState = [
    {
        date: '30 December 2021',
        title: '-0.035 ETH',
        subTitle: '≈$4241.3',
        content: '0xaA84...dB9C'
    },
    {
        date: '30 December 2021',
        title: '-0.035 ETH',
        subTitle: '≈$4241.3',
        content: '0xaA84...dB9C'
    },
    {
        date: '30 December 2021',
        title: '-0.035 ETH',
        subTitle: '≈$4241.3',
        content: '0xaA84...dB9C'
    },
    {
        date: '30 December 2021',
        title: '-0.035 ETH',
        subTitle: '≈$4241.3',
        content: '0xaA84...dB9C'
    },
    {
        date: '30 December 2021',
        title: '-0.035 ETH',
        subTitle: '≈$4241.3',
        content: '0xaA84...dB9C'
    },
    {
        date: '30 December 2021',
        title: '-0.035 ETH',
        subTitle: '≈$4241.3',
        content: '0xaA84...dB9C'
    }
]

const Payout = () => {
    const theme = useSelector(state => state.backGround.theme)
    const [alert , setAlert] = useState(false)

    const handleLink = () => {
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        } , 3000)
    }

    return (
        <section 
            className={cls.payout}
            style={{
                background:
                theme === 'dark' ? '#032030' : 'none',
                border: 
                theme === 'dark' ? 'none' : '1px solid #C8C8C8'
            }}
        >
            <Alert mood='success' value='Link copied' state={alert}/>
            <h5 
                className={cls.payout_header}
                style={{
                    color: theme === 'dark' ? 'white' : '#353535'
                }}
            >Payout history</h5>
            {
                initialState.length === 0 ? (
                    <div className={cls.payout_empty}>
                        <Empty value='Your finance are empty'/>
                    </div>
                ) : (
                    <>
                        <div className={cls.payout_body}>
                            {
                                initialState.map(({date , title , subTitle , content} , index) => {
                                    return <div key={index} className={
                                        theme === 'dark' ? cls.payout_body_child : `${cls.payout_body_child} ${cls.payout_body_child_alt}` 
                                    }>
                                    <div className={cls.payout_body_child_header}>
                                        <div 
                                            className={cls.payout_body_child_header_date}
                                            style={{
                                                color: theme === 'dark' ? 'white' : '#353535'
                                            }}
                                        >
                                            <span>
                                                <img src={'/img/elem.png'} alt="elem" />
                                            </span>
                                            {date}
                                        </div>
                                        
                                        <div className={theme === 'dark' ? cls.payout_body_child_inside : `${cls.payout_body_child_inside}
                                        ${cls.payout_body_child_inside_light}`}>
                                            To:
                    
                                            <span 
                                                onClick={handleLink}
                                                className={
                                                    theme === 'dark' ? cls.payout_body_child_inside_inner :
                                                    `${cls.payout_body_child_inside_inner} ${cls.payout_body_child_inside_inner_alt}`
                                                }
                                            >
                                                <p
                                                    style={{
                                                        color: theme === 'dark' ? 'white' : 'white'
                                                    }}    
                                                >
                                                    Click to copy address
                                                </p>
                                                {content}
                                            </span>
                                            <span
                                                  className={
                                                    theme === 'dark' ? cls.payout_body_child_inside_span :
                                                    `${cls.payout_body_child_inside_span} ${cls.payout_body_child_inside_span_alt}`
                                                }
                                            >
                                                <p
                                                    style={{
                                                        color: theme === 'dark' ? 'white' : 'white'
                                                    }}    
                                                >
                                                    View on Etherscan
                                                </p>
                                                <img src={theme === 'dark' ? '/img/fin.png' : '/img/darkFinance.png'} alt="fin" />
                                            </span>
                                        </div>  
                
                                        <div className={cls.payout_body_child_header_price}>
                                            <h4
                                                style={{
                                                    color: theme === 'dark' ? 'white' : 'black'
                                                }}
                                            >{title}</h4>
                                            <p>{subTitle}</p>
                                        </div>
                                    </div>
                                </div>  
                                })
                            }
                        </div>

                        <div className={cls.payout_footer}>
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
        </section>      
    )
}

export default Payout