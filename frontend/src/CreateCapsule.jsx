import { useState } from 'react';
import './CreateCapsule.css';

function CreateCapsule({ onNext }) {
  const [capsuleTitle, setCapsuleTitle] = useState('');
  const [openDateTime, setOpenDateTime] = useState('');
  const [allowAnonymous, setAllowAnonymous] = useState(true);
  const [onePerPerson, setOnePerPerson] = useState(true);
  const [showOptions, setShowOptions] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      capsuleTitle,
      openDateTime,
      allowAnonymous,
      onePerPerson,
    });
    if (onNext) onNext();
  };

  return (
    <div className="create-capsule-container">
      {/* 히어로 카드 */}
      <div className="hero-card">
        {/* 반짝이 장식들 */}
        <span className="deco deco-star1">✦</span>
        <span className="deco deco-star2">⭐</span>
        <span className="deco deco-star3">✨</span>
        <span className="deco deco-heart1">💗</span>
        <span className="deco deco-heart2">💕</span>
        <span className="deco deco-candy">🍬</span>
        <span className="deco deco-bird1">🐦</span>
        <span className="deco deco-bird2">🐤</span>

        {/* 캐릭터 이미지 */}
        <div className="character-wrapper">
          <div className="character-container">
            <img 
              src="/bear2.png" 
              alt="귀여운 곰 캐릭터" 
              className="bear-character"
            />
            <div className="speech-bubble">두근두근 💓</div>
          </div>
        </div>

        <h1 className="hero-title">
          메시지 타임캡슐
        </h1>
        <p className="hero-subtitle">
          지금 남긴 메시지를<br />
          정해진 날에 한 번에 열어보세요
        </p>
      </div>

      {/* 폼 카드 */}
      <div className="create-capsule-content">
        <form onSubmit={handleSubmit} className="capsule-form">
          {/* 캡슐 제목 */}
          <div className="form-group">
            <label className="form-label">캡슐 제목</label>
            <input
              type="text"
              className="form-input"
              placeholder="예) 2026 새해 덕담함"
              value={capsuleTitle}
              onChange={(e) => setCapsuleTitle(e.target.value)}
              required
            />
          </div>

          {/* 오픈 날짜/시간 */}
          <div className="form-group">
            <label className="form-label">오픈 날짜/시간</label>
            <div className="datetime-input-wrapper">
              <span className="datetime-icon">📅</span>
              <input
                type="datetime-local"
                className="form-input datetime-input"
                value={openDateTime}
                onChange={(e) => setOpenDateTime(e.target.value)}
                required
              />
            </div>
          </div>

          {/* 옵션 (접기 가능) */}
          <div className="options-section">
            <button
              type="button"
              className="options-toggle"
              onClick={() => setShowOptions(!showOptions)}
            >
              추가 옵션 {showOptions ? '▲' : '▼'}
            </button>
            {showOptions && (
              <div className="options-content">
                <label className="checkbox-option">
                  <input
                    type="checkbox"
                    checked={allowAnonymous}
                    onChange={(e) => setAllowAnonymous(e.target.checked)}
                  />
                  <span className="checkbox-label">🙈 익명 허용</span>
                </label>
                <label className="checkbox-option">
                  <input
                    type="checkbox"
                    checked={onePerPerson}
                    onChange={(e) => setOnePerPerson(e.target.checked)}
                  />
                  <span className="checkbox-label">☝️ 1인 1개만 작성</span>
                </label>
              </div>
            )}
          </div>

          {/* 만들기 버튼 */}
          <button type="submit" className="submit-button">
            캡슐 만들기
          </button>
        </form>
      </div>

      {/* 푸터 */}
      <div className="footer-info">
        <div className="footer-badge">
          <span>💌</span> 메시지 타임캡슐
        </div>
      </div>
    </div>
  );
}

export default CreateCapsule;
