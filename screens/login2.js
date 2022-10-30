import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  Platform,
  TextInput,
} from "react-native";
import Constants from "expo-constants";

const baseUrl = "http://lionbackend-env.eba-jyvydwg3.ap-southeast-1.elasticbeanstalk.com/api";

export default function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasswd] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const onChangeNameHandler = (fullName) => {
    setFullName(fullName);
  };

  const onChangePasswdHandler = (passwd) =>{
    setPasswd(passwd);
  };

  const onChangeEmailHandler = (email) => {
    setEmail(email);
  };

  const onSubmitFormHandler = async (event) => {
    if (!fullName.trim() || !email.trim()) {
      alert("Name or Email is invalid");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/login`, {
        email,
        password,
      });
      if (response.status === 201) {
        alert(` You have created: ${JSON.stringify(response.data)}`);
        setIsLoading(false);
        setFullName('');
        setEmail('');
      } else {
        throw new Error("An error has occurred");
      }
    } catch (error) {
      alert("An error has occurred");
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View style={styles.wrapper}>
          {isLoading ? (
            <Text style={styles.formHeading}> Creating resource </Text>
          ) : (
            <Text style={styles.formHeading}>Create new user</Text>
          )}
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="email"
            placeholderTextColor="#ffffff"
            style={styles.input}
            value={fullName}
            editable={!isLoading}
            onChangeText={onChangeEmailHandler}
          />
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="password"
            placeholderTextColor="#ffffff"
            style={styles.input}
            value={password}
            editable={!isLoading}
            onChangeText={onChangePasswdHandler}
          />
        </View>
        <View>
          <Button
            title="Submit"
            onPress={onSubmitFormHandler}
            style={styles.submitButton}
            disabled={isLoading}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252526",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
  formHeading: {
    color: "#ffffff",
  },
  wrapper: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: "grey",
    minWidth: 200,
    textAlignVertical: "center",
    paddingLeft: 10,
    borderRadius: 20,
    color: "#ffffff",
  },
  submitButton: {
    backgroundColor: "gray",
    padding: 100,
  },
});