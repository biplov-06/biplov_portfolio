import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import Skillplate from "./skillslist"
import "../newcss.css"

export default function newskills({isDarkMode}) {
  return (
    <>
    <div className={isDarkMode ? "dark-mode container" : "light-mode container"}>
    <div className={isDarkMode ? "dark-mode skillHead" : "light-mode skillHead"}>
       <h1>What I Do</h1>
         <p>Life gave me a keyboard, and I unlocked these skills one project at a time.</p>
    </div>
<Skillplate isDarkMode={isDarkMode} />
    




    </div>
    </>
  )
}
