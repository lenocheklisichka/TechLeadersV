import React from 'react';

export function generateId(num:number = 6) {
  let array = [];
  for (let i = 0; i < num ; i++) {
    array.push(Math.floor(Math.random() * Math.floor(10)));
  }
  let id = +array.join('');
  return id;      
} 