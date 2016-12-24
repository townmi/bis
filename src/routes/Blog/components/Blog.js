import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

import './Blog.scss';

class Blog extends Component {

    constructor(props) {
        super(props);
        this.init();
    }

    init () {
        const id = this.props.params.id;
        this.props.location.state = "blog";

        console.log(this)
    }

    render() {
        return (
            <div className="t-blog">
               <div className="t-center">
                   <h2 className="title">123</h2>
               </div>
            </div>
        )
    }
}

Blog.propTypes = {
    location: React.PropTypes.object.isRequired,
    router: React.PropTypes.object.isRequired
};

export default withRouter(Blog);
