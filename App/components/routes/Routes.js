import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Chat from '../chat/Chat'
import Filter from '../filter/Filter'
import AddCompanyFilter from '../filter/AddCompanyFilter'
import CustomNavBar from "../navbar/NavBar";
import ModalNavBar from "../navbar/ModalNavbar";
import SearchNavbar from "../navbar/SearchNavbar";

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "chat" component = {Chat} title = "Chat" navBar={CustomNavBar}  initial = {true}/>
         <Scene key = "filter" component = {Filter} title = "Filter" navBar={ModalNavBar}  />
         <Scene key = "addCompanyFilter" component = {AddCompanyFilter} navBar={SearchNavbar}  />
      </Scene>
   </Router>
);
export default Routes;
