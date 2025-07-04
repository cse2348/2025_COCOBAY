import React from 'react';
import '../styles/Welcome.css';

const Welcome: React.FC = () => {
  console.log('✅ Welcome 컴포넌트 렌더링됨');

  return (
    <div className="container">
      <h2>만나서 반갑습니다!</h2>
      <p>현재 상태를 알려주세요</p>

      <button onClick={() => alert("임신 준비 중이에요")}>임신 준비 중이에요</button>
      <button onClick={() => alert("아기가 태어날 예정이에요")}>아기가 태어날 예정이에요</button>
      <button onClick={() => alert("아기를 키우고 있어요")}>아기를 키우고 있어요</button>

      <p className="info">회원가입 후 언제든 마이페이지에서 정보를 수정할 수 있어요!</p>
    </div>
  );
};

export default Welcome;
