import React, { useContext } from 'react'
import { ThemeContext } from './UseContext'

function Paragrab() {
  const theme = useContext(ThemeContext)
  return (
    <div className={theme}>Collaborate for free with an online version of Microsoft Word. Save documents in OneDrive. Share them with others and work together at the same time.</div>
  )
}

export default Paragrab