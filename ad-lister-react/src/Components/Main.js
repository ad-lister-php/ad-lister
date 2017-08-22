import React from 'react';
import AdContainer from './AdContainer';

const Main = (props) => {
    return (
        <div>
            <AdContainer searchQuery={props.searchQuery} />
        </div>
    )
}

export default Main;