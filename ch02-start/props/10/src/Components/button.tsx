interface ButtonProps {
  children: React.ReactNode;
  // 버튼에서 발생하는 마우스 이벤트 처리 핸들러
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

// children prop은 특별히 예약된 이름으로, 컴포넌트 사이에 넣는 모든 요소나 텍스트가 자동으로 전달됨
function Button({ children, onClick }: ButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
