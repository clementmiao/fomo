<Route name="Home" path="/" handler={App}>
  <DefaultRoute name="Welcome" handler={Welcome}/>
  <Route name="Dashboard" path="dashboard" handler={Dashboard}/>
  <Route name="Login" path="login" handler={Login}/>
</Route>
