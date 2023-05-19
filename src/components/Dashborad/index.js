import React from 'react';
import NewRecordContainer from './NewRecordsContainer';
import PointContainer from './PointContainer';
import RewardContainer from './RewardContainer';
import GameCardContainer from './GameCardContainer';
import TabMenu from './TabMenu';

function Dashboard() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <NewRecordContainer />
        </div>
        <div className='row mt-4 border-top-5'>
          <PointContainer />
        </div>
        <div>
          <RewardContainer />
        </div>
        <div>
          <GameCardContainer />
        </div>
        <TabMenu />
      </div>

    </>
  );
}

export default Dashboard;
