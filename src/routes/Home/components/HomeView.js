import React from 'react';
import DuckImage from '../assets/Duck.jpg';
import './HomeView.scss';

import Card from '../../../components/Card';

const reset = [
    {
        id: "1",
        title: "测试一",
        date: "2016-12-31 11:11:11",
        info: "这是一段间断的测试文字",
        type: "normal"
    },
    {
        id: "2",
        title: "测试二",
        date: "2016-12-31 11:11:12",
        info: "二阿呆啊喂啊大师大师dasd",
        class: "normal"
    }
];

let items = [];

reset.forEach(function(index, ele){
    items.push(<Card data = { index }/>);
});

export const HomeView = () => (
    <div className="bis-home">
        {/*<div className="bis-banner" data-html={reset().__html}>*/}
        {/*<img src={"http://source.vipabc.com/ext/images/website/abc/linkage_page/avis/bgLP.jpg"} alt=""/>*/}
        {/*</div>*/}

        <div className="t-banner">
            <div className="t-center">
                {items}
            </div>
        </div>
    </div>
);

export default HomeView
