import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import useFirebase from "../useFirebase";
export default Home = () => {
  const { getData, data, setFirebaseData } = useFirebase();
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (data != null) {
      setIsEnabled1(data.thing1.value);
      setIsEnabled2(data.thing2.value);
      setIsEnabled3(data.thing3.value);
      setIsEnabled4(data.thing4.value);
      setIsEnabled5(data.thing5.value);
      setIsEnabled6(data.thing6.value);
      setIsEnabled7(data.thing7.value);
      setIsEnabled8(data.thing8.value);
    }
  }, [data]);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const [isEnabled4, setIsEnabled4] = useState(false);
  const [isEnabled5, setIsEnabled5] = useState(false);
  const [isEnabled6, setIsEnabled6] = useState(false);
  const [isEnabled7, setIsEnabled7] = useState(false);
  const [isEnabled8, setIsEnabled8] = useState(false);
  const toggleSwitch1 = () => {
    setFirebaseData("thing1", !isEnabled1);
  };
  const toggleSwitch2 = () => {
    setFirebaseData("thing2", !isEnabled2);
  };
  const toggleSwitch3 = () => {
    setFirebaseData("thing3", !isEnabled3);
  };
  const toggleSwitch4 = () => {
    setFirebaseData("thing4", !isEnabled4);
  };
  const toggleSwitch5 = () => {
    setFirebaseData("thing5", !isEnabled5);
  };
  const toggleSwitch6 = () => {
    setFirebaseData("thing6", !isEnabled6);
  };
  const toggleSwitch7 = () => {
    setFirebaseData("thing7", !isEnabled7);
  };
  const toggleSwitch8 = () => {
    setFirebaseData("thing8", !isEnabled8);
  };
  return (
    <View style={styles.container}>
      <View style={styles.cell}>
        <Text style={styles.text}>Thing 1</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled1 ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch1}
          value={isEnabled1}
        />
      </View>
      <View style={styles.cell}>
        <Text style={styles.text}>Thing 2</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch2}
          value={isEnabled2}
        />
      </View>
      <View style={styles.cell}>
        <Text style={styles.text}>Thing 3</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled3 ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch3}
          value={isEnabled3}
        />
      </View>
      <View style={styles.cell}>
        <Text style={styles.text}>Thing 4</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled4 ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch4}
          value={isEnabled4}
        />
      </View>
      <View style={styles.cell}>
        <Text style={styles.text}>Thing 5</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled5 ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch5}
          value={isEnabled5}
        />
      </View>
      <View style={styles.cell}>
        <Text style={styles.text}>Thing 6</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled6 ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch6}
          value={isEnabled6}
        />
      </View>
      <View style={styles.cell}>
        <Text style={styles.text}>Thing 7</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled7 ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch7}
          value={isEnabled7}
        />
      </View>
      <View style={styles.cell}>
        <Text style={styles.text}>Thing 8</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled8 ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch8}
          value={isEnabled8}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  cell: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
