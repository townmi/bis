/*!
 * @author harrytang@vipabc.com 
 * @date 16/11/4.
 */
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import './Banner.scss';

class Banner extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const list = this.props.data;
        const listView = list.map((item, index) => {
                return <div className="bis-banner-cell" key={index}>
                            <a href={item.link}>
                                <img src={item.mobileSrc} alt={item.des}/>
                            </a>
                        </div>
            }
        );

        return (
            <div>
                { listView }
            </div>
        )
    }

}

export default withRouter(Banner)