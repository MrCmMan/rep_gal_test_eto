/*
Приложение-галерея на основе поиска фото по сервису flickr.com. 
Выполнено в качестве тестового задания на летнюю стажировку 2019 в ЭТО_ Инкубаторе по направлению Ract-Native.
Исполнитель: Юлдашев Евгений Геннадьевич
Email: stark2033@gmail.com
*/
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions} from 'react-navigation';
import store from './store'; // Импорт store для Redux
import navigator from './components/navStack'; // Импорт StackNavigator'а
const AppContainer = createAppContainer(navigator);
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}
