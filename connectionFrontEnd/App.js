import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    async function getAllStudent() {
      try {
        const students = await axios.get('http://10.0.2.2:8000/api/student'); //for andriod amuilator
        console.log(students.data);
        setStudents(students.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllStudent();
  }, []);

  return (
    // for connection to backend server we Axios libary all time
    <View
      style={{
        flex: 1,
        paddingHorizontal: 40,
        paddingVertical: 40,
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif-condensed',
      }}>
      <Text>App</Text>
      <FlatList
        data={students}
        renderItem={({item}) => (
          <Text style={{fontSize: 28, padding: 20}}>
            {item.stuname}, {item.email}
          </Text>
        )}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default App;
