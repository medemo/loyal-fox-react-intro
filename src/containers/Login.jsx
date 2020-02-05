import React from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../store/actions/userAction'

function Login(props) {
  // const user = useSelector(state => state.user)
  // const dispatch = useDispatch()
  // const location = useLocation()
  const location = props.location

  const handleLogin = () => {
    props.login({ id: 1 })
  }

  if (props.user) {
    return <Redirect to={location.state.referrer || '/'} />
  }

  return (
    <button
      className="border px-5 py-2"
      onClick={handleLogin}
    >
      LOGIN
    </button>
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