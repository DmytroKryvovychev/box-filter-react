import React from 'react';

function Box({ items }) {
  return (
    <div className="block-cover">
      <div className={`col-auto box ${items[0]}`}></div>
      <div className={`col-auto box ${items[1]}`}></div>
      <div className={`col-auto box ${items[2]}`}></div>
      <div className={`col-auto box ${items[3]}`}></div>
      <div className={`col-auto box ${items[4]}`}></div>
      <div className={`col-auto box ${items[0]}`}></div>
      <div className={`col-auto box ${items[1]}`}></div>
      <div className={`col-auto box ${items[2]}`}></div>
      <div className={`col-auto box ${items[3]}`}></div>
      <div className={`col-auto box ${items[4]}`}></div>
      <div className={`col-auto box ${items[0]}`}></div>
      <div className={`col-auto box ${items[1]}`}></div>
      <div className={`col-auto box ${items[2]}`}></div>
      <div className={`col-auto box ${items[3]}`}></div>
      <div className={`col-auto box ${items[4]}`}></div>
      <div className={`col-auto box ${items[0]}`}></div>
      <div className={`col-auto box ${items[1]}`}></div>
      <div className={`col-auto box ${items[2]}`}></div>
      <div className={`col-auto box ${items[3]}`}></div>
      <div className={`col-auto box ${items[4]}`}></div>
    </div>
  );
}

export default Box;
