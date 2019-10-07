import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const { text } = this.props;

    return <div className={styles.test}>Example Component: {text}</div>;
  }
}

export const Button = ({ children, color, ...props }) => (
  <button {...props} style={{ color: color }}>
    {children}
  </button>
);

export const Counter = () => {
  const [count, setCount] = useState(0);
  console.log('count:', count);
  return (
    <div
      style={{
        display: 'flex',
        width: '300px',
        margin: '30px auto',
        justifyContent: 'space-between'
      }}
    >
      <Button value={count} onClick={() => setCount(count + 1)}>
        Increment
      </Button>
      {count}
      <Button value={count} onClick={() => setCount(count - 1)}>
        Decrement
      </Button>
    </div>
  );
};
