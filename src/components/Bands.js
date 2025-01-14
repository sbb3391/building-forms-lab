import React from 'react';

const Bands = (props) => {
  const renderBands = props.bands.map( (band, index) => {
    return <li key={index}>{band.name}</li>
  })

  return(
    <div>
      <ul>
        {renderBands}
      </ul>
    </div>
  )
}

export default Bands