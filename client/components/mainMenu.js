import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { history } from '../redux'
import Head from './head'
import { updateUsername } from '../redux/reducers/repositories'

const Main = () => {
  const dispatch = useDispatch()
  const userName = useSelector((store) => store.repositories.username)
  return (
    <div className="main-bg flex justify-center items-center h-screen background-image">
      <Head title="Hello" />
      <div />
      <div className=" div-bg p-20">
        <img
          className="relative mx-auto h-12 w-auto"
          src="https://image.flaticon.com/icons/svg/25/25231.svg"
          alt="Workflow"
        />
        <h2 className="z-10 relative mt-6 mb-6 text-center text-3xl leading-9 font-extrabold text-white">
          Users repository search
        </h2>
        <input
          onKeyPress={(ev) => {
            if (ev.key === 'Enter') {
              history.push(`/${userName}`)
            }
          }}
          type="text"
          id="input-field"
          className="inputClass bg-gray-400 mr-4 relative appearance-none border-2 border-gray-400 rounded py-2 px-4 text-black-800 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
          onChange={(event) => dispatch(updateUsername(event.target.value))}
        />
        <Link to={`/${userName}`}>
          <button
            type="button"
            className="btnClass transition duration-500 ease-in-out bg-teal-700 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 ...  hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
          >
            View repositories
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Main
