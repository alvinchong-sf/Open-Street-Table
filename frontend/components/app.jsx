import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import Modal from './modal/modal';  
import NavBarContainer from './nav_bar/nav_bar_container';
import Error from "./error";
import Home from "./home/home"; 
import RestaurantShowContainer from './restaurant/restaurant_show_container';
import CityShowContainer from './city/city_show_container';
import UserShowContainer from './user/user_show_container';
// import ReviewEditContainer from './review/review_edit_container';

const App = () => {
    return (
        <div>
            < Modal />
            <NavBarContainer/>
            {/* <Route path="/" component={NavBarContainer}/> */}
            <Switch>
                <Route exact path="/" component={Home}/>
                {/* <Route exact path ="/myprofile" component={UserShowContainer} /> */}
                <ProtectedRoute exact path ="/myprofile" component={UserShowContainer} />
                <Route exact path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
                {/* <Route exact path="/restaurants/:restaurantId" component={ReviewEditContainer} /> */}
                <Route exact path="/cities/:cityId" component={CityShowContainer} />
                <Route component={Error}/>
            </Switch>

        </div>
    )
};
export default App; 


