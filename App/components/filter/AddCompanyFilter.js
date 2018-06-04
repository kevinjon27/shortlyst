import React from 'react'
import { TouchableOpacity, StyleSheet, View, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Container,
  Content,
  Item,
  Text,
  CheckBox,
  Right, Left,
  Body,
  Icon,
  Button,
  ListItem,
  Thumbnail,
  Footer,
  FooterTab
} from 'native-base';

export default class AddCompanyFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      selectedCompanies: []
    };
  }

  componentWillMount () {
    this.setState({
      companies: [
        {
          image: 'https://placeimg.com/140/140/any',
          name: 'Google',
          checked: true
        },
        {
          image: 'https://placeimg.com/140/140/any',
          name: 'Microsoft',
          checked: false
        },
        {
          image: 'https://placeimg.com/140/140/any',
          name: 'Tokopedia',
          checked: false
        },
        {
          image: 'https://placeimg.com/140/140/any',
          name: 'Apple',
          checked: false
        },
        {
          image: 'https://placeimg.com/140/140/any',
          name: 'Gojek',
          checked: false
        }
      ],
      selectedCompanies: [
        { name: 'Google' },
        { name: 'Microsoft' }
      ]
    });
  }

  renderBadge = ({item, index}) => {
      return (
          <TouchableOpacity  style = {{ flexDirection: 'column', alignItems:'flex-start', marginRight:5}} >
            <Button small light style={{ padding: 10}}>
              <Body>
                <Text>{item.name}</Text>
              </Body>
              <Right style={{ width: 20}}>
                <Icon type='Ionicons' name='close' style={{ fontSize: 20}}/>
              </Right>
            </Button>
          </TouchableOpacity>
      )
  }

  renderCompanies = ({item, index}) => {
      return (
        <ListItem avatar>
          <TouchableOpacity  style = {{ flexDirection: 'row', alignItems:'flex-start', justifyContent:'flex-start'}} >
            <Left>
              <Thumbnail square source={{uri: item.image}} small/>
            </Left>
            <Body>
              <Text>{item.name}</Text>
            </Body>
            <Right>
              <Icon type='Ionicons' name='add' style={{ fontSize: 20, marginBottom: -10 }}/>
            </Right>
          </TouchableOpacity>
        </ListItem>
      )
  }
   render() {
     return (
       <Container style={styles.container}>
         <Content>
           <View style={styles.backgroundWhite}>
             <FlatList
               style={styles.flatlist}
               horizontal
               data={this.state.selectedCompanies}
               renderItem={ this.renderBadge }
               keyExtractor={(item, index) => index}/>
           </View>
           <View>
             <Text style={ styles.title }>Suggestion</Text>
             <FlatList
               style={styles.flatlist}
               data={this.state.companies}
               renderItem={ this.renderCompanies }
               keyExtractor={(item, index) => index}/>
          </View>
         </Content>
       </Container>
     );
   }
}

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 15,
      marginBottom: 5
    },
    title: {
      fontWeight: '800',
      fontSize: 14,
      marginBottom: 10
    },
    flatlist: {
      marginBottom: 10
    },
    bold: {
      fontWeight: '800',
    },
    checked: {
      height: 20,
      width: 20,
      margin: 10
    }
  })
