import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (<div>
  You are on your home page
  <Link to='/pokemon'>Pokemon</Link>
  </div>);
}
