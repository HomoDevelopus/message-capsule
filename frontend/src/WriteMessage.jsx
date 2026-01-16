import { useState } from 'react';
import './WriteMessage.css';

function WriteMessage({ capsuleTitle = "2026 새해 덕담함", onSubmit, onNext }) {
  const [nickname, setNickname] = useState('');
  const [message, setMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      nickname: isAnonymous ? '익명' : nickname,
      message,
      isAnonymous,
    });
    setIsSubmitted(true);
    if (onSubmit) onSubmit();
  };

  // 제출 완료 화면
  if (isSubmitted) {
    return (
      <div className="write-container">
        <span className="write-deco deco-star1">✦</span>
        <span className="write-deco deco-star2">⭐</span>
        <span className="write-deco deco-heart1">💗</span>
        <span className="write-deco deco-heart2">💕</span>

        <div className="write-card success-card">
          <div className="success-icon">✅</div>
          <h2 className="success-title">메시지 전달 완료!</h2>
          <p className="success-subtitle">
            소중한 메시지가<br />
            타임캡슐에 담겼어요 💌
          </p>
          
          <div className="success-info">
            <div className="success-capsule-name">
              <span>📦</span> {capsuleTitle}
            </div>
            <p className="success-hint">
              오픈 시간이 되면<br />
              다시 방문해서 확인해보세요!
            </p>
          </div>

          <div className="success-bear-wrapper">
            <img 
              src="/bear2.png" 
              alt="귀여운 곰 캐릭터" 
              className="success-bear"
            />
          </div>

          {/* 결과 보기 버튼 (테스트용) */}
          {onNext && (
            <button className="view-result-btn" onClick={onNext}>
              🎉 결과 미리보기
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="write-container">
      {/* 반짝이 장식들 */}
      <span className="write-deco deco-star1">✦</span>
      <span className="write-deco deco-star2">⭐</span>
      <span className="write-deco deco-star3">✨</span>
      <span className="write-deco deco-heart1">💗</span>
      <span className="write-deco deco-heart2">💕</span>

      {/* 히어로 영역 */}
      <div className="write-hero">
        <div className="write-character-wrapper">
          <img 
            src="/bear2.png" 
            alt="귀여운 곰 캐릭터" 
            className="write-bear"
          />
          <div className="write-speech-bubble">메시지 남겨요! 💌</div>
        </div>
      </div>

      {/* 캡슐 정보 */}
      <div className="capsule-info-badge">
        <span>📦</span> {capsuleTitle}
      </div>

      {/* 작성 폼 카드 */}
      <div className="write-card">
        <form onSubmit={handleSubmit} className="write-form">
          {/* 닉네임 */}
          <div className="form-group">
            <label className="form-label">보내는 사람</label>
            <div className="nickname-wrapper">
              <input
                type="text"
                className="form-input"
                placeholder="닉네임을 입력하세요"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                disabled={isAnonymous}
                required={!isAnonymous}
              />
              <label className="anonymous-checkbox">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                />
                <span>🙈 익명</span>
              </label>
            </div>
          </div>

          {/* 메시지 */}
          <div className="form-group">
            <label className="form-label">메시지</label>
            <textarea
              className="form-textarea"
              placeholder="따뜻한 메시지를 남겨주세요 💕"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              maxLength={500}
              required
            />
            <div className="char-count">
              {message.length} / 500
            </div>
          </div>

          {/* 제출 버튼 */}
          <button type="submit" className="submit-button">
            💌 메시지 보내기
          </button>
        </form>
      </div>

      {/* 푸터 */}
      <div className="write-footer">
        <span>💌</span> 메시지 타임캡슐
      </div>
    </div>
  );
}

export default WriteMessage;

