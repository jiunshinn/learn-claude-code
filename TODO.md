# TODO - Learn Claude Code

## 1. CLI / 터미널이란?

### CLI(Command Line Interface)란?
- 텍스트 명령어로 컴퓨터와 대화하는 방식
- GUI(마우스 클릭)와 반대 개념 — 키보드만으로 모든 걸 제어
- 예: `ls`(파일 목록), `cd`(폴더 이동), `git`(코드 관리)

### 터미널이란?
- CLI를 실행하는 프로그램 (창문 같은 것)
- macOS: Terminal.app, iTerm2 / Windows: PowerShell, Windows Terminal
- 터미널 안에서 shell(zsh, bash)이 명령어를 해석해줌

### 왜 Claude Code가 좋은가?
- 터미널에서 바로 AI와 협업 — IDE 전환 없이 코드 작성/수정/검색
- 파일 읽기, 편집, 검색, 실행을 AI가 직접 수행
- Git 워크플로우와 자연스럽게 통합
- MCP 서버로 브라우저, DB, API 등 외부 도구 연결 가능
- 컨텍스트를 유지하며 대화형으로 복잡한 작업 처리


## 2. MCP vs Skill — 차이점과 활용법

### MCP (Model Context Protocol)
- **정의**: 외부 도구/서비스를 Claude에 연결하는 프로토콜
- **역할**: 브라우저 제어, DB 조회, API 호출 등 외부 세계와의 연결
- **예시**:
  - `claude-in-chrome` — 브라우저 자동화
  - `context7` — 라이브러리 문서 실시간 조회
  - `playwright` — 웹 테스트 자동화
- **설정**: `~/.claude/settings.json` 또는 프로젝트 `.mcp.json`

### Skill
- **정의**: 미리 정의된 프롬프트/워크플로우를 슬래시 커맨드로 실행
- **역할**: 반복 작업을 한 단어로 실행 (`/commit`, `/simplify` 등)
- **예시**:
  - `/commit` — 컨벤셔널 커밋 메시지 자동 생성
  - `/simplify` — 코드 품질 리뷰 및 개선
  - `/frontend-design` — 프론트엔드 UI 생성
- **설정**: `~/.claude/skills/` 디렉토리에 커스텀 스킬 추가 가능

### 핵심 차이
| 구분 | MCP | Skill |
|------|-----|-------|
| 목적 | 외부 도구 연결 | 내부 워크플로우 자동화 |
| 방식 | 서버 프로세스로 실행 | 프롬프트 템플릿 실행 |
| 호출 | Claude가 자동으로 판단해서 사용 | 사용자가 `/명령어`로 직접 호출 |
| 확장 | MCP 서버 개발/설치 | 프롬프트 파일 작성 |


## 3. Q&A — 질문과 답변

### Q: Claude Code와 ChatGPT 같은 웹 AI의 차이는?
- A: (작성 예정)

### Q: CLAUDE.md 파일은 뭐고 왜 필요한가?
- A: (작성 예정)

### Q: Claude Code에서 자주 쓰는 명령어는?
- A: (작성 예정)

### Q: 프로젝트에 Claude Code를 처음 도입할 때 뭐부터 해야 하나?
- A: (작성 예정)

---

## 팀원 Q&A (FAQ 페이지에 추가 완료)

### 도현
- ✅ 깃허브 관리법
- ✅ CLI <-> 깃허브 통한 협업 포인트 파악
- ✅ 상황에 맞는 AI 툴 선택 기준
- ✅ 0 to 1 바이브코딩 방향 잡을 때 팁

### 동욱
- ✅ 기획자가 CLI로 수정사항 생성 시, 체크포인트로 변경 이력 관리하는 방법
