import React from 'react';
import {Navigator,StatusBar,StyleSheet,Text,View} from 'react-native';
import StyleVars from '../StyleVars'
import SharedStyles from '../SharedStyle'
const styles = StyleSheet.create({
    sceneContainer: {
        flex: 1,
        paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight
    },
    navBar: {
        backgroundColor: StyleVars.Colors.navBarBackground,
        borderBottomColor: "rgba(255,255,255,0.5)",
        borderBottomWidth: 1
    },
    buttonStyle: { marginTop: 13 },
    titleStyle: { marginTop: 10 }
});

const NavigationBarRouteMapper = {
    LeftButton: function (route, navigator, index, navState) {
        return route.leftButton ? (
            <route.leftButton
                style={styles.buttonStyle}
                navigator={navigator}
                route={route}
            />
        ) : null;
    },
    Title: function (route, navigator, index, navState) {
        return route.title ? (
            <Text
                style={[styles.titleStyle, SharedStyles.navBarTitleText]}
                numberOfLines={1}
            >{route.title}</Text>
        ) : null;
    },
    RightButton: function (route, navigator, index, navState) {
        return route.rightButton ? (
            <route.rightButton
                style={styles.buttonStyle}
                navigator={navigator}
                route={route}
            />
        ) : null;
    }
};
export default class RootNavigator extends React.Component{
    render(){
        let navigationBar = (
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        );
        return(
            <Navigator
                ref={(navigator)=>this.setNavigatorRef(navigator)}
                initialRoute={this.getInitialRoute()}
                renderScene={(route,navigator)=>this.renderScene(route,navigator)}
                navigationBar={this.state.hideNavigationBar ? null : navigationBar}
            />
        )
    }
}