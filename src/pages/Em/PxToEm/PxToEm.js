import React from 'react'
import PxToEmCard from './PxToEmCard'
import PxToEmTable from './PxToEmTable'

function PxToEm() {
  return (
    <div>
        <PxToEmCard/>
        <PxToEmTable />
        <div className="max-w-3xl px-4 mx-auto my-11">
            <h1 className="text-2xl text-primary font-semibold">
                How to Convert PX to EM
            </h1>
            <p className="mt-3 px-6 py-5 bg-secondary text-white font-medium ">
                em = px / font-size
            </p>
          </div>
    </div>
  )
}

export default PxToEm