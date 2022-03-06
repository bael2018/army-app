import Empty from '../../Empty'
import Confirm from '../../UI/Confirm'
import MoreBtn from '../../UI/MoreBtn'
import PickBtn from '../../UI/PickBtn'
import cls from './HeroInvent.module.css'
import {useState} from 'react'
import Alert from '../../UI/Alert'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { codesAction } from '../../../redux/action'

const listData = [
    {
        icon: '/img/icon.png',
        character: '/img/buble-min.png',
        itemOne: '/img/talis1.png',
        itemTwo: '/img/talis2.png',
        itemThree: '/img/talis3.png',
        itemFour: '/img/talis4.png',
        itemFive: '/img/talis5.png',
        itemSix: '/img/talis6.png',
        heart: '/img/heart.png',
        storm: '/img/storm.png',
        star: '/img/star.png',
        fire: '/img/fire.png'
    },
    {
        icon: '/img/icon.png',
        character: '/img/buble-min.png',
        itemOne: '/img/talis1.png',
        itemTwo: '/img/talis2.png',
        itemThree: '/img/talis3.png',
        itemFour: '/img/talis4.png',
        itemFive: '/img/talis5.png',
        itemSix: '/img/talis6.png',
        heart: '/img/heart.png',
        storm: '/img/storm.png',
        star: '/img/star.png',
        fire: '/img/fire.png'
    },
    {
        icon: '/img/icon.png',
        character: '/img/buble-min.png',
        itemOne: '/img/talis1.png',
        itemTwo: '/img/talis2.png',
        itemThree: '/img/talis3.png',
        itemFour: '/img/talis4.png',
        itemFive: '/img/talis5.png',
        itemSix: '/img/talis6.png',
        heart: '/img/heart.png',
        storm: '/img/storm.png',
        star: '/img/star.png',
        fire: '/img/fire.png'
    },
]

const HeroInvent = () => {
    const theme = useSelector(state => state.backGround.theme)
    const route = [
        {
            title: 'Download extension',
            img: `${theme === 'dark' ? '/img/ext.png' : '/img/extWhite.png'}`
        },
        {
            title: 'Sign in on Axie marketplace',
            img: '/img/sig.png'
        },
        {
            title: 'Show QR code',
            img: '/img/qr.png',
            state: 'qr'
        }
    ]
    
    const [confirm , setConfirm] = useState(false)
    const [alert , setAlert] = useState(false)
    const dispatch = useDispatch()

    const [play , setPlay] = useState(0)

    const handleConfirm = () => {
        setConfirm(true)
    }

    const { title , img , state} = route[play]

    const handleCode = e => {
        if(e === 'qr'){
            dispatch(codesAction(true))
        }
    }


    return (
        <section className={cls.hero_invent}>
            <Alert mood='success' state={alert} value='Hero returned'/>
            <Confirm alert={setAlert} close={setConfirm} state={confirm}/>
            {
                listData.length === 0 ? <Empty value='Your inventory is empty'/> : (
                    <>
                        <div className={theme === 'dark' ? cls.play : `${cls.play} ${cls.play_active}`}>
                            <div className={cls.play_body}>
                                <h3 className={theme === 'dark' ? cls.play_body_title : `${cls.play_body_title} 
                                ${cls.play_body_title_active}`}>Let's Play</h3>
                                <div className={cls.play_body_wrapper}>
                                    <span
                                        style={{color: theme === 'dark' ? 'white' : 'black'}}
                                        className={
                                            play === 0 ? cls.active_span : null
                                        }
                                        onClick={() => setPlay(0)}
                                    >1</span>
                                    <div></div>
                                    <span
                                        style={{color: theme === 'dark' ? 'white' : 'black'}}
                                        className={
                                            play === 1 ? cls.active_span : null
                                        }
                                        onClick={() => setPlay(1)}
                                    >2</span>
                                    <div></div>
                                    <span
                                        style={{color: theme === 'dark' ? 'white' : 'black'}}
                                        className={
                                            play === 2 ? cls.active_span : null
                                        }
                                        onClick={() => setPlay(2)}
                                    >3</span>
                                </div>
                                <div 
                                    onClick={() => handleCode(state)}
                                    className={theme === 'dark' ? cls.play_body_button : `${cls.play_body_button} ${
                                        cls.play_body_button_light
                                    }`}
                                >
                                    <button style={{
                                        color: theme === 'dark' ? "white" : 'black'
                                    }}>
                                        <img src={img} alt="ext"/>
                                        {title}
                                    </button>
                                </div>
                            </div>  
                            <div className={theme === 'dark' ? cls.play_footer : `${cls.play_footer} 
                            ${cls.play_footer_active}`}>
                                <span>
                                    <img src="/img/diff.png" alt="difficulties" />
                                    Having difficulties?
                                </span>
                                <div>
                                    <Link to='/help/play'>How to play</Link>
                                    <Link to='/help/settings'>Rules</Link>
                                </div>
                            </div>  
                        </div>
                        {
                            listData.map(({
                                icon , character , itemOne , itemTwo , itemThree , itemFour, itemFive , itemSix ,
                                fire , storm, star , heart
                            } , index) => {
                                return <div 
                                    key={index} 
                                    className={cls.hero_list_body_inner}
                                    style={{
                                        background: theme === 'dark' ? '#032030' : 'white',
                                        border: theme === 'dark' ? 'none' : '1px solid #C8C8C8'
                                    }}
                                >
                                    <div className={cls.hero_list_body_inner_header}>
                                        <span>
                                            <img src={icon} alt="icon" />
                                            #2435862
                                        </span>
                                        <img src={character}alt="buble" />
                                    </div>
                                    <div className={cls.hero_list_body_inner_wrapper}>
                                        <div className={cls.hero_list_body_inner_wrapper_upper}>
                                            <img src={itemOne} alt="talis" />
                                            <img src={itemTwo} alt="talis" />
                                            <img src={itemThree} alt="talis" />
                                            <img src={itemFour} alt="talis" />
                                            <img src={itemFive} alt="talis" />
                                            <img src={itemSix} alt="talis" />
                                        </div>
                                        <div className={
                                                theme === 'dark' ? cls.hero_list_body_inner_wrapper_lower : 
                                                `${cls.hero_list_body_inner_wrapper_lower} ${cls.hero_list_body_inner_wrapper_lower_alt}`
                                            }>
                                            <div>
                                                <span>
                                                    <img src={heart} alt="heart" />
                                                </span>
                                                54
                                            </div>
                                            <div>
                                                <span>
                                                    <img src={storm} alt="heart" />
                                                </span>
                                                37
                                            </div>
                                            <div>
                                                <span>
                                                    <img src={star} alt="heart" />
                                                </span>
                                                31
                                            </div>
                                            <div>
                                                <span>
                                                    <img src={fire} alt="heart" />
                                                </span>
                                                42
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cls.hero_list_body_inner_wrapper_footer}>
                                        <MoreBtn/>
                                        <span onClick={handleConfirm}>
                                            <PickBtn state={false} value='Return Hero'/>
                                        </span>
                                    </div>  
                                </div>
                            })
                        }
                    </>
                )
            }
        </section>  
    )
}

export default HeroInvent