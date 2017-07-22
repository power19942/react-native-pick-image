/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
        TouchableOpacity, Image
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';




export default class SocialApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            path:null
        };
    }
    render() {
        let image = this.state.path;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {
                    ImagePicker.openPicker({
                        width: 300,
                        height: 400,
                        cropping: true
                    }).then(image => {
                        this.setState({
                            path:image.path
                        })
                    });
                }}>
                    <Text>Click</Text>
                </TouchableOpacity>
                {image &&
                <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SocialApp', () => SocialApp);
