import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import colorNumber from './color';

console.log(colorNumber);
const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.statlist}>
      {stats.map(({ id, label, percentage }) => (
        <li className={styles.item} key={id}>
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
