# 로컬 개발 환경 설정 가이드

MongoDB 연결 정보를 로컬에서 환경변수로 설정하는 방법입니다.

## 현재 설정

`application.yml`에서 MongoDB URI를 환경변수로부터 가져오도록 설정되어 있습니다:
```yaml
spring:
  data:
    mongodb:
      uri: ${MONGODB_URI}
```

## 로컬에서 환경변수 설정 방법

### 방법 1: 터미널에서 직접 export (임시)

현재 터미널 세션에서만 유효합니다:

```bash
export MONGODB_URI="mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority"
```

그 다음 서버 실행:
```bash
cd backend
./gradlew bootRun
```

### 방법 2: .zshrc에 추가 (영구 설정) - macOS

터미널을 열 때마다 자동으로 환경변수가 설정됩니다:

1. `~/.zshrc` 파일 열기:
```bash
nano ~/.zshrc
```

2. 파일 끝에 다음 줄 추가 (실제 값으로 변경하세요):
```bash
export MONGODB_URI="mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority"
```

3. 저장 후 다음 명령어로 적용:
```bash
source ~/.zshrc
```

이제 새 터미널을 열 때마다 자동으로 환경변수가 설정됩니다.

### 방법 3: 실행 시 환경변수와 함께 실행

매번 환경변수를 함께 지정하여 실행:

```bash
cd backend
MONGODB_URI="mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority" ./gradlew bootRun
```

### 방법 4: IDE에서 환경변수 설정

#### IntelliJ IDEA / Android Studio
1. Run → Edit Configurations
2. Environment variables에 추가:
   - Name: `MONGODB_URI`
   - Value: `mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority`
   
   ⚠️ **주의**: `<username>`, `<password>`, `<cluster-url>`, `<database>`를 실제 값으로 변경하세요

#### VS Code
`.vscode/launch.json` 파일 생성/수정:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "java",
      "name": "Spring Boot",
      "request": "launch",
      "mainClass": "com.messagecapsule.MessageCapsuleApplication",
      "env": {
        "MONGODB_URI": "mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority"
      }
    }
  ]
}
```

## 환경변수 확인 방법

터미널에서 환경변수가 제대로 설정되었는지 확인:

```bash
echo $MONGODB_URI
```

정상적으로 설정되었다면 MongoDB URI가 출력됩니다.

## MongoDB URI 형식

```
mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
```

- `<username>`: MongoDB Atlas 사용자명
- `<password>`: MongoDB Atlas 비밀번호
- `<cluster-url>`: 클러스터 URL (예: `message-capsule.cye9zdw.mongodb.net`)
- `<database>`: 데이터베이스 이름 (예: `message-capsule`)

## 보안 주의사항

⚠️ **중요**: 
- **절대** 실제 MongoDB 비밀번호를 문서 파일에 하드코딩하지 마세요
- 환경변수에만 실제 비밀번호를 저장하세요
- `.zshrc` 파일이 다른 사람에게 노출되지 않도록 주의하세요
- Git에 실제 비밀번호가 포함된 파일을 커밋하지 마세요
- `.env` 파일은 이미 `.gitignore`에 포함되어 있습니다
- MongoDB Atlas에서 비밀번호가 유출되었다면 즉시 비밀번호를 변경하세요

## 문제 해결

### 환경변수가 적용되지 않을 때

1. 환경변수 확인:
```bash
echo $MONGODB_URI
```

2. 터미널 재시작 또는 `.zshrc` 다시 로드:
```bash
source ~/.zshrc
```

3. IDE를 사용하는 경우 IDE 재시작

### MongoDB 연결 오류

- MongoDB Atlas에서 IP 접근 설정 확인 (Network Access)
- 사용자명/비밀번호 확인
- 클러스터 URL 확인

