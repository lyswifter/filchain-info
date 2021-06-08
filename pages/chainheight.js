import React, { Component } from 'react';
import axios from 'axios'

export default class Chainheight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chainheight: 0,
            tipset: "",
            timer: null,
        };
    }

    fetchdata = function () {
        var data = JSON.stringify({ "id": 0, "jsonrpc": "2.0", "method": "Filecoin.ChainHead", "params": [] });

        var config = {
            method: 'post',
            url: '/api',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic MXRlM3lNTmpiRGVTaUMzRGxFbEg0TE90RlhqOmJiMGYyYjQ2ZGYxODlhMjhkZDVkZWIwNWU1MzdiZjY1'
            },
            data: data
        };

        axios(config)
            .then((response) => {
                // response.data.result.Cids
                var blockcids = []
                response.data.result.Cids.forEach(element => {
                    blockcids.push(element["/"])
                });

                var ret = blockcids.join(",")

                console.log(ret)

                this.setState({
                    chainheight: response.data.result.Height,
                    tipset: ret
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    iTimer = () => {
        this.setState({
          timer: setInterval(() => {
            this.fetchdata()
          }, 10000),
        });
    };

    componentDidMount() {
        this.fetchdata()

        setTimeout(this.iTimer, 0);
    }

    componentWillUnmount() {
        clearInterval(this.state.timer && this.state.timer);
      }

    render() {
        return (
            <div>
                <h2>Filecoin Chain Info</h2>
                <h2>{this.state.chainheight}</h2>
                <h3>{this.state.tipset}</h3>
            </div>
        )
    }
}