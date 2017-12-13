import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight,
    Button,
    Alert,
    KeyboardAvoidingView
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {firebase} from '../Firebase/firebase'
import { actionCreators , types } from '../redux/recipeRedux'

export default class Signup extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
        email: '',
        password: ''
    };  
  }
  //send data to database for registeration
  async signup() {
    let ErrorInSignup = undefined;
    await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        ErrorInSignup = errorMessage
        });
    if(ErrorInSignup == undefined)
        Actions.login()
    else
        Alert.alert(ErrorInSignup.toString())
        
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text style={styles.header}>
                    Recipes
                </Text>
                <View style={styles.log}>
            
                    <TextInput
                        placeholder="Email"
                        autoCapitalize="none"
                        returnKeyType="next"
                        onChangeText={(value) => 
                            this.setState({email:value})}
                        style={styles.input}
                    />

                    <TextInput
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={value =>
                            this.setState({password:value})}
                        style={styles.input}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        backgroundColor: 'green'
                    }}
                >
                    <TouchableHighlight
                        style={styles.buttonRow}
                        onPress={() => this.signup()}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.buttonRow}
                        onPress={() => Actions.login()}
                    >
                        <Text style={styles.buttonText}>Go To Login</Text>
                    </TouchableHighlight>
                </View>
       </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        justifyContent: 'center'
    },
    log: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    header: {
        color: 'black',
        marginTop: 5,
        textAlign: 'center',
        opacity: 0.8,
        marginBottom: 30,
        fontWeight: '700',
        fontSize: 60
    },
    input: {
        height: 40,
        width: 200,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        textAlign: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 17,
        fontWeight: '900'
    },
    buttonRow: {
        backgroundColor: 'black',
        paddingVertical: 5,
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'red',
        height: 40,
        width: 140
    }
});