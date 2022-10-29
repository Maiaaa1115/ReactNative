import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { useState } from "react";

import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from "react-native";



export default function Dashboard({ navigation }) {
    const [entertask, setEnterTask] = useState("");
    const [listtask, setListTask] = useState([]);

    function taskInputHandler(dummy_text) {
        console.log(dummy_text);
        setEnterTask(dummy_text);
    }

    function addTaskHandler() {
        setListTask((currentTask) => [...currentTask, entertask]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.h1}> DashBoard </Text>
            {/* <Text style={styles.TextStyle}>Pokemon World2</Text>
      <Text style={styles.TextStyle}>Pokemon World3</Text> */}
            <StatusBar style="auto" />
            {/* <Button style={styles.button} title="TAP ME!" onPress={addTaskHandler} /> */}
            {/* <TouchableOpacity onPress={addTaskHandler}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>TAP ME!</Text>
        </View>
      </TouchableOpacity> */}

            <View style={FormStyle.Forms}>
                <View style={FormStyle.inputContainer}>
                    <TextInput
                        placeholder="Add Task Here"
                        onChangeText={taskInputHandler}
                        style={styles.TextInput}
                    ></TextInput>
                    {/* <Button style={styles.button} title="Add Task" onPress={addTaskHandler} /> */}
                    <TouchableOpacity onPress={addTaskHandler}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>ADD TASK</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={FormStyle.tasksContainer}>
                    <Text style={FormStyle.textInput}>Task List</Text>
                    <Text style={styles.TextStyle}>Pokemon World2</Text>
                    <Text style={styles.TextStyle}>Pokemon World3</Text>
                    {listtask.map((goal) => (
                        <Text style={styles.tasks}>{goal}</Text>
                    ))}
                </View>
            </View>
        </View>
    );
}



const FormStyle = StyleSheet.create({
    Forms: {
        marginTop: 10,
        flex: 1,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 50,
        // marginVertical: "80%",
        // borderBottomWidth: 1,
        // borderBottomColor: "#D3D3D3",
    },
    textInput: {
        marginVertical: 10,
        fontSize: 20,
        fontWeight: "bold",
        width: "80%",
    },
    recentSearches: {
        width: "100%",
        transform: [{ rotateY: "180deg" }],
    },
    tasksContainer: {
        // backgroundColor: "#D3D3D3",
        paddingVertical: 16,
        paddingHorizontal: 30,
        borderRadius: 15,
        marginVertical: 20,
        marginHorizontal: 16,
        elevation: 3,
        color: "black",
    },
});
const styles = StyleSheet.create({
    container: {
        padding: 50,
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: "#F7F6F2",
        // marginHorizontal: "10%",
    },

    tasks: {
        margin: 10,
    },

    h1: {
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
        marginBottom: 30,
        borderBottomColor: "#D3D3D3",
        borderBottomWidth: 3,
    },

    // TextStyle: {
    //   marginBottom: 16,
    //   marginHorizontal: 16,
    //   padding: 16,
    //   borderRadius: 15,
    //   // backgroundColor: "#D3D3D3",
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   // paddingVertical: 12,
    //   // paddingHorizontal: 32,
    //   // borderRadius: 4,
    //   elevation: 3,
    //   color: "black",
    // },

    TextInput: {
        marginHorizontal: "5%",
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 1,
        color: "black",
    },

    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        marginHorizontal: "5%",
    },
});