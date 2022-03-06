import cls from './HeroList.module.css'
import MoreBtn from '../../UI/MoreBtn'
import PickBtn from '../../UI/PickBtn'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Empty from '../../Empty'
import { useDispatch, useSelector } from 'react-redux'
import { filterAction, rulesAction } from '../../../redux/action'

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
    }
]

const HeroList = () => {
    const theme = useSelector(state => state.backGround.theme)
    const dispatch = useDispatch()

    return (
        <section className={
            theme === 'dark' ? cls.hero_list : `${cls.hero_list} ${cls.hero_list_alt}`
        }>
            <div 
                className={theme === 'dark' ? cls.filters : `${cls.filters} ${cls.filters_light}`}
                onClick={() => dispatch(filterAction(true))}
            >
                <img src="/img/filter.png" alt="filter" />
                Filters
            </div>
            {
                listData.length === 0 ? <Empty value='No Axies found for your request'/> : (
                    <div className={cls.hero_list_body}>
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
                                <span onClick={() => dispatch(rulesAction(true))}>
                                    <PickBtn state={true} value='Pick the Axie'/>
                                </span>
                            </div>  
                        </div>
                        })
                    }
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
                </div>
                )
            }
        </section>
    )
}

export default HeroList