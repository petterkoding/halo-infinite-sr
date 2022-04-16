import React from 'react'

const Table = ({name, data}) => {
  return (
    <div className="flex flex-row justify-between items-center border-b border-slate-50/20">
        <div className="text-white text-sm uppercase py-1">{name}</div>
        <div className="text-white text-lg py-1">{data}</div>
    </div>
  )
}

export default Table