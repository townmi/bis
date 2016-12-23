/*!
 * @author harrytang@vipabc.com 
 * @date 16/11/4.
 */
import React, { Component } from 'react'
import './Banner.scss';

import Card from '../../../../components/Card';

class Banner extends Component {
    constructor (props) {
        super(props);

        this.state = {
            list: [{
                "id": 1,
                "title": "12313",
                "info": "asdhaskdadsasd",
                "date": "2016-12-22",
                "type": "normal"
            }]
        };

        let self = this;

        setTimeout(function () {
            self.tick();
        }, 3000);
    }

    tick() {
        this.setState((prevState) => {
            prevState.list.push({
                "id": 2,
                "title": "12312223",
                "info": "asdhaskdadsasd",
                "date": "2016-12-22",
                "type": "normal"
            });
            prevState.list.push({
                "id": 2,
                "title": "12312223",
                "info": "asdhaskdadsasd",
                "date": "2016-12-22",
                "type": "normal"
            });
            prevState.list.push({
                "id": 2,
                "title": "12312223",
                "info": "asdhaskdadsasd",
                "date": "2016-12-22",
                "type": "normal"
            });
        });
    }

    draw () {

        let list = [];
        const last = this.state.list.length-1;
        this.state.list.forEach(function (ele, index) {
            let pos = "middle";
            switch (index) {
                case 0:
                    pos = "left";
                    break;
                case last:
                    pos = "right";
                    break;
                default:
                    pos = "middle";
                    break;
            }
            list.push(<Card data={ele} index={pos}/>);
        });

        return list;

    }

    render () {

        return (
            <div className="t-index-banner">
                <div className="t-center">
                    <h2>最新消息</h2>
                    <div className="_cell">
                        {this.draw()}
                    </div>
                </div>
            </div>
        )
    }

}

export default Banner