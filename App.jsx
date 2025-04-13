// import React, { useEffect, useState } from "react"
// import {View,Text, ScrollView, FlatList} from 'react-native';

// export default function App(){
//     const[data,setdata]=useState([])

//    const getAPIData=async()=>{
    
//      const url='https://jsonplaceholder.typicode.com/posts'
//     const result = await fetch(url);

//     console.log('lllll333', result);
    
//     const res= await result.json();

//     console.log('lllll 22222', res);

//      setdata(res)


// }
//     useEffect(()=>{
//         getAPIData();
//     },[])

//     console.log('lllll',data);
    

// //     <View>
// // <Text style={{fontSize:30,padding:20}}>Hello</Text>
// // {data? (<View>
// //     <Text>{data.id}</Text>
// //     <Text>{data.userId}</Text>
    
// // )
// // </View>}
// // </View>

// return (
//     <FlatList>
//     <View>
//     <Text>List with Api call</Text>
//     {
//         data.length?
//         data.map((item)=>
//             <View style={{padding:10,borderBottomColor: "#ccc", borderBottomWidth: 3}}>
//                 <Text style={{fontsize:30}}>Id :{item.id}</Text>
//                 <Text style={{fontsize:30}}>Title:{item.title}</Text>
//                 <Text style={{fontsize:30}}>Title:{item.body}</Text>
    
//                 </View>
//         ):
//         null
    
//     }
    
    
//     </View>
//     </FlatList>
//       );
    
    
//     }
//     import React, { useState } from 'react';
// import { View,Text,TouchableOpacity,StyleSheet } from 'react-native';

// export default function App(){

//     const[selected,setSelected]= useState(2)

//     const arr={{}
        
//     }

//     return(
//         <View style={Styles.main}>
            {/* <TouchableOpacity  onPress={()=>setSelected(1)}>
                <View style={Styles.radio_wrap}>
                <View style={Styles.radio}>
                    {
                        selected===1?<View style={Styles.radioBg}></View>:null
                    }
                
                </View>
                
                    <Text style={Styles.radioText}> Radio 1</Text>
                </View>
                
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>setSelected(2)}>
                <View style={Styles.radio_wrap}>
                <View style={Styles.radio}>
                {
                        selected===2?<View style={Styles.radioBg}></View>:null
                    }
                </View>
                    <Text style={Styles.radioText}> Radio 2</Text>
                </View>
                
            </TouchableOpacity> */}

//         </View>

//     )
// }

// const Styles= StyleSheet.create({

//     main:{
//         flex:1,
//         alignItems:'center',
//         justifyContent:'center',
//     },

// radio:{
//         height:40,
//         width:40,
//         borderColor:"black",
//         borderWidth:2,
//         borderRadius:20,
//         margin:10


//     },
// radioText:{
//     fontSize:20


// },
// radioBg: {
//     backgroundColor: 'black',
//     height: 28,
//     width: 28,
//     borderRadius: 50,

//     margin: 5,
// },

// radio_wrap:{
//     flexDirection:'row',
//     alignItems:'center'




// }


// }

// )
import React, { useEffect, useState } from 'react'

import {View,Text,StyleSheet, FlatList,Image} from 'react-native'



function App() {

    const [products,setProduct]=useState([]);
    

    useEffect(
        ()=>{
            getAllProducts();
            console.log('innnnnnsidethef',getAllProducts)
    
        },[]
    );
    const getAllProducts= async()=>{

    const response= await fetch('https://fakestoreapi.com/products')
    console.log('lohhhh',response)
    const data =await response.json();
    console.log('Fetched data:', data);
    setProduct(data)
    console.log('data...',setProduct)
}
  return (
    <View>
        <FlatList data={products} renderItem={ProductCard} keyExtractor={(item)=>item.id}/>


        </View>)
};

const ProductCard=({item})=> {
    console.log(item.image)
    return(
        <View style={style.ProductCard}>
            <Image source={{ uri: item.image }} style={style.image} />

            <Text>{item.title}</Text>
        </View>
    )
}
const style=StyleSheet.create(
    {
        ProductCard:{
            backgroundColor:'white',
            borderWidth:1,
            padding:10,
            borderColor:'pink',
            elevation:20,
            margin:10,
            borderRadius:10
        },
        image:{
            height:100,
            resizeMode:'cover'
        }
    }
)
 

export default App