// header.js

const headerHTML = `
  <style>
  .logo {
      height: 2.8rem;
      margin-left:2rem;
      margin-right:2rem;
  }

  .navbar_main {
    background-color:#e7f5e1;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    color: #000;
    z-index: 1000;
    animation: navbarBottom 1s forwards;
  }

  .navbar_burger {
    cursor: pointer;
    color: #000;
  }

  .navbar_overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.1s ease;
  }
  
  .auth_buttons {
    margin-right:3rem;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .submenu {
    display: none;
    background-color: #f4f4f4;
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
  }
  .submenu a {
    display: flex;
    flex-direction: column; /* 항목들이 세로로로 배치되도록 설정 */
  }

  .submenu.active {
      display: block;
  }

  
  /* PC (1024px 이상) */
  @media (min-width: 1024px) 
  {

    #tablet {
    display:none;
    }
    #mobile {
    display:none;
    }

    .navbar_links {
      margin-right: 1%;
      position: relative;
    }

    .navbar_links a {
      text-decoration: none;
      color: #000;
      margin-right: 0.2rem;
      font-weight: 600;
      position: relative;
      padding: 0.3rem 0;
    }

    .navbar_links a:last-child {
      margin-right: 0;
    }

    .navbar_links a::before {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 50%;
      width: 0;
      height: 3px;
      background-color: #0A8B11;
      transition: width 0.2s ease-in-out, left 0.2s ease-in-out;
    }

    .navbar_links a:hover::before {
      width: 100%;
      left: 0;
    }
    
     /* 세부 메뉴 링크 스타일 */
    .submenu {
      position: absolute;
      top: 115%;
      left: 0;
      width: 25%;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      padding: 10px;
    }
    
    .submenu a {
    font-size:70%;
    margin:0;
    }
    
    /* 공지사항에 호버 시 세부 메뉴 보이기 */
    #pc-notice:hover + .submenu,
    #pc-notice:hover .submenu {
    display: block;
    }
  

    @keyframes navbarBottom {
      0% {
        transform: translateY(-70%);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

  /* 태블릿 (768px ~ 1023px) */
  @media (max-width: 1023px) and (min-width: 768px) 
  {

    #pc {
    display:none;
    }
    #mobile {
    display:none;
    }

    .navbar_burger {
      position: fixed;
      top: 1rem;
      right: 1rem;
    }

    .navbar_burger_back {
      position: fixed;
      top: 1.5rem;
      right: 1.5rem;
      cursor: pointer;
      color: #fff;
    }

    /* 버튼을 오른쪽으로 밀고 햄버거 메뉴와 겹치지 않도록 설정 */
    .auth_buttons {
      position: fixed;
      top: 1.3rem;
      right: 70px; /* 햄버거 메뉴와 겹치지 않도록 간격 조정 */
      display: flex;
      gap: 1rem;
    }

    /* 메뉴 슬라이드 애니메이션 */
    .navbar_menu {
      position: fixed;
      top: 0;
      right: 0;
      width: 40%;
      height: 100%;
      background-color:rgb(135, 206, 138);
      padding: 0 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      transform: translateX(100%);  /* 메뉴 숨김 */
      z-index: 999;
      color: #ffffff;
      transition: transform 0.3s ease;
    }

    .navbar_menu a {
      position: relative;
      color: #ffffff;
      font-size: 1.5rem;
      margin-left: 1rem;
      margin-bottom: 3rem;
      text-decoration: none;
    }

    .navbar_menu.active {
      transform: translateX(0);  /* active 클래스 추가 시 메뉴 보이도록 */
    }

    .navbar_overlay.active {
      opacity: 1;
      pointer-events: auto;  /* active 클래스 추가 시 오버레이 활성화 */
    }
  
   /* 모바일 및 태블릿 클릭 이벤트를 위한 submenu 설정 */
    .submenu {
      display: none;
      margin-bottom:10px;
    }
    
    .submenu a{
      font-size: 20px;
      color:rgb(37, 58, 126);
      margin:15px;
    }
  }

    /* 모바일 (~ 767px) */
  @media (max-width: 767px)
  {
    #pc, #tablet{
    display:none;
    }
    .navbar_burger {
      position: fixed;
      margin-top:0.2rem;
      top: 0.7rem;
      right: 0.7rem;
    }
    .navbar_burger_back {
      position: fixed;
      top: 1.5rem;
      right: 1.5rem;
      cursor: pointer;
      color: #fff;
    }

    /* 버튼을 오른쪽으로 밀고 햄버거 메뉴와 겹치지 않도록 설정 */
    .auth_buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      margin-top: 6rem;
      margin-bottom: 2rem;
      margin-left:0.7rem;
      width: 80%;
    }
    .auth_buttons button {
      width: 100%;              /* 부모(.auth_buttons)의 80% 가로폭을 꽉 채움 */
      max-width: 300px;         /* 너무 커지지 않게 제한 */
      padding: 0.65rem 0.85rem;    /* 충분한 패딩으로 버튼 크기 확보 */
      font-size: 0.8rem;
      text-align: center;       /* 텍스트 가운데 정렬 */
      border: none;
      border-radius: 6px;
      background-color: #0a8b11;
      color: white;
      cursor: pointer;
    }

    /* 메뉴 슬라이드 애니메이션 */
    .navbar_menu {
      position: fixed;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      background-color:rgb(135, 206, 138);
      padding: 0 2rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;   /* 위쪽 정렬 */
      align-items: flex-start;
      transform: translateX(100%);  /* 메뉴 숨김 */
      z-index: 999;
      color: #ffffff;
      transition: transform 0.3s ease;
    }

    .navbar_menu a {
      position: relative;
      color: #ffffff;
      font-size: 1rem;
      margin-left: 0rem;
      margin-bottom: 3rem;
      text-decoration: none;
    }

    .navbar_menu.active {
      transform: translateX(0);  /* active 클래스 추가 시 메뉴 보이도록 */
      padding:1.2rem;
    }

    .navbar_overlay.active {
      opacity: 1;
      pointer-events: auto;  /* active 클래스 추가 시 오버레이 활성화 */
    }
    
    // #mobile-notice{
    //   margin-bottom:10px;
    // }
  
   /* 모바일 및 태블릿 클릭 이벤트를 위한 submenu 설정 */
    .submenu {
      display: none;
      background-color: #f4f4f4;
      padding:0;
      margin:0;
      margin-bottom:10px;
    }
    
    .submenu a{
      font-size: 0.7rem;
      color:rgb(37, 58, 126);
      margin:15px;
    }
  }
  </style>

  <!-- 모바일버전 -->
<div class="navbar_main" id="mobile">
  <div class="nav_logo">
    <a href="../mainpage/main.html"><img src="../resources/logo.png" alt="SIDEMENU 로고" class="logo" /></a>
  </div>
  <div class="navbar_burger">
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
  </svg>
  </div>
  <div class="navbar_overlay">
  <div class="navbar_menu">
  <div class="auth_buttons">
    <button onclick="location.href='../login_join/login.html'">로그인 / 회원가입</button>
    <button>+ 프로젝트</button>
    </div>
      <a href="#" id="mobile-notice">공지사항 ▾</a>
      <div class="submenu">
        <a href="../notice/notice.html">공지사항</a>
        <a href="../notice/brandstory.html">브랜드스토리</a>
        <a href="../notice/govt_support.html">정부지원정책</a>
      </div>
      <a href="../product/product_list.html">상품</a>
      <a href="../experience/experience.html">견학/체험</a>
      <a href="../festival/festival_list.html">축제</a>
      <a href="../community/community.html">커뮤니티</a>
      <div class="navbar_burger_back">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </div>
    </div>
  </div>
</div>

  <!-- 태블릿버전 -->
<div class="navbar_main" id="tablet">
  <div class="nav_logo">
    <a href="../mainpage/main.html"><img src="../resources/logo.png" alt="SIDEMENU 로고" class="logo" /></a>
  </div>
  <div class="auth_buttons">
    <button onclick="location.href='../login_join/login.html'">로그인 / 회원가입</button>
    <button>+ 프로젝트</button>
  </div>
  <div class="navbar_burger">
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
  </div>
  <div class="navbar_overlay">
    <div class="navbar_menu">
      <a href="#" id="tablet-notice">공지사항 ▾</a>
      <div class="submenu">
        <a href="../notice/notice.html">공지사항</a>
        <a href="../notice/brandstory.html">브랜드스토리</a>
        <a href="../notice/govt_support.html">정부지원정책</a>
      </div>
      <a href="../product/product_list.html">상품</a>
      <a href="../experience/experience.html">견학/체험</a>
      <a href="../festival/festival_list.html">축제</a>
      <a href="../community/community.html">커뮤니티</a>
      <div class="navbar_burger_back">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </div>
    </div>
  </div>
</div>

<!-- PC 버전 -->
<div class="navbar_main" id="pc">
  <div class="nav_logo">
    <a href="../mainpage/main.html"><img src="../resources/logo.png" alt="SIDEMENU 로고" class="logo" /></a>
  </div>
  <div class="navbar_links">
    <a href="#" id="pc-notice">&nbsp공지사항 ▾&nbsp</a>
    <div class="submenu">
        <a href="../notice/notice.html">&nbsp&nbsp&nbsp&nbsp공지사항</a>
        <a href="../notice/brandstory.html">&nbsp브랜드스토리</a>
        <a href="../notice/govt_support.html">&nbsp정부지원정책</a>
    </div>
    <a href="../product/product_list.html">&nbsp상품&nbsp&nbsp</a>
    <a href="../experience/experience.html">&nbsp견학/체험&nbsp&nbsp</a>
    <a href="../festival/festival_list.html">&nbsp축제&nbsp&nbsp</a>
    <a href="../community/community.html">&nbsp커뮤니티&nbsp&nbsp</a>
  </div>
  <div class="auth_buttons">
    <button onclick="location.href='../login_join/login.html'">로그인 / 회원가입</button>
    <button>+ 프로젝트</button>
  </div>
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
	// HTML 삽입
	document.body.insertAdjacentHTML('afterbegin', headerHTML);

	// 로그인/회원가입 버튼 처리
	updateAuthButtons(); // ← 이거 중요!!

	// 📱 모바일 요소
	const mobileBurger = document.querySelector('#mobile .navbar_burger');
	const mobileMenu = document.querySelector('#mobile .navbar_menu');
	const mobileOverlay = document.querySelector('#mobile .navbar_overlay');
	const mobileBack = document.querySelector('#mobile .navbar_burger_back');

	if (mobileBurger && mobileMenu && mobileOverlay && mobileBack) {
		mobileBurger.addEventListener('click', () => {
			mobileMenu.classList.add('active');
			mobileOverlay.classList.add('active');
		});
		mobileBack.addEventListener('click', () => {
			mobileMenu.classList.remove('active');
			mobileOverlay.classList.remove('active');
		});
	}

	// 💻 태블릿 요소
	const tabletBurger = document.querySelector('#tablet .navbar_burger');
	const tabletMenu = document.querySelector('#tablet .navbar_menu');
	const tabletOverlay = document.querySelector('#tablet .navbar_overlay');
	const tabletBack = document.querySelector('#tablet .navbar_burger_back');

	if (tabletBurger && tabletMenu && tabletOverlay && tabletBack) {
		tabletBurger.addEventListener('click', () => {
			tabletMenu.classList.add('active');
			tabletOverlay.classList.add('active');
		});
		tabletBack.addEventListener('click', () => {
			tabletMenu.classList.remove('active');
			tabletOverlay.classList.remove('active');
		});
	}

	// 📄 공지사항 submenu 토글 (모바일/태블릿)
	const tabletNotice = document.getElementById('tablet-notice');
	const tabletSubmenu = tabletNotice ? tabletNotice.nextElementSibling : null;

	const mobileNotice = document.getElementById('mobile-notice');
	const mobileSubmenu = mobileNotice ? mobileNotice.nextElementSibling : null;

	if (tabletNotice && tabletSubmenu) {
		tabletNotice.addEventListener('click', () => {
			tabletSubmenu.classList.toggle('active');
		});
	}

	if (mobileNotice && mobileSubmenu) {
		mobileNotice.addEventListener('click', () => {
			mobileSubmenu.classList.toggle('active');
		});
	}

	// 🖥️ PC - 공지사항 hover 시 submenu 열기
	const pcNotice = document.getElementById('pc-notice');
	const pcSubmenu = pcNotice ? pcNotice.nextElementSibling : null;

	if (pcNotice && pcSubmenu) {
		pcNotice.addEventListener('mouseenter', () => {
			pcSubmenu.style.display = 'block';
		});
		pcSubmenu.addEventListener('mouseenter', () => {
			pcSubmenu.style.display = 'block';
		});
		pcNotice.addEventListener('mouseleave', () => {
			pcSubmenu.style.display = 'none';
		});
		pcSubmenu.addEventListener('mouseleave', () => {
			pcSubmenu.style.display = 'none';
		});

		const headerList = document.querySelectorAll('.navbar_main');
		for (const header of headerList) {
			if (getComputedStyle(header).display !== 'none') {
				const headerHeight = header.offsetHeight;
				document.body.style.paddingTop = `${headerHeight}px`;
				break;
			}
		}
	}
});

// 🔽 로그인 상태에 따라 버튼 교체 함수
function updateAuthButtons() {
	const authButtons = document.querySelectorAll('.auth_buttons');
	const userJson = localStorage.getItem('loggedInUser');

	const isLoggedIn = !!userJson;
	const user = isLoggedIn ? JSON.parse(userJson) : null;

	authButtons.forEach((authDiv) => {
		authDiv.innerHTML = ''; // 기존 버튼 제거

		if (isLoggedIn) {
			// 마이페이지 버튼
			const myPageBtn = document.createElement('button');
			myPageBtn.textContent = '마이페이지';
			myPageBtn.onclick = () => (location.href = '../mypage/mypage.html');
			authDiv.appendChild(myPageBtn);
		} else {
			// 로그인/회원가입 버튼
			const loginBtn = document.createElement('button');
			loginBtn.textContent = '로그인 / 회원가입';
			loginBtn.onclick = () => (location.href = '../login_join/login.html');
			authDiv.appendChild(loginBtn);
		}

		// +프로젝트 버튼 (항상 보여짐)
		const projectBtn = document.createElement('button');
		projectBtn.textContent = '+ 프로젝트';

		if (isLoggedIn) {
			projectBtn.onclick = () => (location.href = '../project/create_proj.html');
		} else {
			projectBtn.onclick = () => alert('로그인 후 이용 가능합니다.');
		}

		authDiv.appendChild(projectBtn);

		if (isLoggedIn) {
			// 로그아웃 버튼
			const logoutBtn = document.createElement('button');
			logoutBtn.textContent = '로그아웃';
			logoutBtn.onclick = () => {
				localStorage.removeItem('loggedInUser');
				window.location.href = '../mainpage/main.html';
			};
			authDiv.appendChild(logoutBtn);
		}
	});
}
