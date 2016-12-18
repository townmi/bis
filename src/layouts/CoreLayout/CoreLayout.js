import React from 'react';
//import Header from '../../components/Header';
import Nav from '../../components/Nav';
import './CoreLayout.scss';
import '../../styles/core.scss';

export const CoreLayout = ({ children }) => {

    const location = children.props.location;

    return (
        <div className='t-wrap'>
            <Nav location = { location }/>
            <div className='t-body'>
                {children}
            </div>
        </div>
    )
};

CoreLayout.propTypes = {
    children: React.PropTypes.element.isRequired
};

export default CoreLayout
