import './App.css';
import Users from "./components/users/Users";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <div >
      <Router>

        <div><Link to='/'>Home page</Link></div>
        <div><Link to='/users'>Users</Link></div>
        <div><Link to='/posts'>Posts</Link></div>
        <div><Link to='/comments'>Comments</Link></div>

        <Switch>
          <Route path={'/'} exact render={() => {
            return <div>Home page</div>
          }}/>
          <Route path={'/users'} render={(props) => {
            return <Users {...props} />
          }}/>
          <Route path={'/posts'} render={(props) => {
            return <Posts {...props}/>
          }}/>
          <Route path={'/comments'} render={() => {
            return <Comments/>
        }} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
