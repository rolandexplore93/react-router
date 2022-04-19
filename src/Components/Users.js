import { Link, Outlet, useNavigate } from "react-router-dom"

export const Users = () => {
    const navigate = useNavigate()
  return (
    <>
        <p onClick={() => navigate('1')}>User 1</p>
        <p><Link to='2'>User 2 </Link></p>
        <p><Link to='3ji'>User 3</Link></p>
        <p><Link to='admin'>Admin</Link></p>
        <button onClick={() => navigate(-1)}>Users page</button>
        <Outlet />
    </>
  )
}
