import {useRef} from "react";
import {connect} from "react-redux";
import {fetchPostsAC, newMessageAC} from "./redux/appReducer";

const App = props => {
  const inputRef = useRef(null)

  const buttonClickHandler = () => {
    if (inputRef.current.value.trim()) {
      props.newMessageAC(inputRef.current.value.trim())
    }
    inputRef.current.value = ''
  }

  return (
    <div>
      <p>
        {props.text}
      </p>
      <input type='text' ref={inputRef}/>
      <button onClick={buttonClickHandler}>
        click
      </button>
      <button onClick={() => {props.fetchPostsAC()}}>Fetch</button>
      {props.posts
        ? props.posts.map(p => <div key={p.id}>
          <p>
            {p.title}
          </p>
        </div>)
        : null
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    text: state.app.text,
    posts: state.app.posts
  }
}

const mapDispatchToProps = {
  newMessageAC,
  fetchPostsAC
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
