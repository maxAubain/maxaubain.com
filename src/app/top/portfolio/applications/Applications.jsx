import React from 'react'
import { Application } from './Application'
import appsData from './data/applications'
import externalLinksData from './data/external-links'
import './style/applications'

export const Applications = () => {
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
      <div className="applications container">{apps}</div>
    </>
  )
}
