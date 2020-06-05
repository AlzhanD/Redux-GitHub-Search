import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Markdown from 'markdown-to-jsx'
import Loader from 'react-loader-spinner'
import { updateReadme } from '../redux/reducers/repositories'
import './readme.scss'

const ReadMe = () => {
  const { userName, repositoryName } = useParams()
  const dispatch = useDispatch()
  const readmeFile = useSelector((store) => store.repositories.readme)
  useEffect(() => {
    dispatch(updateReadme(userName, repositoryName))
  }, [dispatch, repositoryName, userName])
  return (
    <div className="markdown-body relative">
      <Markdown>{readmeFile}</Markdown>
      {!readmeFile && (
        <div className="flex items-center justify-center mt-20">
          <Loader type="Puff" color="#00BFFF" height={70} width={70} timeout={3000} />
        </div>
      )}
    </div>
  )
}

export default ReadMe
