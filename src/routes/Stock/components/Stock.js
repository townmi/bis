import React, {Component} from 'react';
import './stock.scss';


class Stock extends Component {
    constructor(props) {
        super(props);
    }

    render () {

        // this.setProps((prevProps) => {
        //     prevProps.station = "home";
        // });

        return (
            <div className="t-home">
                12313123
            </div>
        );
    }
}

Stock.propTypes = {
    location: React.PropTypes.object.isRequired
};

export default Stock
