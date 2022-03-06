import { Link } from 'react-router-dom'
import cls from './HeroInfo.module.css'
import { FiChevronLeft } from 'react-icons/fi'
import PickBtn from '../../UI/PickBtn'
import { useSelector } from 'react-redux'

const HeroInfo = () => {
    const theme = useSelector(state => state.backGround.theme)

    return (
        <section className={cls.hero_info}>
            <div className={cls.hero_info_header}>
                <div className={
                    theme === 'dark' ? cls.hero_info_header_button : `${cls.hero_info_header_button}
                     ${cls.hero_info_header_button_active}`
                }>
                    <Link to='/game/heroes'>
                        <FiChevronLeft/>
                        Back to the all heroes
                    </Link>
                </div>
            </div>

             <div className={cls.hero_info_header_wrapper}>
                <span className={cls.hero_info_header_wrapper_inner}>
                    #2435862
                </span>
                <img src="/img/buble-min.png" alt="buble" />
                <PickBtn state={true} value='Pick the Axie'/>
            </div>

            <div className={
                theme === 'dark' ? cls.hero_info_body : `${cls.hero_info_body} ${cls.hero_info_body_active}`
            }>
                <div className={cls.hero_info_body_container}>
                    <div className={
                        theme === 'dark' ? cls.hero_info_body_about : `${cls.hero_info_body_about} 
                        ${cls.hero_info_body_about_active}`
                    }>
                        <h3>About</h3>
                        <div className={cls.hero_info_body_about_wrapper}>
                            <div className={cls.hero_info_body_about_wrapper_child}>
                                <p>CLASS</p>
                                <span style={{
                                    color: theme === 'dark' ? 'white' : '#353535'
                                }}>
                                    <img src="/img/leaf.png" alt="leaf" />
                                    Plant
                                </span>
                            </div>
                            <div className={cls.hero_info_body_about_wrapper_child}>
                                <p>BREED COUNT</p>
                                <span style={{
                                    color: theme === 'dark' ? 'white' : '#353535'
                                }}>
                                    3/7
                                </span>
                            </div>
                        </div>  
                    </div>

                    <div className={theme === 'dark' ? cls.hero_info_body_stats : `${cls.hero_info_body_stats} 
                    ${cls.hero_info_body_stats_active}`}>
                        <h3>Stats</h3>
                        <div className={cls.hero_info_body_stats_wrapper}>
                            <div className={cls.hero_info_body_stats_wrapper_child}>
                                <p>HEALTH</p>
                                <div className={ theme === 'dark' ? '' : cls.light_div} >
                                    <span>
                                        <img src="/img/heart.png" alt="heart" />
                                    </span>
                                    54
                                </div>
                            </div>
                            <div className={cls.hero_info_body_stats_wrapper_child}>
                                <p>SPEED</p>
                                <div className={ theme === 'dark' ? '' : cls.light_div}>
                                    <span>
                                        <img src="/img/storm.png" alt="storm" />
                                    </span>
                                    37
                                </div>
                            </div>
                            <div className={cls.hero_info_body_stats_wrapper_child}>
                                <p>SKILL</p>
                                <div className={ theme === 'dark' ? '' : cls.light_div}>
                                    <span>
                                        <img src="/img/star.png" alt="star" />
                                    </span>
                                    31
                                </div>
                            </div>
                            <div className={cls.hero_info_body_stats_wrapper_child}>
                                <p>MORALE</p>
                                <div className={ theme === 'dark' ? '' : cls.light_div}>
                                    <span>
                                        <img src="/img/fire.png" alt="fire" />
                                    </span>
                                    42
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={theme === 'dark' ? cls.hero_info_body_parts : `${cls.hero_info_body_parts} 
                    ${cls.hero_info_body_parts_active}`}>
                    <h3>Body parts</h3>

                    <div className={cls.hero_info_body_parts_wrapper}>
                        <div className={ theme === 'dark' ? cls.hero_info_body_parts_wrapper_child : `${cls.hero_info_body_parts_wrapper_child} 
                        ${cls.hero_info_body_parts_wrapper_child_light}`}>
                            <img src="/img/talis1.png" alt="talis" />
                            Larva
                        </div>

                        <div className={ theme === 'dark' ? cls.hero_info_body_parts_wrapper_child : `${cls.hero_info_body_parts_wrapper_child} 
                        ${cls.hero_info_body_parts_wrapper_child_light}`}>
                            <img src="/img/talis2.png" alt="talis" />
                            Chubby
                        </div>

                        <div className={ theme === 'dark' ? cls.hero_info_body_parts_wrapper_child : `${cls.hero_info_body_parts_wrapper_child} 
                        ${cls.hero_info_body_parts_wrapper_child_light}`}>
                            <img src="/img/talis4.png" alt="talis" />
                            <span>
                                Tiny Turtle
                                <p>Level 1</p>
                            </span>
                        </div>

                        <div className={ theme === 'dark' ? cls.hero_info_body_parts_wrapper_child : `${cls.hero_info_body_parts_wrapper_child} 
                        ${cls.hero_info_body_parts_wrapper_child_light}`}>
                            <img src="/img/talis5.png" alt="talis" />
                            <span>
                                Snail Shell
                                <p>Level 1</p>
                            </span>
                        </div>

                        <div className={ theme === 'dark' ? cls.hero_info_body_parts_wrapper_child : `${cls.hero_info_body_parts_wrapper_child} 
                        ${cls.hero_info_body_parts_wrapper_child_light}`}>
                            <img src="/img/talis3.png" alt="talis" />
                            <span>
                                Thorny caterpillar
                                <p>Level 1</p>
                            </span>
                        </div>

                        <div className={ theme === 'dark' ? cls.hero_info_body_parts_wrapper_child : `${cls.hero_info_body_parts_wrapper_child} 
                        ${cls.hero_info_body_parts_wrapper_child_light}`}>
                            <img src="/img/talis6.png" alt="talis" />
                            <span>
                                Babylonia
                                <p>Level 1</p>
                            </span>
                        </div>
                    </div>
                </div>

                <div className={cls.hero_info_body_ability}>
                    <div className={theme === 'dark' ? cls.hero_info_body_ability_title : `${cls.hero_info_body_ability_title} 
                    ${cls.hero_info_body_ability_title_active}`}>
                        <h3>Abilities</h3>
                    </div>
                    <div className={cls.hero_info_body_ability_wrapper}>
                        <div className={cls.hero_info_body_ability_wrapper_title}>
                            <img src="/img/talis3.png" alt="talis3" />
                            <span style={{
                                color: theme === 'dark' ? 'white' : '#353535'
                            }}>
                                Thorny caterpillar
                            </span>
                        </div>

                        <div className={cls.hero_info_body_ability_wrapper_picture}>
                            <img src="/img/firstImage.png" alt="first" />
                        </div>
                    </div>

                    <div className={cls.hero_info_body_ability_wrapper}>
                        <div className={cls.hero_info_body_ability_wrapper_title}>
                            <img src="/img/talis4.png" alt="talis3" />
                            <span style={{
                                color: theme === 'dark' ? 'white' : '#353535'
                            }}>
                                Tiny Turtle
                            </span>
                        </div>

                        <div className={cls.hero_info_body_ability_wrapper_picture}>
                            <img src="/img/secondImage.png" alt="second" />
                        </div>
                    </div>
                </div>  

                <div className={cls.hero_info_body_parents}>
                    <h3 className={theme === 'dark' ? cls.hero_info_body_parents_title : `${cls.hero_info_body_parents_title} 
                    ${cls.hero_info_body_parents_title_active}`}>Parents</h3>

                    <div className={theme === 'dark' ? cls.hero_info_body_parents_wrapper : `${cls.hero_info_body_parents_wrapper} ${
                        cls.hero_info_body_parents_wrapper_light
                    }`}>
                        <div className={cls.hero_info_body_parents_child}>
                            <span>
                                #2435862
                            </span>
                            <h3>
                                <img src="/img/leaf.png" alt="leaf" />
                                Meta PVP Speed Control
                            </h3>
                            <p>Breed Count: 3</p>
                            <div className={cls.hero_info_body_parents_child_picture}>
                                <img src="/img/buble-min.png" alt="buble" />
                            </div>
                        </div>

                        <div className={cls.hero_info_body_parents_child}>
                            <span>
                                #2435862
                            </span>
                            <h3>
                                <img src="/img/leaf.png" alt="leaf" />
                                Meta PVP Speed Control
                            </h3>
                            <p>Breed Count: 3</p>
                            <div className={cls.hero_info_body_parents_child_picture}>
                                <img src="/img/buble-min.png" alt="buble" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cls.hero_info_body_parents}>
                    <h3 className={theme === 'dark' ? cls.hero_info_body_parents_title : `${cls.hero_info_body_parents_title} 
                    ${cls.hero_info_body_parents_title_active}`}>Children</h3>

                    <div className={theme === 'dark' ? cls.hero_info_body_parents_wrapper : `${cls.hero_info_body_parents_wrapper} ${
                        cls.hero_info_body_parents_wrapper_light
                    }`}>
                        <div className={cls.hero_info_body_parents_child}>
                            <span>
                                #2435862
                            </span>
                            <h3>
                                <img src="/img/leaf.png" alt="leaf" />
                                Meta PVP Speed Control
                            </h3>
                            <div className={cls.hero_info_body_parents_child_picture}>
                                <img src="/img/buble-min.png" alt="buble" />
                            </div>
                        </div>

                        <div className={cls.hero_info_body_parents_child}>
                            <span>
                                #2435862
                            </span>
                            <h3>
                                <img src="/img/leaf.png" alt="leaf" />
                                Meta PVP Speed Control
                            </h3>
                            <div className={cls.hero_info_body_parents_child_picture}>
                                <img src="/img/buble-min.png" alt="buble" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
    )
}

export default HeroInfo