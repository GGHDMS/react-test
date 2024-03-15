import './App.css';
import {useState} from "react";

function App() {
  let post = "강남 우동 맛집"
  let [글제목, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '리액트 공부'])
  let [좋아요, set좋아요] = useState(0);

  return (<div className="App">
    <div className="black-nav">
      <h4>ReactBlog</h4>
    </div>
    <h4 style={{color: 'red', fontSize: '16px'}}>{post}</h4>

    <button onClick={() => {
      let copy = [...글제목]
      copy[0] = '여자 코트 추천'
      setTitle(copy)
    }}> 제목 변경
    </button>

    <button onClick={() => {
      let copy = [...글제목]
      copy.sort();
      setTitle(copy)
    }}> 가나다순 정렬
    </button>

    <div className="list">
      <h4>{글제목[0]} <span onClick={() => {
        set좋아요(좋아요 + 1)
      }}>👍</span> {좋아요} </h4>
      <p>2월 17일 발행</p>
    </div>
    <div className="list">
      <h4>{글제목[1]}</h4>
      <p>2월 17일 발행</p>
    </div>
    <div className="list">
      <h4>{글제목[2]}</h4>
      <p>2월 17일 발행</p>
    </div>

    <Modal>
      

    </Modal>
  </div>);
}

const Modal2 = () => {
  return
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  )
}

export default App;
