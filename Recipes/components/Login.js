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
export default class Login extends Component<{}> {
  constructor(props){
    super();
    this.state = {
        email: '',
        password: ''
    };
  }

  //authintication with database
  async login(){
    let ErrorInLogin=undefined;
    await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            ErrorInLogin=error
        });
    //Check if the there is errors or not
    if(ErrorInLogin == undefined)
      Actions.home() 
    else
      Alert.alert(ErrorInLogin.toString())  
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Text style={styles.header}>
                    Login
                    </Text>
                <View style={styles.log}>
            
                    <TextInput
                        placeholder="username"
                        autoCapitalize="none"
                        returnKeyType="next"
                        onChangeText={value =>
                            this.setState({ email: value })}
                        style={styles.input}
                    />

                    <TextInput
                        placeholder="password"
                        secureTextEntry={true}
                        onChangeText={value =>
                            this.setState({ password: value })}
                        style={styles.input}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        backgroundColor: 'yellow'
                    }}
                >
                    <TouchableHighlight
                        style={styles.buttonRow}
                        onPress={() => this.login()}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.buttonRow}
                        onPress={() => Actions.signup()}
                    >
                        <Text style={styles.buttonText}>Back to Signup</Text>
                    </TouchableHighlight>
                </View>
       </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
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