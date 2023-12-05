import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native-web";
import colors from "../constants/colors";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};
const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
export default Input;
