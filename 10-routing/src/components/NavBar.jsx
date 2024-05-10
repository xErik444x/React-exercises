export default function NavBar() {
    return (
      <>
       <nav>
         <a style={aStyle} href="/app">App</a>
         <a style={aStyle} href="/">index</a>
         <a style={aStyle} href="/link3">Error</a>
       </nav>
      </>
    );
  }

const aStyle = {
  padding: "2rem"
}