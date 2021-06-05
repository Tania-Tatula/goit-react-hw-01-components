import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({avatar, name, isOnline}) =>(
    <li class="item">
  <span class="status">{isOnline ? 'online' : 'offline'}</span>
  <img class="avatar" src={avatar} alt={name} width="48" />
  <p class="name">{name}</p>
</li>
  )

  FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }; 
export default FriendListItem;