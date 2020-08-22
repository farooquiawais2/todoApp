import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class Note extends Component {
  render() {
    return (
      <View key={this.props.key} style={styles.note}>
        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>

        <TouchableOpacity
          style={styles.noteDelete}
          onPress={this.props.noteDelete}
        >
          <Text style={styles.noteDeleteText}>D</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#ededed"
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#E91E63"
  },
  noteDelete: {
    backgroundColor: "#2980b9",
    position: "absolute",
    padding: 10,
    right: 10,
    top: 10,
    bottom: 10,
    justifyContent: "center"
  },
  noteDeleteText: {
    color: "#fff"
  }
});
export default Note;
