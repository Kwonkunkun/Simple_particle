## 개요
- particle 효과, 비 효과를 html canvas, javascirpt로 구현
<img width="597" alt="gif" src="https://user-images.githubusercontent.com/59603575/103177421-c10ff780-48bd-11eb-9537-5cd74dd43c34.gif">

---

## 추가 사항

### 12/30
<img width="597" alt="gif" src="https://user-images.githubusercontent.com/59603575/103346337-0e1ae600-4ad7-11eb-8b23-e5f618819610.gif">

- 버튼을 통해 배경변경
- 버튼을 통해 비, 눈 선택 가능
- 버튼을 통해 bgm 기능 on, off
- 다음 페이지로 넘어가는 click me 버튼 추가 

### 1/4

```diff
! 문제 : 모바일 디바이스에서 터치시 파티클이 움직이지 않는 문제, 모바일 환경에서의 hover 관련 움직임 없애기
+ 해결 : 모바일 환경에서는 touchmove 이벤트를 사용하여 해결, 따로 클래스를 추가하여 해결

! 문제 : 모바일 환경에서 터치움직임시 canvas자체가 움직이는 문제
+ 해결 : css에서 overflow: hidden; 을 추가하여 해결 
```

### 1/5

```diff
+ 추가사항 : 먼저 필요한 이미지를 동기식으로 로드해서 사용성 개선

+ 폰트 에러 고침
```

### 1/9 ~ 1/10
<img width="597" alt="gif" src="https://user-images.githubusercontent.com/59603575/104115376-3f56aa00-5352-11eb-93e8-072de55c20e3.gif">

```diff
+ 추가사항 : button 형식 변경

+ 초기에 파티클이 흩어졌다가 모이게 하는 효과 추가
```









