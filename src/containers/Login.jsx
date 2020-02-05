import React, { useState } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../store/actions/userAction'

function Login(props) {
  // const user = useSelector(state => state.user)
  // const dispatch = useDispatch()
  // const location = useLocation()
  const location = props.location
  const [selectedId, setSelectedId] = useState(0)

  const handleLogin = () => {
    selectedId && props.login({ id: selectedId })
  }

  if (props.user) {
    return <Redirect to={location.state.referrer || '/'} />
  }

  return (
    <div className="flex items-center mt-3">
      <select
        className="rounded-l h-10"
        value={selectedId}
        onChange={e => setSelectedId(Number(e.target.value))}
      >
        <option value={0} disabled >Choose a user</option>
        {
          Array(10).fill().map((_, i) => (
            <option key={i} value={i + 1}>user {i + 1}</option>
          ))
        }
      </select>
      <button
        className="border rounded ml-3 px-5 py-2"
        onClick={handleLogin}
      >
        LOGIN
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))