/*!
 * @author harrytang@vipabc.com 
 * @date 16/11/4.
 */
import React, {Component} from 'react'
import './Banner.scss';

import Card from '../../../../components/Card';
import result from './Banner.json';

class Banner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            status: ""
        };

        let self = this;

        setTimeout(function () {
            self.init();
        }, 500);
    }

    init() {
        this.setState((prevState) => {
            prevState.list = result.data;
        });

        let self = this;

        setTimeout(function () {
            self.setState((prevState) => {
                prevState.status = "complete";
            });
        }, 400);
    }

    draw(pos) {
        let list = [[], [], [], []];
        this.state.list.forEach(function (ele, index) {
            const current = (index) % list.length;
            list[current].push(<Card data={ele} index={index}/>);
        });
        return list[pos];
    }

    render() {

        return (
            <div className={'t-index-banner ' + this.state.status}>
                <div className="t-center">
                    <h2 className="title">最新消息</h2>
                    <div className="_left">
                        {this.draw(0)}
                    </div>
                    <div className="_middle">
                        {this.draw(1)}
                    </div>
                    <div className="_middle">
                        {this.draw(2)}
                    </div>
                    <div className="_right">
                        {this.draw(3)}
                    </div>
                </div>
            </div>
        )
    }

}

export default Banner