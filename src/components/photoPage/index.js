import React, { Component } from 'react'
import { 
  SafeAreaView,
  Image,
  StyleSheet 
} from 'react-native'
import * as Colors from '../../commons/colors'

class PhotoPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        photoUrl: props.navigation.state.params.photoUrl,
      };
    }
  
    static navigationOptions = {
      headerTintColor: Colors.MAIN_COLOR
    };

    render() {
        const photoUrl  = this.state.photoUrl
        return (
          <SafeAreaView style={styles.MainContainer}>
              <Image
                source={{uri: photoUrl}}
                style={styles.userImage}/>
          </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black'
    },
    userImage: {
        width: '100%',
        aspectRatio: 1,
    },
})

export default PhotoPage;