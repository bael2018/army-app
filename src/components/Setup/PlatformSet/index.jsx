import cls from './PlatformSet.module.css'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { darkAction, lightAction } from '../../../redux/action'

const PlatformSet = () => {
    const [theme , setTheme] = useState(false)
    const [themeValue , setThemeValue] = useState('As on device')
    const dispatch = useDispatch()

    const themer = useSelector(state => state.backGround.theme)

    const lightTheme = () => {
        setThemeValue('Light')
        dispatch(lightAction())
    }

    const darkTheme = () => {
        setThemeValue('Dark')
        dispatch(darkAction())
    }
    
    const deviceTheme = () => {
        setThemeValue('As on device')
        dispatch(darkAction())
    }

    return (
        <section className={ themer === 'dark' ? cls.platform : `${cls.platform} ${cls.platform_active}`} >
            <div className={cls.platform_title}>
                <img src="/img/settingIcon.png" alt="setting" />
                <span>Platform settings</span>
            </div>
            <div className={cls.platform_body}>
                <button style={{
                    color: themer === 'dark' ? 'white' : 'black',
                }}>
                    <img src={themer === 'dark' ? '/img/ext.png' : '/img/extWhite.png'} alt="ext"/>
                    Download extention
                </button>
                <div className={themer === 'dark' ? cls.platform_body_wrapper : `${cls.platform_body_wrapper} 
                ${cls.platform_body_wrapper_active}`}>
                    <span>!</span>
                    To use the platform, you need to install the extension
                </div>
            </div>
            <div 
                className={themer === 'dark' ? cls.platform_footer : `${cls.platform_footer} ${cls.platform_footer_light}`}
                onClick={() => setTheme(!theme)}
            >
                <div className={ themer === 'dark' ? cls.platform_footer_child : `${cls.platform_footer_child} ${
                    cls.platform_footer_child_active
                }`}>
                    <span>
                        <p>Theme</p>
                        <h5>{themeValue}</h5>
                    </span>
                    {
                        theme ? <IoIosArrowUp/> : <IoIosArrowDown/>
                    }
                </div>
                <div 
                    className={ themer === 'dark' ? cls.platform_footer_inner : `${cls.platform_footer_inner} ${
                        cls.platform_footer_inner_active
                    }`}
                    style={{
                        bottom: theme ? '-100px' : '0',
                        height: theme ? '100px' : '0',
                        opacity: theme ? '1' : '0'
                    }}
                >
                    <p onClick={deviceTheme}>As on device</p>
                    <p onClick={darkTheme}>Dark</p>
                    <p onClick={lightTheme}>Light</p>
                </div>
            </div>
        </section>
    )
}

export default PlatformSet