import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useField } from '../hooks'

const CreateNew = (props) => {
  const content = useField('content')
  const author = useField('author')
  const info = useField('info')

  const nav = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    })
    nav('/')
  }

  const handleClear = () => {
    content.onReset()
    author.onReset()
    info.onReset()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input name='content' {...content} />
        </div>
        <div>
          author
          <input name='author' {...author} />
        </div>
        <div>
          url for more info
          <input name='info' {...info} />
        </div>
        <button type='submit'>create</button>
        <button type='button' onClick={handleClear}>clear</button>
      </form>
    </div>
  )
}

CreateNew.propTypes = {
  addNew: PropTypes.func
}

export default CreateNew