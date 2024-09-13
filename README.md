# Project Major package version

node : ^18.0.0, ^20.0.0(recommended)
yarn : ^1.20
next : ^14.0.0

# script

- $ dev : 개발모드로 실행
- $ dev:analysis : 개발모드로 실행하면서 번들 분석 (분석 툴 수정 시)
- $ build : 빌드
- $ start : 빌드된 파일로 실행

# Related Domain

- [Docs](https://www.notion.so/5436cb4e78054e85a7ca5cd669082206)
- [Repo](https://github.com/wildflower-keeper/frontend)
- [Product](https://wildflower-gardening.com)
- [Product-API](http://api.wildflower-gardening.com)

# Maintainer

- [이창수]
- [이종호]
- [엄성현]

## 사용방법

---

```
yarn
yarn run dev
```

## 배포

이 프로젝트는 AWS [Amplify](https://aws.amazon.com/ko/amplify)를 사용하여 배포됩니다.

### 배포 방법

##### Amplify Console에 로그인

1. AWS Management Console에 로그인
2. 서비스 목록에서 Amplify를 선택
3. 새로운 Amplify 애플리케이션 생성
4. Git 리포지토리와 연결

##### 앱 빌드 사양 설정

amplify.yaml

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - yarn install --frozen-lockfile
    build:
      commands:
        - yarn run build
  artifacts:
    baseDirectory: .next
    files:
      - "**/*"
  cache:
    paths:
      - .next/cache/**/*
      - node_modules/**/*
```

상세 내용은 아래 설명서를 참고하시는 것이 좋습니다.

[Amplify 설명서](https://aws.amazon.com/ko/amplify/hosting/)
