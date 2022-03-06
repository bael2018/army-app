import cls from './Empty.module.css'

const Empty = ({value}) => {
    return (
        <section className={cls.empty}>
            <img src="/img/empty.png" alt="empty" />
            <h3>Oops!</h3>
            <h3>{value}</h3>
        </section>
    )
}

export default Empty