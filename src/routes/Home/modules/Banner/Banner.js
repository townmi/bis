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
        this.state.list.forEach(function (ele) {
            list.push(<Card data={ele}/>);
        });

        return list;

    }

    render () {

        return (
            <div className="t-index-banner">
                <dic className="t-center">
                    <h2>最新</h2>
                    <div>
                        {this.draw()}
                    </div>
                </dic>
            </div>
        )
    }

}

export default Banner