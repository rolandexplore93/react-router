import { Link, Outlet, NavLink } from "react-router-dom"

export const Products = () => {
  return (
    <>
      <div>
        <input placeholder="Search Products" />
      </div>
      <nav>
        {/* Do not add '/' for <Link/> */}
          <NavLink to='featured'>Featured</NavLink>
          <NavLink to='new'>New</NavLink>
      </nav>
      <Outlet />
    </>
  )
}
