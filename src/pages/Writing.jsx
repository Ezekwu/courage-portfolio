import React from 'react'
import Header from '../components/layout/Header'
import Articles from '../components/layout/Articles'
import { articlesData } from '../data/articles/articles'

const Writing = () => {
    return (
        <div>
            <Header content='Writing' type='link'/>
            <div className=" article-wrapper">
                <div className="container">
                <Articles articles={articlesData} />
                </div>
            </div>
            
        </div>
    )
}

export default Writing