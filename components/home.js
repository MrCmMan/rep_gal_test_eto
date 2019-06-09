import React from 'react';
import { StyleSheet, View,Image, SafeAreaView,FlatList,Dimensions,TouchableWithoutFeedback,ActivityIndicator} from 'react-native';
import axios from 'axios';
import {createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'; 
import Full_img from './full_img_screen'



//Класс основного экрана
class Home extends React.Component
{
    constructor(props) 
    { 
        super(props)
        this.state = { }
    }
    
    //Функция по получению данных о изображении
    componentDidMount() {
        this.props.getData(); 
    }
    
    
    static navigationOptions = {
        title: 'Home',
        headerStyle: {backgroundColor: '#000080',},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold',},
    };


    render(){
        //Если изображения все еще грузятся то отображать значек загрузки
         if (this.props.loading) {
             console.log(styles.image.height);
            return (
                <View style={styles.loading}>
                    <ActivityIndicator size='large'  animating={true}/>
                </View>
            );
        } else {
        
            //Если изображения загрузились то вывесть
        return(
            <SafeAreaView style={styles.container}>
            <View style={styles.container}>
            <FlatList style={styles.flatListStyle} data={this.props.data} numColumns={2} renderItem={({item})=>{
            return (
                <TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>
                    <View>
                        <Image style={styles.image} source={{uri: item.url_s}} />
                    </View>
                </TouchableWithoutFeedback>
            )}
            } />
            </View>
            </SafeAreaView>
      ) }
    }
    
    //Функция для открытия изображения на весь экран
    actionOnRow(item) {
        console.log(item)
        this.props.navigation.navigate('Full_img', {
            url_im:  item.url_s,
            title:item.title
        });
    }
    
}


function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data,
        
    }  
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
  }, 
    image: {
        width: (Dimensions.get('window').width / 2) - 20,
        height: 150,
        margin: 10,
    },
    flatListStyle: { flex: 1,},
    loading: {
    position: 'absolute',
        left: 0,
        right: 0,
            top: 0,
            bottom: 0,
            opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

