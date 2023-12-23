import React from 'react'
import { Text,Button,StyleSheet ,ImageBackground,TouchableOpacity,Image,TextInput} from 'react-native'
import { View } from 'react-native';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import PatientData from './PatientData';
import IPV4 from './ipv4';
import { ScrollView } from 'react-native-gesture-handler';


export default function SearchHis() {
//  let Ip='192.168.1.7'
 let Ip=IPV4
  let encodeData= localStorage.getItem('userToken')
  let userData= jwtDecode(encodeData)
  let [history,setHistory]=useState([])
  let [text,setText]=useState('')

  async function Doc_His()
  {
      let response = await fetch(`http://${Ip}:8000/history?token=${encodeData}`)
      let finalResponse = await response.json() 
      setHistory(finalResponse.Data)
  }
  useEffect(()=>{Doc_His()},[text])
let histor=[...history]
  function searchHandler(text)
  {
    histor= histor.filter((his)=>{return (his[1]===text)})
    setHistory(histor)

  }

  return (
    <View style={{flex: 4, backgroundColor: '#251e51',justifyContent:'center',alignItems:'center',
  }}>
                <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => setText(text)}
              underlineColorAndroid="#f000"
              placeholder="... ابحث"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              returnKeyType="next"
              blurOnSubmit={false}
            />


<TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={()=>{searchHandler(text)}}>
            <Text style={styles.buttonTextStyle}> ابحث</Text>
          </TouchableOpacity>
   <ScrollView>
   {history.map((his,indx)=>

    <PatientData key={indx} hisInfo={his} />)}
 </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({

    square:
    {

        display:'flex',
        justifyContent:'flex-start',
        alignItems:'flex-end',
        width:300,
        height:400
        // position:'absolute',
        // right:'5%',
        // top:'5%'

    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 18,
    
      },
      image:
      {
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'flex-start',
        width:'5%',
        
        


      },
      img:{
        width: 100,
        height: 100,
        borderRadius: 200,
      },
      inputStyle: {
        // flex: 1,
        color: 'white',
        width:'50%',
        paddingVertical:10,
        paddingHorizontal:5,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: '#dadae8',
        marginBottom:20,
        marginTop:20
    
   

      },

      buttonStyle: {
        backgroundColor: '#622da4',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 50,
        alignItems: 'center',
        borderRadius: 30,
        // marginLeft: 35,
        // marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
        margin:'auto',
        justifyContent:'center',
        width:'40%'
      },
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 18,

      },

},)