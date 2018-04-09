import React from "react";
import "./Container.css";
import RecapModal from '../RecapModal/RecapModal';

//container for calendar
class Container extends React.Component{
    render() {
        return(
            <div className="container">
                <div className="grid-calendar">
                    <div className="row calendar-week-header">
                        <div className="col-xs-1 grid-cell"><span>S</span></div>
                        <div className="col-xs-1 grid-cell"><span>M</span></div>
                        <div className="col-xs-1 grid-cell"><span>T</span></div>
                        <div className="col-xs-1 grid-cell"><span>W</span></div>
                        <div className="col-xs-1 grid-cell"><span>T</span></div>
                        <div className="col-xs-1 grid-cell"><span>F</span></div>
                        <div className="col-xs-1 grid-cell"><span>S</span></div>
                     </div>
                <div className="row calendar-week">
                    <div className="col-xs-1 grid-cell previous-month"><div className="row"><h6>31</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>1</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>2</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>3</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>4</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>5</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>6</h6></div><RecapModal/></div>
                </div>

                <div className="row calendar-week">
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>7</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>8</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>9</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>10</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>11</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>12</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>13</h6></div><RecapModal/></div>
                </div>

                <div className="row calendar-week">
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>14</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>15</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>16</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>17</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>18</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>19</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>20</h6></div><RecapModal/></div>
                </div>

                <div className="row calendar-week">
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>21</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>22</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>23</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>24</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>25</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>26</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>27</h6></div><RecapModal/></div>
                </div>

                <div className="row calendar-week">
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>28</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>29</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>30</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell"><div className="row"><h6>31</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell next-month"><div className="row"><h6>01</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell next-month"><div className="row"><h6>02</h6></div><RecapModal/></div>
                    <div className="col-xs-1 grid-cell next-month"><div className="row"><h6>03</h6></div><RecapModal/></div>
                </div>
        </div>
     </div>
    )
  }
}

export default Container;