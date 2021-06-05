import React from 'react';
import PropTypes from 'prop-types';
import Profile from './components/Profile/Profile';
import user from './json/user.json';
import statisticalData from './json/statistical-data.json';
import StatisticsList from './components/Statistics/StatisticsList';
    

import FriendList from './components/FriendList/FriendList'
import friends from './json/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './json/transactions.json';

const App = () =>{
 return(
     <div>
<Profile 
name={user.name}
tag={user.tag}
location={user.location}
avatar={user.avatar}
stats={user.stats}
/>

<StatisticsList title="Upload stats" stats={statisticalData}/>

<FriendList friends ={friends}/>

<TransactionHistory items={transactions} />

</div>
 );
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };


 export default App;