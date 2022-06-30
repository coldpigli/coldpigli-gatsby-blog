import { Link, useStaticQuery, graphql } from 'gatsby'
import React from 'react'

const Navbar = () => {

    const data = useStaticQuery(graphql`
    query MyQuery {
        site {
          siteMetadata {
            description
            siteUrl
            title
          }
        }
      }`)

    console.log("From Navbar", data);

  return (
    <div className='sticky top-0 left-0 right-0 bg-black h-[12vh] flex items-center'>
        <div className='flex justify-between w-[85%] mx-auto items-center'>
            <Link to="/">
                <div className='text-5xl font-bold text-white'>
                    Grid.
                </div>
            </Link>
            <nav className='text-white flex justify-between items-center gap-8'>   
                <Link>By Industry</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link>Login</Link>
                <button className='btn-grid'>Get your demo</button>
            </nav>
        </div>
    </div>
  )
}

export default Navbar