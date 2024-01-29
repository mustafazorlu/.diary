import React from 'react'

const TabButton = ({onSelect, children, isSelected}) => {
  return (
    <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
  )
}

export default TabButton