import './App.css';
import {useEffect, useState} from "react";
import {
  getUser,
  getUsers,
  getAlbums,
  getAlbum,
  getPost,
  getPosts,
  getTodos,
  getTodo
} from "./components/services/Services";
import Users from "./components/users/Users";
import ChosenUser from "./components/chosenUser/ChosenUser";
import ChosenPost from "./components/chosenPost/ChosenPost";
import Posts from "./components/posts/Posts";
import Albums from "./components/albums/Albums";
import ChosenAlbum from "./components/chosenAlbum/ChosenAlbum";
import Todos from "./components/todos/Todos";
import ChosenTodo from "./components/chosenTodo/ChosenTodo";

function App() {
  let [users, setUsers] = useState([]);
  let [userDetails, setUserDetails] = useState(null);
  let [posts, setPosts] = useState([]);
  let [postDetails, setPostDetails] = useState(null);
  let [albums, setAlbums] = useState([]);
  let [albumsDetail, setAlbumsDetail] = useState(null);

  useEffect(() => {
    getUsers().then(response => setUsers(response.data));
  }, [])

  useEffect(() => {
    getPosts().then(response => setPosts(response.data))
  }, [])

  useEffect(() => {
    getAlbums().then(response => setAlbums(response.data))
  },[])

  let findUser = (id) => {
      getUser(id).then(value => setUserDetails(value.data));
  }

  let findPost = (id) => {
    getPost(id).then(value => setPostDetails(value.data));
  }

  let findAlbum = (id) => {
    getAlbum(id).then(value => setAlbumsDetail(value.data));
  }

  let [todos, setTodo] = useState([]);
  let [todoStatus, setTodoStatus] = useState(null);

  useEffect(() => {
    getTodos().then(value => setTodo(value.data))
  })

  let findTodo = (id) => {
    getTodo(id).then(value => setTodoStatus(value.data))
  }

  return (
    <div>
      <Users item = {users} findUser = {findUser}/>
      <hr />
    {
      userDetails && <ChosenUser item= {userDetails}/>
    }
      <hr />

      <Posts item = {posts} findPost = {findPost} postDetails = {postDetails}/>
      <hr/>
      {
        postDetails && <ChosenPost item = {postDetails}/>
      }
      <hr/>

    <Albums item = {albums} findAlbum = {findAlbum}/>
    <hr/>
      {
        albumsDetail && <ChosenAlbum item={albumsDetail} key = {albumsDetail.id}/>
      }
    <hr/>

    <Todos item={todos} findTodo={findTodo} />
    <hr/>
      {
        todoStatus && <ChosenTodo item={todoStatus} />
      }
    <hr/>
    </div>
  );
}

export default App;
