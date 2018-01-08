import React, { Component } from 'react'
import Projects from './Projects'

import './app.css'

class App extends Component {
  render() {
    return (
      <div className="w-full max-w-2xl text-grey-darkest">
        <div className="hero max-w-sm mt-80">
          <h1 className="font-poppins">Hi, I'm Mark Pinero.</h1>
          <p className="mt-8 leading-tight lg:text-2xl">I'm a full-stack developer from Los Angeles, CA. I specialize in front-end development with a keen eye for design and user experience. <span className="font-bold text-indigo">I'm currently seeking new opportunities.</span></p>
          <ul className="text-base leading-normal px-4 mt-8 md:text-lg md:px-0">
            <li><a className="no-underline border-b pb-px" href="https://linkedin.com/in/markpinero">Linkedin</a></li>
            <li><a className="no-underline border-b pb-px" href="https://github.com/remarks">Github</a></li>
            <li><a className="no-underline border-b pb-px" href="mailto:mark@markpinero.com">E-mail</a></li>
          </ul>
        </div>
        <Projects />
      </div>
    )
  }
}

export default App
