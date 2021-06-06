import React from 'react';
import Profile from './components/Profile/Profile';
import user from './json/user.json';
import statisticalData from './json/statistical-data.json';
import Statistics from './components/Statistics/Statistics';
import './App.css';
    

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

<Statistics title="Upload stats" stats={statisticalData}/>
<Statistics stats={statisticalData} />;

<FriendList friends ={friends}/>

<TransactionHistory items={transactions} />

</div>
 );
};


 export default App;