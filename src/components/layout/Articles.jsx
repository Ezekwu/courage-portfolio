import React from 'react'

import { StyledArticles } from '../styles/ArticlesStyled'
const Articles = ({ articles }) => {
    return (
        <StyledArticles>
            <div className=" ">
            {
                articles.map(item => (
                    <a href={item.link} target='_blank' rel="noreferrer">
                        <img src={item.image} alt="" />
                        <h4 className='title'>{item.title}</h4>
                        <p className='description'>{item.description}</p>
                        <p className="date-readtime">
                            <span>{item.date}</span>
                            <span>{item.readTime}</span>
                        </p>
                    </a>
                ))
            }
            </div>
            
        </StyledArticles>
    )
}

export default Articles