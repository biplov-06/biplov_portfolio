import React from 'react'
import Abouttitle from './abouttitle';
import Aboutimg from './aboutimg';
import "bootstrap/dist/css/bootstrap.css";

export default function aboutPage({isDarkMode}) {
  return (
    <div className={isDarkMode?'about1 container my-5 dark-mode':"about1 container my-5 light-mode"}>
        <Aboutimg/>
      <Abouttitle isDarkMode={isDarkMode}/>
    </div>
  )
}
