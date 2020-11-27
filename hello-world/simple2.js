function LikeButton(){
    const [liked, setLiked]=React.useState(false);//초기값과 함께 컴포넌트의 상탯값 정의 / 여기서 React 변수는 react.development.js파일에서 전역변수로 생성
    const text=liked?'좋아요 취소':'좋아요';//컴포넌트의 상탯값에 따라 동적으로 버튼의 문구를 결정
    return React.createElement(
        'button',
        { onClick: () => setLiked(!liked) },
        text,
      );
}
ReactDOM.render(
  React.createElement(LikeButton), 
  document.querySelector('#react-root1'),
);
ReactDOM.render(
  React.createElement(LikeButton), 
  document.querySelector('#react-root2'),
);
ReactDOM.render(
  React.createElement(LikeButton), 
  document.querySelector('#react-root3'),
);

/*
const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(LikeButton), domContainer);
==
ReactDOM.render(React.createElement(LikeButton), document.querySelector('#react-root'));
*/