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
        const {data} = this.props;

        return (
            <div className={data.type + ' t-card'} data-id={data.id}>
                <h2>{data.title}</h2>
                <p>{data.info}</p>
                <span>{data.date}</span>
            </div>
        )
    }
}

export default Card