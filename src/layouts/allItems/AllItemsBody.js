import React from 'react'
//LINK - project components
import CommonLayout from '../common/CommonLayout'
import AllItemsLayout from './allItemsBody/AllItemsLayout'

export default function AllItemsBody() {
  return (
    <CommonLayout>
      <div style={{padding: 'calc(1.5rem * .5)'}}>
        <AllItemsLayout />
      </div>
    </CommonLayout>
  )
}
