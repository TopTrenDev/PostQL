import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import PlaygroundDisplay from './PlaygroundDisplay';

const Home: FC = () => (
  <>
    <Link to="/analytics"><button type="button">Analytics</button></Link>
    <PlaygroundDisplay />
  </>
);

export default Home;
