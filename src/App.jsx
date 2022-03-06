import { useSelector } from 'react-redux'
import cls from './App.module.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Content from './pages/Content'

const App = () => {
    const theme = useSelector(state => state.backGround.theme)
    const body = document.body

    if(theme === 'dark'){
        body.style.background = '#001825'
    }else{
        body.style.background = 'white'
    }

    return (
        <section 
            className={cls.root}
        >
            <Navbar/>
            <div className={cls.root_container}>
                <Sidebar/>
                <Content/>
            </div>
        </section>
    )
}

export default App