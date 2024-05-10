import {Link } from 'react-router-dom'
export default function NavBar() {
    return (
      <>
       <nav>
        <Link style={aStyle} to="/app">App</Link>
         <Link style={aStyle} to="/">index</Link>
         <Link style={aStyle} to="/link3">Error</Link>
       </nav>
      </>
    );
  }

const aStyle = {
  padding: "2rem"
}