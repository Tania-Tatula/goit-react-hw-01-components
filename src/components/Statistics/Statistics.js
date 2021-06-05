import React from 'react';
import PropTypes from 'prop-types';



const Statistics = ({label, percentage}) =>(
    
        <ul class="stat-list">
          <li class="item">
            <span class="label">{label}</span>
            <span class="percentage">{percentage}</span>
          </li>
          
        </ul>

   )

   Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }; 
 
   export default Statistics;