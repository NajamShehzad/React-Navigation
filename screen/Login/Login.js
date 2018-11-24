import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { StackActions, NavigationActions } from 'react-navigation';



class Login extends Component {
    constructor(props) {
        super(props);
    }
    naviagte() {
        const resetAction = StackActions.reset({
            index: 1,
            actions: [
                NavigationActions.navigate({ routeName: 'Home' }),
                NavigationActions.navigate({ routeName: 'Dashboard' }),
            ]
        })
        this.props.navigation.dispatch(resetAction)
    }
    render() {
        return (
            <View >
                <Text>
                    This is Login
                </Text>
                <Button
                    title="Change Navigation"
                    onPress={() => this.naviagte()}
                    backgroundColor='lightblue'
                    borderRadius={50}


                />
            </View>
        )
    }

}
export default Login;