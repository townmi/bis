import React, {Component} from 'react';
import './stock.scss';
import config from '../config.json';
let data = [];

class Stock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: "loading"
        };

        let self = this;

        let promise = $.getScript(config.script.highstock);

        promise = promise.then(function () {
            return $.get(config.api.sztmp)
        });
        promise.then(function (res) {
            $.parseJSON(res).forEach(function (cell) {
                data.push([cell.Date*1000, cell.CloseAtCash])
            });
            self.setState((prevState) => {
                prevState.status = "complete";
            });
        });

    }

    componentDidUpdate() {

        if ($ && $.fn.highcharts) {
            $('#stockContainer').highcharts('StockChart', {
                rangeSelector: {
                    selected: 1
                },

                title: {
                    text: 'AAPL Stock Price'
                },

                series: [{
                    name: 'AAPL',
                    data: data,
                    tooltip: {
                        valueDecimals: 2
                    }
                }]
            });
        }

    }

    draw() {
        if (this.state.status == "loading") {
            return <div>loading</div>;
        } else {
            return <div id="stockContainer" className="t-chart"></div>;
        }

    }

    render() {

        console.log(this.state.status);

        return (
            <div className="t-home">
                {this.draw()}
            </div>
        );
    }
}

Stock.propTypes = {};

export default Stock
