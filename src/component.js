import React from 'react'
import { Content, Header, Menu } from './components';
import { default as context } from './context';

const { AppContext } = context

export default (props) => {
    return (
    <AppContext.Provider
        value={{
            config: props
        }}
    >
        <div className="pag-container">
            <Header></Header>
            <Content></Content>
        </div>
    </AppContext.Provider>
    )
}