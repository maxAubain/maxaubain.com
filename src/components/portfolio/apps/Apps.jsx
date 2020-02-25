import React from 'react'
import { App } from './App'
import dataApps from '../../../data/applications'
import dataLinksExternal from '../../../data/linksExternal'

export const Apps = () => {
  // Apps data object
  const apps = dataApps.map(appData => {
    return (
      <App
        key={appData.id}
        appData={appData}
        externalLinks={dataLinksExternal}
      />
    )
  })

  return (
    <>
      <div className="app-categories-wrapper">{apps}</div>
    </>
  )
}
