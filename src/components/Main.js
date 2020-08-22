import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";

import Note from "./Note";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: "",
      noteArray: []
    };
  }

  addNote() {
    if (this.state.noteText) {
      const d = new Date();
      this.state.noteArray.push({
        date: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
        note: this.state.noteText
      });

      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: "" });
    }
    // console.log(this.state.noteArray[0].date);
  }

  noteDelete(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }
  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return (
        <Note key={key} val={val} noteDelete={() => this.noteDelete(key)} />
      );
    });

    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>-- NOTE --</Text>
        </View>

        {/* ScrollView */}
        <ScrollView style={styles.body}>
          {/* <Note /> */}
          {notes}
        </ScrollView>
        <TouchableOpacity
          style={styles.addButton}
          onPress={this.addNote.bind(this)}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(noteText) => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder=">note"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          ></TextInput>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    justifyContent: "center", //Vertical alignment
    alignItems: "center", // Horizontal alignment words
    backgroundColor: "#E91E63",
    borderBottomWidth: 7,
    borderBottomColor: "#ddd"
  },
  headerText: {
    color: "white",
    fontSize: 18,
    padding: 26
  },
  body: {
    marginBottom: 100
    // backgroundColor: "black"
  },
  addButton: {
    position: "absolute",
    zIndex: 11,
    bottom: 100,
    right: 10,
    backgroundColor: "#E91E63",
    width: 70,
    height: 70,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  },

  addButtonText: {
    color: "#fff",
    fontSize: 30
  },
  footer: {
    backgroundColor: "red",
    position: "absolute",
    zindex: 10,
    bottom: 0,
    left: 0,
    right: 0
  },
  textInput: {
    alignSelf: "stretch",
    color: "#fff",
    padding: 20,
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderTopColor: "#ededed"
  }
});

export default Main;
