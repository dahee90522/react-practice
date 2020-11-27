function LikeButton(){
  const [liked, setLiked]=React.useState(false);//초기값과 함께 컴포넌트의 상탯값 정의 / 여기서 React 변수는 react.development.js파일에서 전역변수로 생성
  const text=liked?'좋아요 취소':'좋아요';//컴포넌트의 상탯값에 따라 동적으로 버튼의 문구를 결정
  return React.createElement(
      'button',
      { onClick: () => setLiked(!liked) },
      text,
    );
}
function Container(){
  const [count, setCount]=React.useState(0);
  return React.createElement(
    'div',
    null,
    React.createElement(LikeButton),
    React.createElement(
      'div',
      {style:{marginTop : 20}},
      React.createElement('span', null, '현재 카운트: '),
      React.createElement('span', null, count),
      React.createElement(
        'button',
        {onClick:()=>setCount(count+1)},
        '증가',
      ),
      React.createElement(
        'button',
        {onClick:()=>setCount(count-1)},
        '감소',
      )
    )
  )
}
const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(Container), domContainer);

/*
const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(LikeButton), domContainer);
==
ReactDOM.render(React.createElement(LikeButton), document.querySelector('#react-root'));
*/