import React from 'react'

const Layout = (props) => {
  return (
    <div>   
        <header>
            <h2>Logo</h2>
            <nav>
                <a href="">Link 1</a>
                <a href="">Link 2</a>
            </nav>
        </header>
        <main>
            {props.children}
        </main>
        


    </div>
  )
}

export default Layout