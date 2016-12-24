/**
 * Created by townmi on 16/12/18.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import './Card.scss';

const reset = function () {
    return {
        __html: "fix!"
    }
};

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {data, index} = this.props;

        return (
            <div className={' t-card '+ data.type + ' _a-' + index}>
                <h2 className="_title">
                    <Link to={'/blog/'+data.id}>
                        {data.title}
                    </Link>
                </h2>
                <div className="_img-holder">
                    <img src={data.imgUrl} alt=""/>
                </div>
                <p>{data.info}</p>
                <span>{data.date}</span>
            </div>
        )
    }
}

export default Card