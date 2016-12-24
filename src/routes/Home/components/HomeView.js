import React, {Component} from 'react';
import DuckImage from '../assets/Duck.jpg';
import './HomeView.scss';

import Banner from '../modules/banner';

class HomeView extends Component {
    constructor(props) {
        super(props);



    }
    render () {

        // this.setProps((prevProps) => {
        //     prevProps.station = "home";
        // });

        return (
            <div className="t-home">
                <Banner location="index"/>
            </div>
        );
    }
}

HomeView.propTypes = {
    location: React.PropTypes.object.isRequired
};

export default HomeView
