export default function Header({ count }) {
	const headerStyle = {
	  fontSize: "4rem",
	  fontWeight: "bold"
	};
  
	return <p style={headerStyle}>{count}</p>;
  }