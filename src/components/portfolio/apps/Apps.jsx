import React from 'react'
import { App } from './App'
import appsData from '../../../data/applications'
import externalLinksData from '../../../data/external-links'

export const Apps = () => {
  // Apps data object
  const apps = appsData.map(appData => {
    return (
      <App
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
