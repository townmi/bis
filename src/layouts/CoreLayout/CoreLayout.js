import React, {Component} from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

import './CoreLayout.scss';
import '../../styles/core.scss';

class CoreLayout extends Component {

    constructor (props) {
        super(props);
    }

    render() {

        const { location, children } = this.props;

        return (
            <div className='t-wrap'>
                <Nav location={ location }/>
                <div className={'t-body ' + location.pathname}>
                    {children}
                    <Footer location={ location }/>
                </div>
            </div>
        )
    }
}

CoreLayout.propTypes = {
    children: React.PropTypes.element.isRequired
};

export default connect()(CoreLayout)
