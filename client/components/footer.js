import React from 'react'

const Footer = () => {
  return (
    <div className="flex items-center justify-between flex-wrap bg-gray-600 header-bg-cl p-6 ">
      <ul className="flex">
        <li className="mr-6">
          <a
            className="no-underline hover:underline text-white text-lg"
            href="https://tailwindcss.com/"
          >
            tailwindcss
          </a>
        </li>
        <li className="mr-6">
          <a
            className="no-underline hover:underline text-white text-lg"
            href="https://guides.github.com/"
          >
            GitHub Guides
          </a>
        </li>
        <li className="mr-6">
          <a
            className="no-underline hover:underline text-white text-lg"
            href="https://guides.github.com/introduction/git-handbook/"
          >
            Git Handbook
          </a>
        </li>
        <li className="mr-6">
          <a className="no-underline hover:underline text-white text-lg" href="https://github.com/">
            GitHub.com
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
