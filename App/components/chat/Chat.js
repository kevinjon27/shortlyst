import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  Linking
} from 'react-native';

import CustomView from './CustomView';
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import { Actions } from 'react-native-router-flux';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false,
    };

    this._isMounted = false;
    this.onSend = this.onSend.bind(this);
    this.onReceive = this.onReceive.bind(this);
    this.renderCustomActions = this.renderCustomActions.bind(this);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderSystemMessage = this.renderSystemMessage.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.onLoadEarlier = this.onLoadEarlier.bind(this);

    this._isAlright = null;
  }

  componentWillMount() {
    this._isMounted = true;
    Actions.refresh({
      name: 'Sandra',
      title: 'from Shortlyst'})
    this.setState(() => {
      return {
        messages: require('../../examples/data'),
      };
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onLoadEarlier() {
  this.setState((previousState) => {
    return {
      isLoadingEarlier: true,
    };
  });

  setTimeout(() => {
    if (this._isMounted === true) {
        this.setState((previousState) => {
          return {
            messages: GiftedChat.prepend(previousState.messages, require('../../examples/old_data')),
            loadEarlier: false,
            isLoadingEarlier: false,
          };
        });
      }
    }, 1000); // simulating network
  }

  renderCustomView(props) {
  return (
    <CustomView
      {...props}
    />
  );
}

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))

    // for demo purpose
    this.answerDemo(messages);
  }


  answerDemo(messages) {
    if (messages.length > 0) {
      if ((messages[0].image || messages[0].location) || !this._isAlright) {
        this.setState((previousState) => {
          return {
            typingText: 'React Native is typing'
          };
        });
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        if (messages.length > 0) {
          if (messages[0].image) {
            this.onReceive('Nice picture!');
          } else if (messages[0].location) {
            this.onReceive('My favorite place');
          } else {
            if (!this._isAlright) {
              this._isAlright = true;
              this.onReceive('Alright');
            }
          }
        }
      }

      this.setState((previousState) => {
        return {
          typingText: null,
        };
      });
    }, 3000);
  }

  onReceive(text) {
  this.setState((previousState) => {
    return {
      messages: GiftedChat.append(previousState.messages, {
        _id: Math.round(Math.random() * 1000000),
        text: text,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Developer',
          avatar: 'https://placeimg.com/140/140/any',
        },
      }),
    };
  });
}


  renderCustomActions(props) {
    if (Platform.OS === 'ios') {
      return (
        <CustomActions
          {...props}
        />
      );
    }
    const options = {
      'Action 1': (props) => {
        alert('option 1');
      },
      'Action 2': (props) => {
        alert('option 2');
      },
      'Cancel': () => {},
    };
    return (
      <Actions
        {...props}
        options={options}
      />
    );
  }

  renderFooter(props) {
  if (this.state.typingText) {
    return (
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          {this.state.typingText}
        </Text>
      </View>
    );
  }
  return null;
}


  renderSystemMessage(props) {
   return (
     <SystemMessage
       {...props}
       containerStyle={{
         marginBottom: 15,
       }}
       textStyle={{
         fontSize: 14,
       }}
     />
   );
 }

  renderBubble (props) {
    return <Bubble
      {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#f0f0f0'
          },
          right: {
            backgroundColor: '#2361eb'
          }
        }}
    />
  }

  renderLoading (props) {
    return <Bubble
      {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#f0f0f0'
          },
          right: {
            backgroundColor: '#2361eb'
          }
        }}
    />
  }

  parsePatterns(linkStyle) {
    return [
      {
        pattern: /#(\w+)/,
        style: { ...linkStyle},
        onPress: () => Linking.openURL('http://gifted.chat'),
      },
    ];
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <GiftedChat
          renderLoading={() =>  <ActivityIndicator style={{ flex:1, alignItems:'center'}} size="large" color="#0000ff" />}
          isAnimated
          renderBubble={this.renderBubble}
          messages={this.state.messages}
          renderCustomView={this.renderCustomView}
          renderFooter={this.renderFooter}
          onSend={messages => this.onSend(messages)}
          parsePatterns={this.parsePatterns}
          loadEarlier={this.state.loadEarlier}
          onLoadEarlier={this.onLoadEarlier}
          user={{
            _id: 1
          }}
        />

      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default Chat;
