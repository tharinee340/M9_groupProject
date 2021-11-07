import React from 'react'

const Test = () => {
    const logout = (event) => {
        event.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("name");
      }
      
    return (
        <div>
            <button onClick={logout}>Log out</button>
        </div>
    )
}

export default Test
