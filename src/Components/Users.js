import { Link, Outlet, useNavigate, useSearchParams } from "react-router-dom"

export const Users = () => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <>
        <p onClick={() => navigate('1')}>User 1</p>
        <p><Link to='2'>User 2 </Link></p>
        <p><Link to='3j'>User 3</Link></p>
        <p><Link to='admin'>Admin</Link></p>
        <button onClick={() => navigate(-1)}>Users page</button>
        <button onClick={() => setSearchParams({filter: 'active'})}>Active Users</button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
        {
            showActiveUsers ? <h2>Showing Active Users</h2> : <h2>Showing All Users</h2>
        }
        <Outlet />
    </>
  )
}
