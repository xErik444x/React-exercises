# ejemplo de navbar, usar link para mejor rendimiento:
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



import {Link } from 'react-router'
...
<Link to="/">Home</Link>
...
If you use <a href="/">Home</a>, then React Router reloads entire Meteor app again and that causes it to be slow.