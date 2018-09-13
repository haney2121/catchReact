import React, { Fragment } from 'react';
import AddPmsForm from './AddPmsForm';
import EditPmsForm from '../EditPmsForm';

const Inventory = ({addPms, loadSamplePMS, allPms, updatePms}) => {
    return (
      <Fragment>
          <h1>Inventory Component</h1>
          {Object.keys(allPms).map(key => <EditPmsForm index={key} key={key} pms={allPms[key]} updatePms={updatePms} />)}
          <AddPmsForm addPms={addPms}/> 
          <button onClick={loadSamplePMS}>Load Sample PMS</button>
      </Fragment>
    )
  }

export default Inventory;