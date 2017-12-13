import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    Alert,
    TouchableHighlight,
    KeyboardAvoidingView,
    Image
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {firebase} from '../Firebase/firebase'
import { actionCreators , types } from '../redux/recipeRedux'

export default class Recipedetails extends React.Component {
  constructor(props){
    super(props);
  }
  // go throw comments and send to render
  WholeComments() {
  return this.props.Comments.map(function(recipe, i){
        return(
            <View key={i}>
                <Text>{recipe}</Text> 
             </View>
         );
     });
  }
  //send comment to firebase 
  AddComment(){
    // var rand = Math.random()
    // var comeentsRef = firebase.database().ref("2/Comments");
    // comeentsRef.push ({
    //     4: "sssssssssss"
    // });
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
        <View>
              <Text>{this.props.Title}</Text>
              <Image
                style={{width: 70, height: 70}}
                source={{uri: this.props.Image}}
              />
              <Text>{this.props.Description}</Text>
        </View>
          <TextInput
            placeholder="Add Comment"
            autoCapitalize="none"
            returnKeyType="next"
          />
          <TouchableHighlight
            onPress={() => this.AddComment()}
          >
            <Text>ADD</Text>
          </TouchableHighlight>
          {this.WholeComments()}
      </KeyboardAvoidingView>
    );
  }
}