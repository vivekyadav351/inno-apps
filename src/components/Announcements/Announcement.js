import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'

import Banner from '../Banner/Banner'
import Boxes from './Boxes/Boxes'
import './Announcements.css'

const Announcement = () => {
    return (
        <div className="announncements">
            <Banner>
                <h3>New Announcements</h3>
            </Banner>
            <Switch>
                
                <div className="card">
                    <p>We will be closed on the coming Monday due to Govt orders</p>
                    <div className="date">
                        <span>23-May-2020 5pm</span>
                    </div>
                    <Link to="/announcements"><button>Show all</button></Link>
                </div>

                
            </Switch>
            
        </div>

    )
}

export default Announcement
