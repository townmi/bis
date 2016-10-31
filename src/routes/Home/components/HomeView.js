import React from 'react';
import DuckImage from '../assets/Duck.jpg';
import './HomeView.scss';

const reset = function () {
    return {
        __html: "fix!"
    }
};

export const HomeView = () => (
    <div className="bis-home">
        <div className="bis-banner" data-html={reset().__html}>
            <img src={"http://source.vipabc.com/ext/images/website/abc/linkage_page/avis/bgLP.jpg"} alt=""/>
        </div>
    </div>
);

export default HomeView
