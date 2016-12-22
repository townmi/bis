/*!
 * @author harrytang@vipabc.com 
 * @date 16/9/26.
 */
import React, { Component } from 'react'
import { IndexLink, Link, withRouter } from 'react-router';
import './Nav.scss';

class Nav extends Component {
    constructor (props) {
        super(props);
    }

    render () {

        const { location } = this.props;

        return (
            <div className="t-nav">
                <div className="t-center">
                    <IndexLink to='/' className="t-nav-logo">
                        Towne/Townmi
                    </IndexLink>
                    <div className="t-nav-links">
                        <Link to='/counter' className="_link" activeClassName='active'>
                            blog
                        </Link>
                        <Link to='/live' className="_link" activeClassName='active'>
                            data
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Nav);
