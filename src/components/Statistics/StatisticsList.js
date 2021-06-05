import React from 'react';
import PropTypes from 'prop-types';

import Statistics from './Statistics';


const StatisticsList =({title, stats}) => (
    <section class="statistics">
        <h2 class="title">{title}</h2>
<ul>
{stats.map(({id, label, percentage}) => (
    <li key = {id}>
<Statistics 
label = {label}
percentage = {percentage} />
</li>
))}
</ul>
</section>
)

StatisticsList.defaultProps = {title:"Upload stats"};

StatisticsList.propTypes = {
    title: PropTypes.string,
  }; 

export default StatisticsList;