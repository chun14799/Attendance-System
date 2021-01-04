import React from 'react'
import Header from '../Common/Header'
import Background  from './Background'
import Author from './../Common/AuthorComponent';
const MainHome = () => {
    return (
        <Author>
            <Header></Header>
            <Background></Background>
        </Author>
    );
}


export default React.memo(MainHome)