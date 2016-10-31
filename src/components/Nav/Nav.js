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
            <div className="bis-nav">
                <div className="bis-center">
                    <IndexLink to='/' className="bis-nav-logo">
                        <img src={"http://source.vipabc.com/Ext/images/website/share/logo/logo.png"} alt=""/>
                    </IndexLink>
                    <div className="bis-nav-links">
                        <Link to='/counter' className="_link" activeClassName='active'>
                            Counter
                        </Link>
                        <Link to='/live' className="_link" activeClassName='active'>
                            Zen
                        </Link>
                        <Link to='/elapse' className="_link" activeClassName='active'>
                            Elapse
                        </Link>
                        <Link to='/route/88' className="_link" activeClassName='active'>
                            Route
                        </Link>
                        <Link to='/notFound' className="_link" activeClassName='active'>
                            404
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Nav);
