// admin_sidebar.js

// 사이드바 HTML + CSS + 동작 스크립트를 동적으로 삽입
(function () {
	const style = document.createElement('style');
	style.textContent = `
		/* 기본 스타일 초기화 */
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			text-decoration: none;
		}
		
		html, body {
    height: 100%; /* 추가 */
    margin: 0;
		}

		/* 햄버거 메뉴 버튼 */
		.hamburger {
			font-size: 2rem;
			padding: 10px 15px;
			cursor: pointer;
			background-color: #b9b9b9;
			border: none;
		}

		/* 사이드바 */
		.sidebar {
			position: fixed;
			top: 0;
			left: 0;
			width: 15vw;
			height: 100%;
			background-color: #b9b9b9;
			color: white;
			padding: 100px 10px;
			z-index: 1;
			display: block;
		}

		.sidebar ul {
			list-style-type: none;
			padding: 0;
		}

		.sidebar ul li {
			margin: 20px 0;
		}

		.sidebar ul li a,
		.sidebar ul li span {
			color: rgb(0, 0, 0);
			text-decoration: none;
			padding: 10px;
			display: block;
			transition: background-color 0.3s;
			font-size: 1.3rem;
		}

		.sidebar ul li a:hover {
			background-color: #555;
		}

		h3 {
			font-size: 1.7rem;
		}

		/* 모바일에서 사이드바 숨기고 햄버거 버튼 표시 */
		@media (max-width: 480px) {
			.sidebar {
				position: fixed;
				top: 0;
				left: 0;
				height: 100%;
				width: 70%;
				max-width: 300px;
				padding-top: 80px;
				background-color: #b9b9b9;
				z-index: 99;
				transform: translateX(-100%);
				transition: transform 0.3s ease;
				display: block;
			}

			.sidebar.open {
				transform: translateX(0);
			}

			.hamburger {
				display: block;
				position: fixed;
				top: 10px;
				left: 10px;
				z-index: 100;
			}
		}
			#logout-btn{
			font-weight:bold}

		@media (min-width: 750px) and (max-width: 1023px) {
      .sidebar {
			width: 25vw;
			}
			.main-wrapper {
			margin-left: 25vw;
			}
			.hamburger {
				display: none;
			}
			.close-btn {
				display: none;
			}
		}

		/* 태블릿과 PC에서는 사이드바 항상 보이게 */
		@media (min-width: 1024px) {
			.hamburger {
				display: none;
			}
			.close-btn {
				display: none;
			}
			.main-wrapper {
				margin-left: 15vw;
			}
		}
	`;
	document.head.appendChild(style);

	const sidebarHTML = `
		<!-- 햄버거 버튼 (모바일) -->
		<button class="hamburger">☰</button>

		<!-- 사이드바 -->
		<div class="sidebar" id="sidebar">
			<h3>관리자 페이지</h3>
			<ul>
				<li><a href="./admin_notice.html" class="admin_notice">공지사항 등록</a></li>
				<li><a href="./admin_report.html" class="admin_report">게시물 신고 목록</a></li>
				<li><a href="./admin_funding_reg.html" class="admin_funding_reg">펀딩 등록 신청</a></li>
				<li><a href="./admin_fes_prod.html" class="admin_des_prod">축제 상품 연동</a></li>
			</ul>
			<!-- 로그아웃 버튼 -->
			<ul>
				<li><a href="#" id="logout-btn" style="color:#e74c3c">로그아웃</a></li>
			</ul>
		</div>
	`;

	const container = document.getElementById('sidebar-container');
	if (container) {
		container.innerHTML = sidebarHTML;

		const hamburger = document.querySelector('.hamburger');
		const sidebar = document.getElementById('sidebar');
		const logoutBtn = document.getElementById('logout-btn');

		if (hamburger && sidebar) {
			// 햄버거 클릭 시 사이드바 열기/닫기 + 아이콘 변경
			hamburger.addEventListener('click', () => {
				const isOpen = sidebar.classList.toggle('open');
				hamburger.textContent = isOpen ? '✕' : '☰';
			});

			// 바깥 클릭 시 사이드바 닫기 (모바일 전용)
			document.addEventListener('click', (e) => {
				if (
					window.innerWidth <= 480 &&
					!sidebar.contains(e.target) &&
					!hamburger.contains(e.target)
				) {
					sidebar.classList.remove('open');
					hamburger.textContent = '☰';
				}
			});
		}

		// 로그아웃 버튼 클릭 시
		if (logoutBtn) {
			logoutBtn.addEventListener('click', function (e) {
				e.preventDefault();

				// loggedInUser 정보 삭제
				localStorage.removeItem('loggedInUser');

				// main.html로 이동
				window.location.href = '../mainpage/main.html';
			});
		}
	}
})();
