import './Login.css';

function Login({ onLogin }) {
  const handleKakaoLogin = () => {
    // TODO: 카카오 로그인 API 연동
    console.log('카카오 로그인 클릭');
    if (onLogin) onLogin();
  };

  return (
    <div className="login-container">
      {/* 반짝이 장식들 */}
      <span className="login-deco deco-star1">✦</span>
      <span className="login-deco deco-star2">⭐</span>
      <span className="login-deco deco-star3">✨</span>
      <span className="login-deco deco-heart1">💗</span>
      <span className="login-deco deco-heart2">💕</span>

      {/* 메인 카드 */}
      <div className="login-card">
        {/* 캐릭터 */}
        <div className="login-character-wrapper">
          <img 
            src="/bear2.png" 
            alt="귀여운 곰 캐릭터" 
            className="login-bear"
          />
        </div>

        {/* 타이틀 */}
        <h1 className="login-title">메시지 타임캡슐</h1>
        <p className="login-subtitle">
          소중한 메시지를 담아<br />
          특별한 날에 열어보세요 💌
        </p>

        {/* 카카오 로그인 버튼 */}
        <button className="kakao-login-btn" onClick={handleKakaoLogin}>
          <svg 
            className="kakao-icon" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.47 1.607 4.647 4.093 5.903-.17.616-.63 2.235-.722 2.581-.114.435.16.429.337.312.14-.093 2.234-1.518 3.14-2.132.37.051.754.078 1.152.078 5.523 0 10-3.477 10-7.742C20 6.477 17.523 3 12 3z"/>
          </svg>
          카카오로 시작하기
        </button>

        {/* 서비스 설명 */}
        <div className="login-features">
          <div className="feature-item">
            <span className="feature-icon">📝</span>
            <span className="feature-text">캡슐 만들고 링크 공유</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">💌</span>
            <span className="feature-text">친구들이 메시지 작성</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🎉</span>
            <span className="feature-text">정해진 날에 한 번에 오픈!</span>
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <div className="login-footer">
        <span>💌</span> 메시지 타임캡슐
      </div>
    </div>
  );
}

export default Login;

