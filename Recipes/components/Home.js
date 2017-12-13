import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    TextInput,
    Alert,
    Image
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {firebase} from '../Firebase/firebase'
import { actionCreators , types } from '../redux/recipeRedux'

export default class Home extends React.Component {
  constructor(){
    super();
    this.state = {
        Recipes: []
    }
  }
  //fetch the data from firebast
  componentWillMount(){
    var OriginThis = this;
    var ref = firebase.database().ref();
    ref.on("value", function(snapshot) {
        this.Data = snapshot.val()
        for (var key in this.Data){
            OriginThis.setState({Recipes: OriginThis.state.Recipes.concat(this.Data[key])})
        }
                    }, function (error) {
                             console.log("Error: " + error.code);
                        });  
  }
  WholeRecipes() {
  return this.state.Recipes.map(function(recipe, i){
        return(
            <View key={i}>
                <TouchableHighlight
                        onPress={() => Actions.recipedetails({Title:recipe.Title   ,Description:recipe.Description   ,Image:recipe.Image ,Comments:recipe.Comments })}
                    >
                    <Image
                      style={{width: 70, height: 70}}
                      source={{uri: recipe.Image }}
                    />
                </TouchableHighlight>  
             </View>
         );
     });
  }
  render() {
    return (
        <View>
            <Text style={styles.header}>
                 Recipes
            </Text>
            {this.WholeRecipes()}
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        textAlign: 'center'
    },
    header: {
        color: 'black',
        textAlign: 'center',
        opacity: 0.8,
        fontWeight: '700',
        fontSize: 40
    }  
});