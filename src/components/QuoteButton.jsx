import React from 'react'

const QuoteButton = ({getNewValues,backgroundObject}) => {
  return (
    <button onClick={getNewValues} style={backgroundObject}>
        <i className='bx bx-chevron-right'></i>
    </button>
  )
}

export default QuoteButton