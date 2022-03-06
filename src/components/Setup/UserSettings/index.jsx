import { useState , useEffect } from 'react'
import { useSelector } from 'react-redux'
import Alert from '../../UI/Alert'
import LongBtn from '../../UI/LongBtn'
import Title from '../../UI/Title'
import cls from './UserSettings.module.css'

const UserSettings = () => {
    const [address , setAdderess] = useState('')
    const [name , setName] = useState('')

    const [alertVal , setAlertVal] = useState(false)
    const [alert , setAlert] = useState(false)

    const theme = useSelector(state => state.backGround.theme)

    const handleInput = () => {

        if(name !== '' && address !== ''){
            setName('')
            setAdderess('')
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
        <>
            <Title value='Settings'/>
            <section 
                className={cls.setting}
                style={{
                    background:
                    theme === 'dark' ? '#032030' : 'none',
                    border: 
                    theme === 'dark' ? 'none' : '1px solid #C8C8C8'
                }}
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
                        }}
                    >Account settings</span>
                </div>
                <div className={cls.setting_body}>
                    <div 
                        className={cls.setting_body_wrapper}
                        style={{
                            border: theme === 'dark' ? '1px solid #f6fbfd33' : '1px solid #B6B6B6'
                        }}
                    >
                        <span 
                            className={
                                name ? `${cls.spanned} ${cls.spanned_active}` : cls.spanned
                            }
                        >Name</span>
                        <input 
                            value={name}
                            style={{
                                height: name ? '40%' : '100%',
                                bottom: name ? '10%' : '0%',
                                color: theme === 'dark' ? 'white' : 'black'
                            }}
                            onChange={e => setName(e.target.value)} 
                            onFocus={() => {
                                if(name === ''){
                                    setName(' ')
                                }
                            }}
                            onBlur={() => {
                                if(name === ' '){
                                    setName('')
                                }
                            }}
                            type="text" 
                        />
                    </div>
                    <div 
                        className={cls.setting_body_wrapper}
                        style={{
                            border: theme === 'dark' ? '1px solid #f6fbfd33' : '1px solid #B6B6B6'
                        }}
                    >
                        <span className={
                            address ? `${cls.spanned} ${cls.spanned_active}` : cls.spanned
                        }>My ronin address</span>
                        <input 
                            value={address}
                            style={{
                                height: address ? '40%' : '100%',
                                bottom: address ? '10%' : '0%',
                                color: theme === 'dark' ? 'white' : 'black'
                            }}
                            onChange={e => setAdderess(e.target.value)}
                            onFocus={() => {
                                if(address === ''){
                                    setAdderess(' ')
                                }
                            }}
                            onBlur={() => {
                                if(address === ' '){
                                    setAdderess('')
                                }
                            }}
                            type="email" 
                        />
                    </div>
                    <div 
                        className={cls.setting_body_warner}
                        style={{
                            color: theme === 'dark' ? 'white' : '#353535'
                        }}
                    >
                        <span   
                            style={{
                                color: theme === 'dark' ? 'white' : 'white'
                            }}
                        >!</span>
                        To add heroes to your inventory, you must fill in this field
                    </div>
                    <span onClick={handleInput}>
                        <LongBtn value='Save changes'/>
                    </span>
                </div>
            </section>
        </>
    )
}

export default UserSettings