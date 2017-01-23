import React, {Component} from 'react';
import './stock.scss';

let data = [];

class Stock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: "loading"
        };

        let self = this;

        let promise = $.getScript("//cdn.bootcss.com/highstock/5.0.7/highstock.js");

        promise = promise.then(function () {
            return $.get("http://127.0.0.1:9090/stock")
        });
        promise.then(function (res) {
            $.parseJSON(res).forEach(function (cell, index) {
                data.push([new Date(cell.Date).getTime(), cell.CloseAtCash])
            });
            self.setState((prevState) => {
                prevState.status = "complete";
            });
        });

    }
    componentDidUpdate() {
        console.log(1);
        if($ && $.fn.highcharts) {
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
            return <div id="stockContainer"></div>;
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

Stock.propTypes = {
};

export default Stock
