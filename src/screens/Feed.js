import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from "react-native";

import Header from '../components/Header';
import Post from '../components/Post';

class Feed extends Component {
  state = {
    posts: [{
      id: Math.random(),
      nickname: 'Félix Vicente',
      email: 'felixvicent1306@gmail.com',
      image: require('../../assets/imgs/fence.jpg'),
      comments: [{
        nickname: 'Luciene Candido',
        comment: 'Lindo amor'
      },
      {
        nickname: 'Maria Sophia',
        comment: 'Lindo papai'
      }]
    },
    {
      id: Math.random(),
      nickname: 'Luciene Vieira',
      email: 'lucinecandid1404@gmail.com',
      image: require('../../assets/imgs/gate.jpg'),
      comments: [],
    }]
  }

  render(){
    return(
      <View style={ styles.container } >
        <Header />
        <FlatList
          data={ this.state.posts }
          keyExtractor={ item => `${item.id}` }
          renderItem={ ({ item }) => <Post
            key={ item.id }
            { ...item }
          /> }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  }
});

export default Feed;