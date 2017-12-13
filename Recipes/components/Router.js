import {Actions, Scene, Router} from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="signup" component={Signup} />
    <Scene key="login" component={Login} />
    <Scene key="home" component={Home} />
    <Scene key="recipedetails" component={Recipedetails} />
  </Scene>
);

class App extends React.Component {
  render() {
    return <Router scenes={scenes}/>
  }
}