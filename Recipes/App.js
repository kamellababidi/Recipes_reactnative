import React, { Component } from 'react';
import { Platform, StyleSheet, Text, Alert, View } from 'react-native';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Recipedetails from './components/Recipedetails';
import {Scene, Router} from 'react-native-router-flux';
import { actionCreators } from './redux/recipeRedux'

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    // //recive info from signup and put it in the store 
    // onSetEmail(info){ 
    //     const {store} = this.props 
    //     store.dispatch(actionCreators.SET_EMAIL_PASSWORD(info))
    //     // Alert.alert(store.getState().email.toString())
    // }
    render() {
        return <Router>
                    <Scene key="root">
                    <Scene key="signup" component={Signup} initial title="Signup" hideNavBar/>
                    <Scene key="login" component={Login} title="Login" hideNavBar/>
                    <Scene key="home" component={Home} title="Home" hideNavBar/>
                    <Scene key="recipedetails" component={Recipedetails} title="Details"/>
                    </Scene>
                </Router>

    }
}