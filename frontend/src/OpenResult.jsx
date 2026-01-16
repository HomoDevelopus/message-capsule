import { useState } from 'react';
import './OpenResult.css';

// 더미 메시지 데이터
const dummyMessages = [
  { id: 1, nickname: '익명', message: '올해도 건강하고 행복하게 보내세요! 항상 응원합니다 💪', isAnonymous: true },
  { id: 2, nickname: '민지', message: '새해 복 많이 받으세요~ 올해는 좋은 일만 가득하길 바랍니다! 🎊', isAnonymous: false },
  { id: 3, nickname: '익명', message: '항상 밝은 에너지 주셔서 감사해요. 2026년도 화이팅! ✨', isAnonymous: true },
  { id: 4, nickname: '철수', message: '올해도 잘 부탁해요! 맛있는 거 많이 먹고 행복한 한 해 되세요 🍜', isAnonymous: false },
  { id: 5, nickname: '영희', message: '새해에는 하고 싶은 일 다 이루시길 바랍니다! 파이팅~ 💕', isAnonymous: false },
  { id: 6, nickname: '익명', message: '늘 감사하고 있어요. 건강 챙기세요! 🙏', isAnonymous: true },
];

function OpenResult({ capsuleTitle = "2026 새해 덕담함" }) {
  const [messages] = useState(dummyMessages);
  const [showConfetti, setShowConfetti] = useState(true);

  // 3초 후 컨페티 숨기기
  setTimeout(() => setShowConfetti(false), 4000);

  return (
    <div className="result-container">
      {/* 컨페티 효과 */}
      {showConfetti && (
        <div className="confetti-container">
          {[...Array(30)].map((_, i) => (
            <div key={i} className={`confetti confetti-${i % 6}`} style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }} />
          ))}
        </div>
      )}

      {/* 반짝이 장식들 */}
      <span className="result-deco deco-star1">✦</span>
      <span className="result-deco deco-star2">⭐</span>
      <span className="result-deco deco-star3">✨</span>
      <span className="result-deco deco-heart1">💗</span>
      <span className="result-deco deco-heart2">💕</span>

      {/* 헤더 */}
      <div className="result-header">
        <div className="result-character-wrapper">
          <img 
            src="/bear2.png" 
            alt="귀여운 곰 캐릭터" 
            className="result-bear"
          />
          <div className="result-speech-bubble">두근두근 💓</div>
        </div>

        <h1 className="result-title">🎉 타임캡슐 오픈!</h1>
        
        <div className="capsule-badge">
          <span>📦</span> {capsuleTitle}
        </div>

        <p className="result-subtitle">
          총 <strong>{messages.length}개</strong>의 메시지가 도착했어요!
        </p>
      </div>

      {/* 메시지 카드들 */}
      <div className="messages-grid">
        {messages.map((msg, index) => (
          <div 
            key={msg.id} 
            className="message-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="message-header">
              <span className="message-sender">
                {msg.isAnonymous ? '🙈 익명' : `💌 ${msg.nickname}`}
              </span>
            </div>
            <p className="message-content">{msg.message}</p>
          </div>
        ))}
      </div>

      {/* 푸터 */}
      <div className="result-footer">
        <div className="footer-badge">
          <span>💌</span> 메시지 타임캡슐
        </div>
      </div>
    </div>
  );
}

export default OpenResult;

