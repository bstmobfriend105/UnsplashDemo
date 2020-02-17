import React, { Component } from 'react'
import { 
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  View, 
  Text, 
  StyleSheet 
} from 'react-native'
import * as Colors from '../../commons/colors'

class UserPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userFields: props.navigation.state.params.userFields,
      };
    }
  
    static navigationOptions = {
      headerTintColor: Colors.MAIN_COLOR
    };

    actionOnRow(item) {
        const { navigate } = this.props.navigation;
        navigate('Photo', { photoUrl: item.urls.small })
     }
    renderItem(item) {
        return (
            <TouchableOpacity  style={styles.thumbContainer} onPress={ () => this.actionOnRow(item)}>
            <Image
                source={{uri: item.urls.thumb}}
                style={styles.thumbImage}/>
            </TouchableOpacity >
        );
      }

    FlatListItemSeparator = () => {
        return (
          <View style={styles.separator}/>
        );
      }

    render() {
        const userFields  = this.state.userFields
        return (
          <SafeAreaView style={styles.MainContainer}>
              <Text style={styles.userName}>{userFields.name}</Text>
              <Image
                source={{uri: userFields.profile_image.large}}
                style={styles.userImage}/>
            <FlatList
                numColumns={2}                  // set number of columns 
                columnWrapperStyle={styles.row}  // space them out evenly
                data={userFields.photos}
                keyExtractor={(item) => item.id }
                renderItem={({item}) => this.renderItem(item)}
                ItemSeparatorComponent = { this.FlatListItemSeparator }
            />  
          </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    userName: {
        fontSize: 28,
        marginTop: 20,
        color: Colors.HIGHLIGHT_COLOR
    },
    userImage: {
        marginTop: 20,
        marginBottom: 20,
        width: 160,
        aspectRatio: 1,
        borderRadius: 80,
    },
    separator: {
        height: 10,
        width: "100%",
        backgroundColor: "transparent",
    },
    row: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    thumbContainer: {
        width: '45%',
        marginLeft: 10,
      },
    thumbImage: {
        width: '100%',
        aspectRatio: 1,
    },
})

export default UserPage;