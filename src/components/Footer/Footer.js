/**
 * Created by townmi on 16/12/24.
 */
import React, { Component } from 'react'
import { IndexLink, Link, withRouter } from 'react-router';
import './Footer.scss';

class Footer extends Component {
    constructor (props) {
        super(props);
    }

    render () {

        const { location } = this.props;

        return (
            <div className="t-footer">
                <div className="t-center">
                    1234
                </div>
            </div>
        )
    }
}

export default withRouter(Footer);