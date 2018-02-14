import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    componentDidMount() {
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {
        var value = await AsyncStorage.getItem('user');
        if(value != null) {
            this.props.navigation.navigate('Profile');
        }
    }

    render() {
        return (
                <View style={ styles.container }>
                    <Text style={ styles.header } >- Login -</Text>                                 
                </View>
        );
    }

    
}




const styles = StyleSheet.create({

});
