import React from 'react';

import {
    View,
     Image,
     StyleSheet,
    } from 'react-native'; 

    export default class ImageView extends React.Component{
       render(){
        return(
            <View style = {styles.imageViewContainer}>
                
                {/*Picsum is width/height for random image*/}
                    <Image source={{uri: 'https://picsum.photos/150/150/?random'}}
                        style ={{flex: 1}}
                    /> 
                {/*Picsum is width/height for random image*/}
                    <Image source={{uri: 'https://picsum.photos/g/150/150/?random'}}
                        style ={{flex: 1}}
                    /> 
                {/*Picsum is width/height for random image*/}
                    <Image source={{uri: 'https://picsum.photos/150/150/?random'}}
                        style ={{flex: 1}}
                    /> 
            
           </View> 
        ); 
       }
    }

    const styles =  StyleSheet.create({
        imageViewContainer: {
            flexDirection: 'column',
            backgroundColor: '#193441',
            marginTop: 50
          },
          imageRowContainer: {
            flex: 1,
            flexDirection: 'row',
            height: 200
          },
    });