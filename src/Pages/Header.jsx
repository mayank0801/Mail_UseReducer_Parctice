import { NavLink } from "react-router-dom";
export default function Header() {
  // const styleobj=({isActive})=>{
  //   console
  //   return{

  //   }
  // }
  return (
    <div>
      <h1>Mayank Mail Box</h1>
      <nav>
        <NavLink to="/">INBOX</NavLink> <NavLink to="/spam">SPAM</NavLink>{" "}
        <NavLink to="/trash">TRASH</NavLink>{" "}
      </nav>
    </div>
  );
}
