# Simple_particle
## 개요
- particle 효과, 비 효과를 html canvas, javascirpt로 구현
<img width="597" alt="gif" src="https://user-images.githubusercontent.com/59603575/103177421-c10ff780-48bd-11eb-9537-5cd74dd43c34.gif">
## 추가사항

### 12/30
<img width="597" alt="gif" src="https://user-images.githubusercontent.com/59603575/103346337-0e1ae600-4ad7-11eb-8b23-e5f618819610.gif">

- 버튼을 통해 배경변경
- 버튼을 통해 비, 눈 선택 가능
- 버튼을 통해 bgm 기능 on, off
- 다음 페이지로 넘어가는 click me 버튼 추가
--- 

### 1/4

```diff
- text in red
+ text in green
! text in orange
# text in gray
```
- 문제 : 이미지, 사운드의 load가 늦어 생기는 딜레이 or error문제
+ 해결 : aysnc를 이용해서 이미지, 사운드를 먼저 load해서 문제 해결

- 문제 : 모바일 디바이스에서 터치시 파티클이 움직이지 않는 문제, 모바일 환경에서의 hover 관련 움직임 없애기
+ 해결 : 모바일 환경에서는 touchmove 이벤트를 사용하여 해결, 따로 클래스를 추가하여 해결

- 문제 : 모바일 환경에서 터치움직임시 canvas자체가 움직이는 문제
+ 해결 : css에서 overflow: hidden; 을 추가하여 해결 
