import React from 'react'
import { Application } from './Application'
import appsData from '../../../global/data/applications'
import externalLinksData from '../../../global/data/external-links'

export const Applications = () => {
  // Apps data object
  const apps = appsData.map(appData => {
    return (
      <Application
        key={appData.id}
        appData={appData}
        externalLinksData={externalLinksData}
      />
    )
  })

  return (
    <>
      <div className="app-categories-wrapper">{apps}</div>
    </>
  )
}
