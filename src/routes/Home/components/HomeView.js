import React from 'react';
import DuckImage from '../assets/Duck.jpg';
import './HomeView.scss';

import Banner from '../modules/banner';

export const HomeView = () => (
    <div className="t-home">
        <Banner location="index"/>
    </div>
);

export default HomeView
