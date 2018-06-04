import React, { Component, platform } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Slider from "react-native-slider";
import { Actions } from 'react-native-router-flux';
import {
  Container,
  Content,
  Item,
  Text,
  List,
  Right,
  Body,
  Icon,
  Button,
  Footer,
  FooterTab
} from 'native-base';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByList: [],
      datePostedList: [],
      companyList: [],
      jobTypeList: [],
      companyTierList: [],
      value: 1,
      level: '',
      opacity: 1
    };
  }
  componentWillMount () {
    this.setState({
      sortByList: [
        {
          name: 'Highest match percentage',
          checked: true
        },
        {
          name: 'Most recent',
          checked: false
        }
      ],
      datePostedList: [
        { name: 'Past 24 hours'},
        { name: 'Past week'},
        { name: 'Past month'},
        { name: 'Past year'}
      ],
      jobTypeList: [
        { name: 'Full-time' },
        { name: 'Part-time' },
        { name: 'Internship' },
        { name: 'Contract' },
      ],

      companyTierList: [
        { name: '1st tier' },
        { name: '2nd tier' },
        { name: '3rd tier' }
      ],
    });
  }

  renderList = ({item, index}) => {
      return (
        <View>
          <TouchableOpacity  style = {{ flexDirection: 'row', alignItems:'flex-start'}} >
            <Text style={{fontSize: 12, fontWeight: item.checked ? 'bold' : 'normal', padding:20, paddingBottom:0}}>{item.name}</Text>
              <Right>
                { item.checked
                  ?
                  <Icon type='Ionicons' name='checkmark' style={{color:'#2361eb', width:20, height:20}} />
                  : null
                }
              </Right>
          </TouchableOpacity>
        </View>
      )
  }

  renderBadge = ({item, index}) => {
      return (
          <TouchableOpacity  style = {{ flexDirection: 'column', alignItems:'flex-start', marginRight:5}} >
            <Button small light>
              <Text style={{fontSize:12}}>{item.name}</Text>
            </Button>
          </TouchableOpacity>
      )
  }

  render () {

    return (
      <Container>
        <Content style={{marginTop: 15}}>
          <View style={styles.backgroundWhite}>
            <Text style={ styles.title }>Sort by</Text>
            <FlatList
              data={this.state.sortByList}
              renderItem={ this.renderList }
              keyExtractor={(item, index) => index}/>
          </View>

          <View style={styles.backgroundWhite}>
            <Text style={ styles.title }>Date Posted</Text>
            <FlatList
              style={styles.flatlist}
              horizontal
              data={this.state.datePostedList}
              renderItem={ this.renderBadge }
              keyExtractor={(item, index) => index}/>
          </View>

            <TouchableOpacity style={styles.backgroundWhite}
                onPress={() => Actions.addCompanyFilter() }>
              <View style={{ flexDirection:'row', alignItems:'space-around', justifyContent:'center'}}>
                <Text style={styles.bold}>Company</Text>
                <Right>
                  <Icon type='Ionicons' style={{ fontSize: 14 }} name='arrow-forward' />
                </Right>
              </View>
              <View>
                {
                  this.state.companyList.length > 0 ?
                    <FlatList
                      style={styles.flatlist}
                      horizontal
                      data={this.state.companyList}
                      renderItem={ this.renderBadge }
                      keyExtractor={(item, index) => index}/>
                      : null

                }
              </View>
          </TouchableOpacity>

          <View style={styles.backgroundWhite}>
            <Text style={ styles.title }>Experience Level</Text>
            <Slider
              value={this.state.value}
              minimumValue={ 0 }
              maximumValue={ 10 }
              trackStyle={styles.track}
              thumbStyle={styles.thumb}
              minimumTrackTintColor='#6a6a6a'
              onValueChange={value => this.setState({ value })}
            />
            <Text style={{ fontSize: 14 }}>
              {
                this.state.value < 2 ?
                  <Text style={{ fontSize: 14 }}>Any</Text>
                :
                this.state.value
              }
            </Text>
          </View>

          <View style={styles.backgroundWhite}>
            <Text style={ styles.title }>Job Type</Text>
            <FlatList
              style={styles.flatlist}
              horizontal
              data={this.state.jobTypeList}
              renderItem={ this.renderBadge }
              keyExtractor={(item, index) => index}/>
          </View>

          <View style={styles.backgroundWhite}>
              <View style={{ flexDirection:'row', alignItems:'space-around', justifyContent:'center'}}>
                <Text style={styles.bold}>Industry</Text>
                <Right>
                  <Icon type='Ionicons' style={{ fontSize: 14 }} name='arrow-forward' />
                </Right>
              </View>
          </View>

          <View style={styles.backgroundWhite}>
              <View style={{ flexDirection:'row', alignItems:'space-around', justifyContent:'center'}}>
                <Text style={styles.bold}>Job Function</Text>
                <Right>
                  <Icon type='Ionicons' style={{ fontSize: 14 }} name='arrow-forward' />
                </Right>
              </View>
          </View>

          <View style={styles.backgroundWhite}>
            <Text style={ styles.title }>Company Tier</Text>
            <FlatList
              style={styles.flatlist}
              horizontal
              data={this.state.jobTypeList}
              renderItem={ this.renderBadge }
              keyExtractor={(item, index) => index}/>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button primary full onPress onPress={Actions.pop}>
              <Text style={[styles.bold, { color: 'white', fontSize: 14}]}>Show 320 jobs</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  backgroundWhite: {
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
  track: {
    height: 3,
    backgroundColor: '#b3b3b3',
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: '#93a7ff',
    borderColor: 'rgba(82, 99, 255, 0.45)',
    borderWidth: 5,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.35,
  },
  bold: {
    fontWeight: '800',
  }
});
