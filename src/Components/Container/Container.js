import React from "react";
import "./Container.css";
import RecapModal from '../RecapModal/RecapModal';

//container for calendar
class Container extends React.Component{
    constructor(props, context) {
        super(props, context);

    }
    render() {
        return(
            <div className="container">
                <div className="grid-calendar">
                    <div className="row calendar-week-header">
                        <div className="col-xs-1 grid-cell"><div><div><span>S</span></div></div></div>
                        <div className="col-xs-1 grid-cell"><div><div><span>M</span></div></div></div>
                        <div className="col-xs-1 grid-cell"><div><div><span>T</span></div></div></div>
                        <div className="col-xs-1 grid-cell"><div><div><span>W</span></div></div></div>
                        <div className="col-xs-1 grid-cell"><div><div><span>T</span></div></div></div>
                        <div className="col-xs-1 grid-cell"><div><div><span>F</span></div></div></div>
                        <div className="col-xs-1 grid-cell"><div><div><span>S</span></div></div></div>
                     </div>

        <div className="row calendar-week">
            <div className="col-xs-1 grid-cell previous-month"><div><div><span>31 </span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>1 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>2 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>3 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>4 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>5 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>6 <RecapModal/></span></div></div></div>
        </div>

        <div className="row calendar-week">
            <div className="col-xs-1 grid-cell"><div><div><span>7 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>8 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>9 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>10 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>11 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>12 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>13 <RecapModal/></span></div></div></div>
        </div>

        <div className="row calendar-week">
            <div className="col-xs-1 grid-cell"><div><div><span>14 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>15 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>16 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>17 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>18 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>19 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>20 <RecapModal/></span></div></div></div>
        </div>

        <div className="row calendar-week">
            <div className="col-xs-1 grid-cell"><div><div><span>21 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>22 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>23 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>24 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>25 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>26 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>27 <RecapModal/></span></div></div></div>
        </div>

        <div className="row calendar-week">
            <div className="col-xs-1 grid-cell"><div><div><span>28 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>29 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell"><div><div><span>30 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell next-month"><div><div><span>1 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell next-month"><div><div><span>2 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell next-month"><div><div><span>3 <RecapModal/></span></div></div></div>
            <div className="col-xs-1 grid-cell next-month"><div><div><span>4 <RecapModal/></span></div></div></div>
        </div>
        </div>
        </div>
        )
    }
}

export default Container;