import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Button} from 'react-native-elements';



class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View >
                <Text>
                    This is Home!
                </Text>
                <Button
                    title="Change Navigation"
                    onPress={() => this.props.navigation.navigate('Login')}
                    backgroundColor='lightblue'
                    borderRadius={50}
                    
                
                />
            </View>
        )
    }

}
export default Home;