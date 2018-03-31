import React, { Component } from 'react';
// 30-1. Router
// 30-3. Route
//       figure out how we can get the filter value from our links into our component
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Form } from 'antd'
import LoginHeader from './components/login/LoginHeader'
import LoginNameTextField from './components/login/LoginNameTextField'
import LoginPasswordTextField from './components/login/LoginPasswordTextField'
import LoginSubmitButton from './components/login/LoginSubmitButton'
import LoginForm from './components/login/LoginForm'
import LoginList from './components/login/LoginList'
import Message from './components/login/Message'
import './App.css'
import Footer from './components/login/Footer'

// 1. import connect from react-redux
// import { connect } from 'react-redux'

// 8. remove reference to connect
//    export the top level app component with no direct connection to redux
// import { connect } from 'react-redux'
// import { changePwdHelper } from './reducers/loginReducer'

// 5. we not need this anymore
// import { bindActionCreators } from 'redux'

// 7. connect redux to individual component
//    because there is no need to render all state for every components
//    remove all props in state

// const { nameHelper, pwdHelper, changePwdHelper } = this.props
// <LoginNameTextField nameHelper={nameHelper}/>
// <LoginPasswordTextField pwdHelper={pwdHelper}/>
// <LoginSubmitButton
//   htmltype="submit"
//   changePwdHelper={this.props.changePwdHelper} />

// if you get a error message `A <Router> may have only one child element`
// you shoule wrap all the child of Router in a <div>

// 30-1

// 30-3.
// use Route, the path is to create a parameter on route filter
//   and render method response to route
//   match from the arguments that are passed into render
//   /:filter filter match.params.filter are equivalent

class App extends Component {
  render() {
    return (
      <div className="container">
        <LoginHeader />
        <form className="loginForm">
          <div>
            <LoginNameTextField />
          </div>
          <div>
            <LoginPasswordTextField />
          </div>
          <div className="loginButton" >
            <LoginSubmitButton htmltype="submit" />
          </div>
        </form>
        <Router>
          <div claaName="item-app">
            <Message />
            <LoginForm />
            <Route path='/:filter?' render={({match}) => (
              <LoginList filter={match.params.filter} />
            )} />
        <Footer />
        </div>
        </Router>
        </div>
    )
  }
}

// export default App;

// 0. wired up Provider from index.js to App.js

// 3. the first argument is accept entire state
//    and return an object we want to pass into our component
// const mapStateToProps = (state) => state

// 4. the second argument is to accept the dispatch method from our store
//    then to return a object that contains dispatch function
//    just like the bindActionCreators does
// const mapDispatchToProps = (dispatch) => (
//   bindActionCreators({changePwdHelper}, dispatch)
// )

// 5. use mapDispatchToProps shorthand syntax in redux
// const mapDispatchToProps = {changePwdHelper}

// use the shorthands, both the key and the value
// const actions = bindActionCreators({changePwdHelper}, store.dispatch)

// 2. accept App and return connected App
// const ConnectApp = connect(mapStateToProps, mapDispatchToProps)(App)

// 6. get rid of all definitions
// export default connect(
//   (state) => state,
//   {changePwdHelper}
// )(App)

// 8. remove reference to connect
//    export the top level app component with no direct connection to redux
export default App

// const server = 'http://116.62.161.217/member.ashx?op=login&key=hl_123&ucode=HuYX&pswd=123'
