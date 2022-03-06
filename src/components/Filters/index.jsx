import cls from './Filters.module.css'
import { BsChevronDown } from 'react-icons/bs'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterAction } from '../../redux/action'

const Filters = () => {
    const [healthFrom , setHealthFrom] = useState('')
    const [healthTo , setHealthTo] = useState('')
    const [speedFrom , setSpeedFrom] = useState('')
    const [speedTo , setSpeedTo] = useState('')
    const [skillFrom , setSkillFrom] = useState('')
    const [skillTo , setSkillTo] = useState('')
    const [moraleFrom , setMoraleFrom] = useState('')
    const [moraleTo , setMoraleTo] = useState('')

    const [healFromFocus , setHealFromFocus] = useState(false)
    const [healToFocus , setHealToFocus] = useState(false)
    const [speedFromFocus , setSpeedFromFocus] = useState(false)
    const [speedToFocus , setSpeedToFocus] = useState(false)
    const [skillFromFocus , setSkillFromFocus] = useState(false)
    const [skillToFocus , setSkillToFocus] = useState(false)
    const [moraleFromFocus , setMoraleFromFocus] = useState(false)
    const [moraleToFocus , setMoraleToFocus] = useState(false)

    const theme = useSelector(state => state.backGround.theme)
    const state = useSelector(state => state.fill.filter)
    const dispatch = useDispatch()

    document.body.addEventListener('click' , e => {
        if(state){
            if(e.target.id === 'filter'){
                dispatch(filterAction(false))
            }
        }
    })

    return (
        <>
            <div className={
                state ? `${cls.cover} ${cls.cover_active}` : cls.cover
            }></div>
            <section 
                style={{
                    background: theme === 'dark' ? '#002134' : 'white',
                    border: theme === 'dark' ? 'none' : '1px solid #C8C8C8'
                }}
                id='filter' 
                className={
                    state ? `${cls.filters} ${cls.filters_active}` : cls.filters
                }
            >
                <div className={
                    theme === 'dark' ? cls.filters_header : `${cls.filters_header} ${cls.filters_header_light}`
                }>
                    <h3>Filters</h3>
                    <div className={
                        theme === 'dark' ? cls.filters_header_inside : `${cls.filters_header_inside} 
                        ${cls.filters_header_inside_active}`
                    }>
                        <h5>Class</h5>
                        <span>Choose class <BsChevronDown/></span>
                    </div>
                </div>

                <div className={cls.filters_body}>
                    <div className={cls.filters_body_wrapper}>
                        <div className={
                            theme === 'dark' ? cls.filters_body_wrapper_title : `${cls.filters_body_wrapper_title} 
                            ${cls.filters_body_wrapper_title_alt}`
                        }>
                            <span>
                                <img src="/img/heart.png" alt="heart" />
                            </span>
                            <h4>HEALTH</h4>
                        </div>
                        <div className={cls.filters_body_wrapper_inner}>
                            <div className={
                                theme === 'dark' ? cls.filters_body_wrapper_inner_item : 
                            `${cls.filters_body_wrapper_inner_item} ${cls.filters_body_wrapper_inner_item_active}`
                            }>
                                <p
                                    style={{
                                        display: +healthFrom || healFromFocus ? 'none' :
                                        healthFrom === '' ? 'none' : 'block'
                                    }}
                                >Invalid format</p>
                                <span
                                    style={{
                                        color: +healthFrom || healFromFocus ? '#5158FF' : 
                                        healthFrom === '' ? '#898989' : '#FF5151'
                                    }}
                                    className={
                                        healthFrom || healFromFocus ? cls.activeLink : null
                                    }
                                >From</span>
                                <input 
                                    onFocus={() => setHealFromFocus(true)}
                                    onBlur={() => setHealFromFocus(false)}
                                    style={{
                                        border: +healthFrom || healFromFocus ? '1px solid #5158FF' :
                                        healthFrom === '' ? '1px solid #f6fbfd33' :
                                        '1px solid #FF5151',
                                        paddingTop: healthFrom || healFromFocus ? '25px' : '10px',
                                        fontSize: healthFrom || healFromFocus ? '12px' : '14px'
                                    }}
                                    type="text" 
                                    value={healthFrom}
                                    onChange={e => setHealthFrom(e.target.value)}
                                />
                            </div>
                            <div className={
                                theme === 'dark' ? cls.filters_body_wrapper_inner_item : 
                            `${cls.filters_body_wrapper_inner_item} ${cls.filters_body_wrapper_inner_item_active}`
                            } >
                                <p
                                    style={{
                                        display: +healthTo || healToFocus ? 'none' :
                                        healthTo === '' ? 'none' : 'block'
                                    }}
                                >Invalid format</p>
                                <span
                                    style={{
                                        color: +healthTo || healToFocus ? '#5158FF' : 
                                        healthTo === '' ? '#898989' : '#FF5151'
                                    }}
                                    className={
                                        healthTo || healToFocus ? cls.activeLink : null
                                    }
                                >To</span>
                                <input 
                                    onFocus={() => setHealToFocus(true)}
                                    onBlur={() => setHealToFocus(false)}
                                    style={{
                                        border: +healthTo || healToFocus ? '1px solid #5158FF' :
                                        healthTo === '' ? '1px solid #f6fbfd33' :
                                        '1px solid #FF5151',
                                        paddingTop: healthTo || healToFocus ? '25px' : '10px',
                                        fontSize: healthTo || healToFocus ? '12px' : '14px'
                                    }}
                                    type="text" 
                                    value={healthTo}
                                    onChange={e => setHealthTo(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={cls.filters_body_wrapper}>
                        <div className={
                            theme === 'dark' ? cls.filters_body_wrapper_title : `${cls.filters_body_wrapper_title} 
                            ${cls.filters_body_wrapper_title_alt}`
                        }>
                            <span>
                                <img src="/img/storm.png" alt="heart" />
                            </span>
                            <h4>SPEED</h4>
                        </div>
                        <div className={cls.filters_body_wrapper_inner}>
                            <div className={
                                theme === 'dark' ? cls.filters_body_wrapper_inner_item : 
                            `${cls.filters_body_wrapper_inner_item} ${cls.filters_body_wrapper_inner_item_active}`
                            }>
                                <p
                                    style={{
                                        display: +speedFrom || speedFromFocus ? 'none' :
                                        speedFrom === '' ? 'none' : 'block'
                                    }}
                                >Invalid format</p>
                                <span
                                    style={{
                                        color: +speedFrom || speedFromFocus ? '#5158FF' : 
                                        speedFrom === '' ? '#898989' : '#FF5151'
                                    }}
                                    className={
                                        speedFrom || speedFromFocus ? cls.activeLink : null
                                    }
                                >From</span>
                                <input 
                                   onFocus={() => setSpeedFromFocus(true)}
                                   onBlur={() => setSpeedFromFocus(false)}
                                    style={{
                                        border: +speedFrom || speedFromFocus ? '1px solid #5158FF' :
                                        speedFrom === '' ? '1px solid #f6fbfd33' :
                                        '1px solid #FF5151',
                                        paddingTop: speedFrom || speedFromFocus ? '25px' : '10px',
                                        fontSize: speedFrom || speedFromFocus ? '12px' : '14px'
                                    }}
                                    type="text" 
                                    value={speedFrom}
                                    onChange={e => setSpeedFrom(e.target.value)}
                                />
                            </div>
                            <div className={
                                theme === 'dark' ? cls.filters_body_wrapper_inner_item : 
                            `${cls.filters_body_wrapper_inner_item} ${cls.filters_body_wrapper_inner_item_active}`
                            }>
                                <p
                                    style={{
                                        display: +speedTo || speedToFocus ? 'none' :
                                        speedTo === '' ? 'none' : 'block'
                                    }}
                                >Invalid format</p>
                                <span
                                    style={{
                                        color: +speedTo || speedToFocus ? '#5158FF' : 
                                        speedTo === '' ? '#898989' : '#FF5151'
                                    }}
                                    className={
                                        speedTo || speedToFocus ? cls.activeLink : null
                                    }
                                >To</span>
                                <input 
                                    onFocus={() => setSpeedToFocus(true)}
                                    onBlur={() => setSpeedToFocus(false)}
                                    style={{
                                        border: +speedTo || speedToFocus ? '1px solid #5158FF' :
                                        speedTo === '' ? '1px solid #f6fbfd33' :
                                        '1px solid #FF5151',
                                        paddingTop: speedTo || speedToFocus ? '25px' : '10px',
                                        fontSize: speedTo || speedToFocus ? '12px' : '14px'
                                    }}
                                    type="text" 
                                    value={speedTo}
                                    onChange={e => setSpeedTo(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={cls.filters_body_wrapper}>
                        <div className={
                            theme === 'dark' ? cls.filters_body_wrapper_title : `${cls.filters_body_wrapper_title} 
                            ${cls.filters_body_wrapper_title_alt}`
                        }>
                            <span>
                                <img src="/img/star.png" alt="heart" />
                            </span>
                            <h4>SKILL</h4>
                        </div>
                        <div className={cls.filters_body_wrapper_inner}>
                            <div className={
                                theme === 'dark' ? cls.filters_body_wrapper_inner_item : 
                            `${cls.filters_body_wrapper_inner_item} ${cls.filters_body_wrapper_inner_item_active}`
                            }>
                                <p
                                    style={{
                                        display: +skillFrom || skillFromFocus ? 'none' :
                                        skillFrom === '' ? 'none' : 'block'
                                    }}
                                >Invalid format</p>
                                <span
                                    style={{
                                        color: +skillFrom || skillFromFocus ? '#5158FF' : 
                                        skillFrom === '' ? '#898989' : '#FF5151'
                                    }}
                                    className={
                                        skillFrom || skillFromFocus ? cls.activeLink : null
                                    }
                                >From</span>
                                <input 
                                    onFocus={() => setSkillFromFocus(true)}
                                    onBlur={() => setSkillFromFocus(false)}
                                    style={{
                                        border: +skillFrom || skillFromFocus ? '1px solid #5158FF' :
                                        skillFrom === '' ? '1px solid #f6fbfd33' :
                                        '1px solid #FF5151',
                                        paddingTop: skillFrom || skillFromFocus ? '25px' : '10px',
                                        fontSize: skillFrom || skillFromFocus ? '12px' : '14px'
                                    }}
                                    type="text" 
                                    value={skillFrom}
                                    onChange={e => setSkillFrom(e.target.value)}
                                />
                            </div>
                            <div className={
                                theme === 'dark' ? cls.filters_body_wrapper_inner_item : 
                            `${cls.filters_body_wrapper_inner_item} ${cls.filters_body_wrapper_inner_item_active}`
                            }>
                                <p
                                    style={{
                                        display: +skillTo || skillToFocus ? 'none' :
                                        skillTo === '' ? 'none' : 'block'
                                    }}
                                >Invalid format</p>
                                <span
                                    style={{
                                        color: +skillTo || skillToFocus ? '#5158FF' : 
                                        skillTo === '' ? '#898989' : '#FF5151'
                                    }}
                                    className={
                                        skillTo || skillToFocus ? cls.activeLink : null
                                    }
                                >To</span>
                                <input
                                    onFocus={() => setSkillToFocus(true)}
                                    onBlur={() => setSkillToFocus(false)}
                                    style={{
                                        border: +skillTo || skillToFocus ? '1px solid #5158FF' :
                                        skillTo === '' ? '1px solid #f6fbfd33' :
                                        '1px solid #FF5151',
                                        paddingTop: skillTo || skillToFocus ? '25px' : '10px',
                                        fontSize: skillTo || skillToFocus ? '12px' : '14px'
                                    }}
                                    type="text" 
                                    value={skillTo}
                                    onChange={e => setSkillTo(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={cls.filters_body_wrapper}>
                        <div className={
                            theme === 'dark' ? cls.filters_body_wrapper_title : `${cls.filters_body_wrapper_title} 
                            ${cls.filters_body_wrapper_title_alt}`
                        }>
                            <span>
                                <img src="/img/fire.png" alt="heart" />
                            </span>
                            <h4>MORALE</h4>
                        </div>
                        <div className={cls.filters_body_wrapper_inner}>
                            <div className={
                                theme === 'dark' ? cls.filters_body_wrapper_inner_item : 
                            `${cls.filters_body_wrapper_inner_item} ${cls.filters_body_wrapper_inner_item_active}`
                            }>
                                <p
                                    style={{
                                        display: +moraleFrom || moraleFromFocus ? 'none' :
                                        moraleFrom === null || moraleFrom === '' ? 'none' : 'block'
                                    }}
                                >Invalid format</p>
                                <span
                                    style={{
                                        color: +moraleFrom || moraleFromFocus ? '#5158FF' : 
                                        moraleFrom === null || moraleFrom === '' ? '#898989' : '#FF5151'
                                    }}
                                    className={
                                        moraleFrom || moraleFromFocus ? cls.activeLink : null
                                    }
                                >From</span>
                                <input 
                                    onFocus={() => setMoraleFromFocus(true)}
                                    onBlur={() => setMoraleFromFocus(false)}
                                    style={{
                                        border: +moraleFrom || moraleFromFocus ? '1px solid #5158FF' :
                                        moraleFrom === null || moraleFrom === '' ? '1px solid #f6fbfd33' :
                                        '1px solid #FF5151',
                                        paddingTop: moraleFrom || moraleFromFocus ? '25px' : '10px',
                                        fontSize: moraleFrom || moraleFromFocus ? '12px' : '14px'
                                    }}
                                    type="text" 
                                    value={moraleFrom}
                                    onChange={e => setMoraleFrom(e.target.value)}
                                />
                            </div>
                            <div className={
                                theme === 'dark' ? cls.filters_body_wrapper_inner_item : 
                            `${cls.filters_body_wrapper_inner_item} ${cls.filters_body_wrapper_inner_item_active}`
                            }>
                                <p
                                    style={{
                                        display: +moraleTo || moraleToFocus ? 'none' :
                                        moraleTo === null || moraleTo === '' ? 'none' : 'block'
                                    }}
                                >Invalid format</p>
                                <span
                                    style={{
                                        color: +moraleTo || moraleToFocus ? '#5158FF' : 
                                        moraleTo === null || moraleTo === '' ? '#898989' : '#FF5151'
                                    }}
                                    className={
                                        moraleTo || moraleToFocus ? cls.activeLink : null
                                    }
                                >To</span>
                                <input 
                                    onFocus={() => setMoraleToFocus(true)}
                                    onBlur={() => setMoraleToFocus(false)}
                                    style={{
                                        border: +moraleTo || moraleToFocus ? '1px solid #5158FF' :
                                        moraleTo === null || moraleTo === '' ? '1px solid #f6fbfd33' :
                                        '1px solid #FF5151',
                                        paddingTop: moraleTo || moraleToFocus ? '25px' : '10px',
                                        fontSize: moraleTo || moraleToFocus ? '12px' : '14px'
                                    }}
                                    type="text" 
                                    value={moraleTo}
                                    onChange={e => setMoraleTo(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cls.filters_footer}>
                    <span
                        style={{
                            color: theme === 'dark' ? '#5158FF' : 'black'
                        }}
                    >Reset filters</span>
                    <button className={
                        theme === 'dark' ? null : cls.filters_footer_button
                    }>
                        <span>Apply</span>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Filters