import { useState , useEffect } from 'react'
import { useSelector } from 'react-redux'
import Alert from '../../UI/Alert'
import LongBtn from '../../UI/LongBtn'
import cls from './ChangeSettings.module.css'

const ChangeSettings = () => {
    const [repeat , setRepeat] = useState('')
    const [fresh , setFresh] = useState('')
    const [old , setOld] = useState('')

    const [alert , setAlert] = useState(false)
    const [alertVal , setAlertVal] = useState(false)

    const theme = useSelector(state => state.backGround.theme)

    const handleInput = () => {
        if(old !== '' && fresh !== '' && repeat !== ''){
            setOld('')
            setFresh('')
            setRepeat('')
            setAlertVal(true)
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 3000)
        }else{
            setAlertVal(false)
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 3000)
        }
    }

    return (
        <section 
            style={{
                background:
                theme === 'dark' ? '#032030' : 'none',
                border: 
                theme === 'dark' ? 'none' : '1px solid #C8C8C8'
            }}
            className={cls.setting}
        >
            <Alert mood={
                alertVal ? 'success' : 'danger'
            } value={
                alertVal ? 'Changes saved' : 'Error'
            } state={alert}/>
            <div className={cls.setting_title}>
                <img src="/img/settingIcon.png" alt="setting" />
                <span
                style={{
                    color: theme === 'dark' ? 'white' : '#353535'
                }}>Change password</span>
            </div>
            <div className={cls.setting_body}>
                <div 
                    className={cls.setting_body_wrapper}
                    style={{
                        border: theme === 'dark' ? '1px solid #f6fbfd33' : '1px solid #B6B6B6'
                    }}
                >
                    <span className={
                        old ? `${cls.spanned} ${cls.spanned_active}` : cls.spanned
                    }>Old password</span>
                    <input 
                        style={{
                            height: old ? '40%' : '100%',
                            bottom: old ? '10%' : '0%',
                            color: theme === 'dark' ? 'white' : 'black'
                        }}
                        value={old}
                        onChange={e => setOld(e.target.value)}
                        onFocus={() => {
                            if(old === ''){
                                setOld(' ')
                            }
                        }}
                        onBlur={() => {
                            if(old === ' '){
                                setOld('')
                            }
                        }}
                    />
                </div>
                <div 
                    className={cls.setting_body_wrapper}
                    style={{
                        border: theme === 'dark' ? '1px solid #f6fbfd33' : '1px solid #B6B6B6'
                    }}
                >
                    <span className={
                        fresh ? `${cls.spanned} ${cls.spanned_active}` : cls.spanned
                    }>New password</span>
                    <input 
                        style={{
                            height: fresh ? '40%' : '100%',
                            bottom: fresh ? '10%' : '0%',
                            color: theme === 'dark' ? 'white' : 'black'
                        }}
                        value={fresh}
                        onChange={e => setFresh(e.target.value)}
                        onFocus={() => {
                            if(fresh === ''){
                                setFresh(' ')
                            }
                        }}
                        onBlur={() => {
                            if(fresh === ' '){
                                setFresh('')
                            }
                        }}
                    />
                </div>
                <div 
                    className={cls.setting_body_wrapper}
                    style={{
                        border: theme === 'dark' ? '1px solid #f6fbfd33' : '1px solid #B6B6B6'
                    }}
                >
                    <span className={
                        repeat ? `${cls.spanned} ${cls.spanned_active}` : cls.spanned
                    }>Repeat password</span>
                    <input 
                        style={{
                            height: repeat ? '40%' : '100%',
                            bottom: repeat ? '10%' : '0%',
                            color: theme === 'dark' ? 'white' : 'black'
                        }}
                        value={repeat}
                        onChange={e => setRepeat(e.target.value)}
                        onFocus={() => {
                            if(repeat === ''){
                                setRepeat(' ')
                            }
                        }}
                        onBlur={() => {
                            if(repeat === ' '){
                                setRepeat('')
                            }
                        }}
                    />
                </div>
                <span onClick={handleInput}>
                    <LongBtn value='Change password'/>
                </span>
            </div>
        </section>
    )
}

export default ChangeSettings