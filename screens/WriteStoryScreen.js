import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ToastAndroid
} from 'react-native';
import db from '../config';

export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      story: '',
      author: '',
    }
  }
  sumbitStory = async () => {
    db.collection("writestory").add({
      author: this.state.author,
      story: this.state.story,
      title: this.state.title,
    })
    ToastAndroid.show("Your Story has been Submitted", ToastAndroid.SHORT)
  }
  render() {
    return (
      <KeyboardAvoidingView  style={styles.contaniner} behavior='padding' enabled>
        <Text style={styles.head}>STORY HUB</Text>
        <TextInput placeholder="Story Title"
          style={styles.box1}
          onChangeText={(title) => {
            this.setState({
              title: title
            })
          }
          }
          value={this.state.title} />

        <TextInput
          placeholder="Author"
          style={styles.box2}
          onChangeText={(author) => {
            this.setState({ author: author })
          }}
          value={this.state.author}

        />
        <TextInput
          multiline={true}
          placeholder="Write your Story."
          style={styles.box3}
          value={this.state.story}
          onChangeText={(story) => {
            this.setState({ story: story })
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.sumbitStory}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
       
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    marginTop: 40,
    textAlign: 'center',
    backgroundColor: 'rgb(242, 223, 227)',
    color: 'rgb(44, 6, 55)',
    fontSize: 30,
    height: 60,
    fontWeight: 'bold',
    borderColor: 'rgb(44, 6, 55)',
    borderWidth: 4,
    padding: 10,
  },
  box1: {
    marginTop: 60,
    borderColor: 'rgb(44, 6, 55)',
    borderWidth: 3,
    width: 190,
    alignSelf: 'center',
    textAlign: 'center',
    height: 40,
  },
  box2: {
    marginTop: 60,
    borderColor: 'rgb(44, 6, 55)',
    borderWidth: 3,
    width: 190,
    alignSelf: 'center',
    textAlign: 'center',
    height: 40,
  },
  box3: {
    marginTop: 60,
    borderColor: 'rgb(44, 6, 55)',
    borderWidth: 3,
    width: 190,
    height: 230,
    alignSelf: 'center',
    textAlign: 'center',
  },

  button: {
    alignSelf: 'center',
    marginTop: 30,
    backgroundColor: 'rgb(44, 6, 55)',
    width: 100,
    height: 30,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    marginTop: 5,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(242, 223, 227)',
  },
});
