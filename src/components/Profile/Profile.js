import React from 'react';
import PropTypes from 'prop-types';


const Profile = ({name, tag, location, avatar,  stats}) =>(
   <div class="profile">
     <div class="description">
       <img
         src={avatar}
         alt="Аватар пользователя"
         class="avatar"
       />
       <p class="name">{name}</p>
       <p class="tag">@{tag}</p>
       <p class="location">{location}</p>
     </div>
   
     <ul class="stats">
       <li>
         <span class="label">Followers</span>
         <span class="quantity">{stats.follower}</span>
       </li>
       <li>
         <span class="label">Views</span>
         <span class="quantity">{stats.views}</span>
       </li>
       <li>
         <span class="label">Likes</span>
         <span class="quantity">{stats.likes}</span>
       </li>
     </ul>
   </div>
    );
   
    Profile.propTypes = {
      name: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    };


   export default Profile;