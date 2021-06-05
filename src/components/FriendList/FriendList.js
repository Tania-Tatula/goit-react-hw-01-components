import React from 'react';
import PorpTypes from 'prop-types';
import FriendListItem from './FriendListItem';



const FriendList = ({friends}) =>(
    <ul class="friend-list">
        <ul>
        {friends.map(({avatar,name, isOnline, id}) =>(
        <li key = {id}>
        <FriendListItem 
        avatar ={avatar}
        name ={name}
        isOnline ={isOnline} />
        </li>
        ))}
        </ul>
</ul>
);


FriendList.porpTypes = {
  friends: PorpTypes.arrayOf(PorpTypes.shape({
      id: PorpTypes.string.isRequired,
  })).isRequired,
};

export default FriendList;

