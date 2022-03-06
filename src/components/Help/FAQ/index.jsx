import { useState } from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import cls from './FAQ.module.css'

const questBase = [
    {
        isClicked: false,
        id: 'first_question',
        title: 'How it works?',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, aliquam tenetur fuga minima inventore nemo autem suscipit iusto explicabo, eum voluptates voluptate nulla molestiae earum nobis eaque alias maiores recusandae.'
    },
    {
        isClicked: false,
        id: 'second_question',
        title: 'How it works?',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, aliquam tenetur fuga minima inventore nemo autem suscipit iusto explicabo, eum voluptates voluptate nulla molestiae earum nobis eaque alias maiores recusandae.'
    },
    {
        isClicked: false,
        id: 'third_question',
        title: 'How it works?',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, aliquam tenetur fuga minima inventore nemo autem suscipit iusto explicabo, eum voluptates voluptate nulla molestiae earum nobis eaque alias maiores recusandae.'
    },
    {
        isClicked: false,
        id: 'fourth_question',
        title: 'How it works?',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, aliquam tenetur fuga minima inventore nemo autem suscipit iusto explicabo, eum voluptates voluptate nulla molestiae earum nobis eaque alias maiores recusandae.'
    },
]

const FAQ = () => {
    const theme = useSelector(state => state.backGround.theme)
    const [base , setBase] = useState(questBase)

    const handleClick = id => {

        const newBase = base.map((item) => {
            return {
                ...item,
                isClicked: false
            }
        })

        const filteredArray = newBase.map((item) => {
            if(item.id === id){
                return {
                    ...item,
                    isClicked: true
                }
            }else{
                return item
            }
        })

        setBase(filteredArray)
    }

    return (
        <section className={cls.faq}>
            <Link to='/help' className={theme === 'dark' ? cls.back_btn : `${cls.back_btn} ${cls.back_btn_light}`}>
                <FiChevronLeft/>
                Back
            </Link>
            <div className={theme === 'dark' ? cls.faq_header : `${cls.faq_header} ${cls.faq_header_light}`}>
                <span>?</span>
                <img src="/img/faqIcon.png" alt="faq" />
                FAQ
            </div>
            {
                base.map(({content , title, isClicked , id}) => {
                    return  <div 
                        id={id}
                        onClick={() => handleClick(id)}
                        key={id} 
                        className={
                            isClicked ? `${cls.wrapper} ${cls.wrapper_active}` : cls.wrapper
                        }
                    >
                                <div className={cls.wrapper_child}>
                                    <div className={theme === 'dark' ? cls.wrapper_child_header : `${cls.wrapper_child_header} 
                                    ${cls.wrapper_child_header_light}`}>
                                        <span
                                            className={
                                                isClicked ? cls.active_span : null
                                            }
                                        ></span>
                                        {title}
                                    </div>
                                    <div className={theme === 'dark' ? cls.wrapper_child_body : `${cls.wrapper_child_body}
                                    ${cls.wrapper_child_body_light}`}>
                                        <p>{content}</p>
                                    </div>
                                </div>
                            </div>
                })
            }
        </section>
    )
}

export default FAQ