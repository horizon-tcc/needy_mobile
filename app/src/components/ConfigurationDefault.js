import React from 'react';
import { View, TouchableOpacity, Dimensions, Text } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';





class ConfigurationDefault extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        navigateTo: PropTypes.string.isRequired,
        title: PropTypes.string,
        subtitle: PropTypes.bool,
        info: PropTypes.string, 
        icon: PropTypes.element,       
    }

    

    

    render() {
        const { width, height } = Dimensions.get('screen');

        const {navigateTo,title,subtitle, info, icon} = this.props;

        console.log(subtitle)

        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate(navigateTo)}>
                    <View style={{
                        backgroundColor: '#fff',
                        width: width,
                        borderColor: '#b8b8b8',
                        borderWidth: 1,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        borderLeftWidth: 0,

                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        borderRightWidth: 0,
                        marginTop: 20,
                        height: 80,
                    }}>
                        <View style={{
                            backgroundColor: '#fff',
                            height: '100%',
                            width: 80,
                            alignContent: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingBottom: 10,
                        }}>
                           {icon}
                        </View>
                        <Text style={subtitle ? {
                            color: '#000',
                            fontSize: 18,
                            alignSelf: 'flex-start',
                            marginLeft: 70,
                            paddingTop: 8,
                            position: 'absolute',
                        } : {
                            color: '#000',
                            fontSize: 18,
                            alignSelf: 'flex-start',
                            marginLeft: 70,
                            paddingTop: 20,
                            position: 'absolute',                            
                        }}>{title}</Text>
                        
                        <Text style={{
                            color: '#b8b8b8',
                            position: 'absolute',
                            alignSelf: 'flex-start',
                            marginLeft: 70,
                            paddingTop: 40,

                        }}> {subtitle ? info : ''} </Text>

                    </View>
                </TouchableOpacity>
            </View>
        )



    }

 

}



export default withNavigation(ConfigurationDefault);

