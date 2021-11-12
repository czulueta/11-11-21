import React from "react"

export default function Navbar(props){
  const { logout } = props
  return(
    <div className="navbar">
      <Link to="/profile">Profile</Link>
      <Link to="/public">Public</Link>
      <button onClick={logout}>Logout</button>
    </div>
  )
}