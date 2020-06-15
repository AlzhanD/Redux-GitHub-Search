import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { setRepositories } from '../redux/reducers/repositories'
import '../assets/scss/main.scss'

const RepoList = () => {
  const { userName, repositoryName } = useParams()
  const dispatch = useDispatch()
  const repoList = useSelector((store) => store.repositories.list)
  const find = useSelector((store) => store.repositories.search)

  useEffect(() => {
    dispatch(setRepositories(userName, repositoryName))
  }, [dispatch, repositoryName, userName])

  const filteredList = repoList.filter((el) => el.name.toLowerCase().includes(find))
  return (
    <div>
      <div>Repo</div>
      <table className="min-w-full table-auto sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-900 uppercase tracking-wider">
              NAME
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-900 uppercase tracking-wider">
              DEPLOYMENT
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-900 uppercase tracking-wider">
              LAST COMMIT
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-900 uppercase tracking-wider">
              README
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((el) => (
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{el.name}</td>

              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <a
                  className={`${el.homepage ? 'text-black' : 'text-red-500 '} font-semibold`}
                  href={el.homepage ? el.homepage : undefined}
                >
                  Go
                </a>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {new Date(el.updated_at).toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <Link to={`/${userName}/${el.name}`}>
                  <a
                    className="bg-blue-600 hover:bg-teal-700 font-semibold px-2 inline-flex text-xs leading-5 rounded-lg text-white"
                    href="#"
                  >
                    View readme
                  </a>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!repoList.length && (
        <div className="flex items-center justify-center mt-20">
          <Loader type="Puff" color="#00BFFF" height={70} width={70} timeout={3000} />
        </div>
      )}
    </div>
  )
}

export default RepoList
