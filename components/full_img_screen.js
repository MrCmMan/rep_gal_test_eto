import React from 'react';
import { StyleSheet, View,Image, SafeAreaView,Dimensions,TouchableWithoutFeedback} from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';


//Класс экранна для полного изображения
class Full_img extends React.Component
{
static navigationOptions = {
     header: null,
  }
    render(){
        const { navigation } = this.props;
        const image = navigation.getParam('url_im');
        return (
           <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image style={styles.fullimage} source={{uri: image}} />
      </View>
    ) }
    
}

const mapStateToProps = state => ({ });

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Full_img);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
  }, 
    flatListStyle: { flex: 1,}, 
    fullimage:{
        width: (Dimensions.get('window').width),
        height: (Dimensions.get('window').height ),
        margin: 10,  
    }
});
