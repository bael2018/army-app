import ChangeSettings from './ChangeSettings'
import PlatformSet from './PlatformSet'
import cls from './Setup.module.css'
import UserSettings from './UserSettings'

const Setup = () => {
    return (
        <section className={cls.setting}>
            <UserSettings/>
            <ChangeSettings/>
            <PlatformSet/>
        </section>
    )
}
    
export default Setup