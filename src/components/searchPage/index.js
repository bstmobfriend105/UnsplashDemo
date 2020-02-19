import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    FlatList,
} from 'react-native'
import { Icon } from 'react-native-elements'
import SafeAreaView from 'react-native-safe-area-view';
import { searchUsers } from '../../actions'
import Loader from '../../commons/loader'
import * as Colors from '../../commons/colors'

function CardItem({ fields, navigate }) {
  function onClickInfo() {
    navigate('User', {userFields: fields})
  };

  return (
    <TouchableOpacity onPress={onClickInfo}>
      <View style={styles.cardItem}>
        <Text style={styles.cardTitle}>{fields.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

class SearchPage extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        userName: '',
        isSearched: false
      }
    }

    static navigationOptions = {
      headerTintColor: Colors.MAIN_COLOR
    };

    searchUnsplashUsers = () => {
      this.setState({ isSearched: true })
      this.props.searchUsers(this.state.userName);
    }

    render() {
      const { navigate } = this.props.navigation;
      const { isLoading, isError, userList } = this.props;
      const { userName, isSearched } = this.state;
        return (
            <SafeAreaView style={styles.MainContainer}>
                <Loader loading={isLoading} />
                <View style={styles.InputContainer}>
                <TextInput
                  underlineColorAndroid="transparent"
                  style={styles.InputUserName}
                  value={userName}
                  onChangeText={ (textValue) => this.setState({
                    userName: textValue}) }
                />
                <View style={{
                  padding: 12,
                }}>
                  <Icon name="search" color={'black'} size={26}/>
                </View>
              </View>
              <TouchableHighlight
              style={[styles.buttonContainer, userName !== ''?styles.activeButton:styles.deactiveButton]}
              onPress={this.searchUnsplashUsers}
              underlayColor={Colors.HIGHLIGHT_COLOR}
              disabled={userName === ''}>
              <Text style={styles.buttonText}>SEARCH</Text>
            </TouchableHighlight>
            {!isError && userList.length > 0 &&
            <FlatList style={styles.cardList}
              data={userList}
              renderItem={({ item }) => <CardItem fields={item} navigate={navigate}/>}
              keyExtractor={item => item.id}
            />}
            {!isError && userList.length == 0 && isSearched && 
            <Text style={styles.alertText}>Not Found</Text>}
            {isError && 
            <Text style={styles.alertText}>{userList}</Text>}
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
        InputContainer: {
          backgroundColor: 'white',
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 15,
          width: '90%',
        },
        InputUserName: {
          textAlign: 'left',
          color: 'black',
          fontSize: 16,
          padding: 8,
          width: '80%',
        },
        buttonContainer: {
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          width: '90%',
          borderRadius: 5,
          marginTop: 10,
          marginBottom: 10,
          backgroundColor: Colors.MAIN_COLOR,
        },
        activeButton: {
          opacity: 1.0,
        },
        deactiveButton: {
          opacity: 0.5,
        },
        buttonText: {
          color: 'white',
          fontWeight: 'bold',
        },
        cardList: {
          width: '90%',
        },
        cardItem: {
          height: 70,
          backgroundColor: Colors.BACK_COLOR,
          borderRadius: 5,
          marginBottom: 5,
        },
        cardTitle: {
          color: Colors.HIGHLIGHT_COLOR,
          fontSize: 18,
          margin: 20
        },
        alertText: {
          marginTop: 20,
          color: 'black',
          fontSize: 28,
        },
    })

  function mapStateToProps(state) {
    console.log('loading: ', state.searchUsers.isLoading)
    return { 
      isLoading: state.searchUsers.isLoading,
      isError: state.searchUsers.isError,
      userList: state.searchUsers.data
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({searchUsers}, dispatch)
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
