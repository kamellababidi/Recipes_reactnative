import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import { createStore } from 'redux'
import { reducer } from './redux/recipeRedux'
const store = createStore(reducer)
const AppWithStore = () => <App store={store} />

AppRegistry.registerComponent('Recipes', () => AppWithStore);
