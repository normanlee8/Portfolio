<!DOCTYPE html>
<html>
    <head>
        <title>Portfolio — beep</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="css/unio-case-study.css" rel="stylesheet"> 
        <link href="css/animation.css" rel="stylesheet">
        <link href="css/headerforCS.css" rel="stylesheet">
        <link href="css/content.css" rel="stylesheet">
        <link href="css/general.css" rel="stylesheet">
        <link href="css/home-page.css" rel="stylesheet">
        <script src="https://kit.fontawesome.com/9dddffe1a8.js" crossorigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100;0,400;0,700;1,400;1,700&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,700;0,900;1,700;1,900&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@600;700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@1&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

        <meta name="msapplication-TileImage" content="images/WEBSITE-THUMBB.png">
 
        <meta property="og:site_name" content="beep Design">
        <meta property="og:title" content="beep, UX Designer">
        <meta property="og:description" content="I'm Alice, a UX Designer aiming to create an accessible and user-centered experience. I am currently studying Cognitive Science @ UCSD.">
        
        <meta property="og:image" itemprop="image" content="images/WEBSITE-THUMBB.png">
        
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/png">
        
        <meta property="og:image:width" content="300">
        <meta property="og:image:height" content="300">
        
        <meta property="og:url" content="https://alicemadesign.com">
        <link rel="shortcut icon" type="x-icon" href="images/webicon.png">
        
        <body class="">
            <!-- <div class="introduction">
                <h1 class="logo-header">
                    <span class="logoo word1">beep</span><span class="logoo word2">DESIGN</span>
                </h1>
            </div> -->
            <header class="remove header-bar">
                <header class="pop-down inside">
                    <div class="left-section">
                        <a href="https://alicemadesign.com" class="logo-container logo">
                            beep
                        </a>
                    </div>
                    <div class="hamburger">
                        <div class="line one"></div>
                        <div class="line two"></div>
                        <div class="line three"></div>
                    </div>
                    
                    <nav class="nav-bar">
                        <ul>
                            <li class="dropdown left">
                                <div class="hover-underline-animation drop-button">
                                    <p class="WORKS-container" onclick="goToWorks()">
                                        Work <i class="fa-solid fa-chevron-down scroll"></i>
                                    </p>
                                    <b class="dropdown-content removepad">
                                        <a class="list-item" href="https://alicemadesign.com/pega">Pega</a>
                                        <a class="list-item" href="https://alicemadesign.com/medtime">MedTime</a>
                                        <a class="list-item" href="https://alicemadesign.com/cinema">CineMa</a>
                                        <a class="list-item" href="https://alicemadesign.com/unio">UniO</a>
                                    </b>
                                </div>
                            </li>
                        
                            <li>
                                <a class="hover-underline-animation" href="https://alicemadesign.com/about">About</a>
                            </li>
            
                            <!-- <li>
                                <a class="hover-underline-animation" target="_blank" href="images/resume.pdf">Resume</a>
                            </li> -->
                                
                            <li>
                                <a class="hover-underline-animation" href="https://alicemadesign.com/contact">Contact</a>
                            </li>
    
                            <li class="right-btn">
                                <a class="hover-underline-animation" href="https://alicemadesign.com/resume">Resume</a>
                            </li>
                            <!-- <li class="right-btn">
                                <a class="read-more" href="https://alicemadesign.com/contact">Resume</a>
                            </li> -->
                        </ul>
                    </nav>
                </header>
            </header>
            <script>
                // function myFunction(x) {
                //     if (x.matches) { // If media query matches
                //         document.querySelector(".nav-bar ul li div p .fa-solid").style.display = "none";

                //     } else {
                //         document.body.style.backgroundColor = "pink";
                //     }
                // }

                // var x = window.matchMedia("(max-width: 900px)")
                // myFunction(x) // Call listener function at run time
                // x.addListener(myFunction) // Attach listener function on state changes
                
                // works = document.querySelector(".nav-bar li");
                // works.onmouseover = function() {
                //     arrow = document.querySelector(".fa-solid");
                //     arrow.classList.toggle("fa-chevron-down");
                //     arrow.classList.toggle("fa-chevron-up");
                // }
                // works.onmouseout = function() {
                //     arrow = document.querySelector(".fa-solid");
                //     arrow.classList.toggle("fa-chevron-down");
                //     arrow.classList.toggle("fa-chevron-up");
                // }
                function goToWorks() {
                    document.getElementById("works").scrollIntoView();
                }
                hamburger = document.querySelector(".hamburger");
                hamburger.onclick = function() {
                    navBar = document.querySelector(".nav-bar");
                    hamburger = document.querySelector(".hamburger");
                    navBar.classList.toggle("active");
                    navBar.classList.toggle("black");
                    hamburger.classList.toggle("active");
                    works = document.querySelector(".dropdown");
                    works.classList.toggle("left");
                    droplist = document.querySelector(".nav-bar ul .dropdown");
                    droplist.classList.toggle("margins");
                    button = document.querySelector(".drop-button");
                    button.classList.toggle("hover-underline-animation")
                    contents = document.querySelector(".dropdown-content");
                    // contents.classList.toggle("removepad");
                }
            </script>
            
            <div class="remove landing-page">
                <!-- <a onclick="goToWorks()" class="appear go-to-works scroll-section"> -->
                <a onclick="goToWorks()" class="pop go-to-works">
                    <i class="fa-solid fa-chevron-down scroll"></i>
                    <p class="message">Take a look</p>
                </a>
                <div class="pop-up hero-text">
                    <p class="role">
                        UX DESIGNER @ <a title="ACM website" style="display: inline; text-decoration: underline;" href="https://www.acmucsd.com/about" target="_blank">ACM</a>
                        | PREV. @ <a title="Pega website" style="display: inline; text-decoration: underline;" href="https://www.pega.com" target="_blank">PEGA</a>
                    </p>
                    <h1>
                        Hi, I'm Alice!
                    </h1>
                    <p>
                        UX designer based in California. Currently studying interaction design at <a title="UCSD website" style="display: inline; text-decoration: underline;" href="https://www.ucsd.edu" target="_blank">UC San Diego</a>.
                         <!-- with a passion for creating accessible and intuitive user experiences.  -->
                    </p>
                </div>
                <!-- <div class="hero-text">
                    <p class="hello">Hi! I'm Alice,</p>
                    <p class="intro-desc">a UX Designer with a passion for creating accessible and intuitive user experiences. I am currently studying Cognitive Science @ UCSD.</p>
                </div> -->
                <!-- <div class="hero-text">
                    <div class="greeting">HI, NICE TO MEET YOU!</div>
                    <div class="intro">I'm Alice, a UX Designer with a passion for creating accessible and intuitive user experiences. I am currently studying Cognitive Science @ UCSD.</div>
                    <a onclick="goToWorks()" id="go-to-works" class="scroll-section">
                        <i class="fa-solid fa-chevron-down scroll"></i>
                        <p class="label">Scroll for more</p>
                    </a>
                </div> -->
                <!-- <div id="video">
                    <div id="container">
                        <script>
                            (function() {
                            document.addEventListener("mousemove", parallax);
                            const elem = document.querySelector("#container");
                
                            function parallax(e) {
                                let _w = window.innerWidth/2;
                                let _h = window.innerHeight/2;
                                let _mouseX = e.clientX;
                                let _mouseY = e.clientY;
                                let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
                                let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
                                let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
                                let x = `${_depth3}, ${_depth2}, ${_depth1}`;
                                let y = `${_depth3}, ${_depth2}, ${_depth1}`;
                                elem.style.backgroundPosition = x;
                            }
                        })();
                        </script>
                    </div>
                </div> -->
                <img class="bsm" src="images/landing-bg.mp4">
                <img class="texture" src="images/texture.png">
                <video class="blob" autoplay playsinline loop muted>
                    <source src="images/landing-bg.mp4">
                </video>
            </div>
            <script>
                document.querySelector('.bsm').style.display = "none";
                
                var video = document.querySelector('.blob');
                var promise = video.play();

                if (promise !== undefined) {
                promise.then(_ => {
                    // Autoplay started!
                }).catch(error => {
                    // Autoplay not allowed!
                    // Mute video and try to play again
                    video.muted = true;
                    video.play();
                    document.querySelector('.bsm').classList.toggle("blob-phone");
                    // Show something in the UI that the video is muted
                });
                }
            </script>
            <style>
                @media (max-width: 420px) {
                    .blob-phone {
                        display: block !important;;
                    }    
                }  
                .header-bar {
                    pointer-events: none;
                }
                .nav-bar, .logo, .hamburger {
                    pointer-events: all;
                }
            </style>
            <!-- <Style>
                #container {
        /* background-color: #99c2f8; */
        background-image: url('images/landing-bg.gif');
        /* position: absolute; */

        background-size: 120vw 120vh;
        background-position: center;
        background-repeat: no-repeat;
        height: 100vh;
        width: 100vw;
    }
    #video {
        filter: blur(120px);
        background-color: black;
        /* overflow: hidden; */
        width: 100vw;
        height: -webkit-fill-available;
        transform: scale(1.1);

    }
            </Style> -->
            <div id="works" class="remove projects">
                <a href="https://alicemadesign.com/pega">
                    <div class="project">
                        <div class="v3 pega hidden"  href="https://alicemadesign.com/pega">
                            <img class="phone" src="../images/pega-logo.png">
                        </div>
                        <div class="text hidden">
                            <p class="app-name"> 01 | PEGA UX DESIGN INTERN 2023</p>
                            <p class="headline"> UX Design Internship with Pega Design Team</p>
                            <!-- <div class="tags" id="pega">
                                <p class="chip">
                                    Internship
                                </p>
                                
                                <p class="chip">
                                    UX Design
                                </p>
                                
                            </div> -->
                            <p class="message"> Conducting research and designing user flows to improve the authoring experience of Pega's Constellation design system. </p>
                            <p class="read-more" href="https://alicemadesign.com/pega"> Read about my internship → </p>
                        </div> 
                    </div>               
                </a>
                <a href="https://alicemadesign.com/medtime">
                    <div class="project reverse">
                        <div class="v3 medtime hidden" href="https://alicemadesign.com/medtime">
                            <img class="phone" src="../images/medtime-phones.png">
                        </div>
                        <div class="text hidden">
                            <p class="app-name"> 02 | MEDTIME MEDICINE REMINDERS </p>
                            <p class="headline"> Medicine reminders from anywhere, at anytime. </p>
                            <!-- <div class="tags" id="medtime">
                                <p class="chip">
                                    App design
                                </p>
                                <p class="chip">
                                    Web
                                </p>
                                <p class="chip">
                                    Mobile
                                </p>
                            </div> -->
                            <p class="message"> A medicine reminder application that ensures you never forget to take your medication again. </p>
                            <p class="read-more" href="https://alicemadesign.com/medtime"> Read case study → </p>
                        </div> 
                    </div>
                </a>
                <a href="https://alicemadesign.com/cinema">
                    <div class="project">
                        <div class="v3 cinema hidden" href="https://alicemadesign.com/cinema">
                            <img class="phone" src="../images/cinema-phones.png">
                        </div>
                        <div class="text hidden">
                            <p class="app-name"> 03 | CINEMA MOBILE TICKETING </p>
                            <p class="headline"> An easier way to purchase movie tickets. </p>
                            <!-- <div class="tags" id="cinema">
                                <p class="chip">
                                    App design
                                </p>
                                <p class="chip">
                                    Mobile
                                </p>
                            </div> -->
                            <p class="message"> A mobile ticketing apps that streamlines the ticket purchasing and scanning process. </p>
                            <p class="read-more" href="https://alicemadesign.com/cinema"> Read case study → </p>
                        </div> 
                    </div>
                </a>
                <a href="https://alicemadesign.com/unio">
                    <div class="project reverse">
                        <div class="v3 unio hidden" href="https://alicemadesign.com/unio">
                            <img class="phone" src="../images/unio-laptop.png">
                        </div>
                        <div class="text hidden">
                            <p class="app-name"> 04 | UNIO ONLINE NOTETAKING </p>
                            <p class="headline"> A smooth cross-platform notetaking experience. </p>
                            <!-- <div class="tags" id="unio">
                                <p class="chip">
                                    Responsive web design
                                </p>
                            </div> -->
                            <p class="message"> A digital notetaking platform that seamlessly integrates notetaking across all your devices. </p>
                            <p class="read-more" href="https://alicemadesign.com/unio"> Read case study → </p>
                        </div> 
                    </div>
                </a>
            </div>
            <footer class="footer">
                <p>©2023 Designed and Coded by beep.</p>
            </footer>
	<!-- <style>
      #ball {
		width: 100vh;
         height: 100vh;
         background-color: #FBDEA6;
         border-radius: 100vh;
         position: absolute;
         filter: blur(6rem);
      }
	  #ball2 {
		width: 100vh;
         height: 100vh;
         background-color: #58D2EE;
         border-radius: 100vh;
         position: absolute;
		 bottom: -50vh;
		 left: 30vw;
         filter: blur(7rem);
      }
	  #ball3 {
         width: 100vh;
         height: 100vh;
         background-color: #F9B5BF;
         border-radius: 100vh;
         position: absolute;
		 bottom: -50vh;
		 left: 30vw;
         filter: blur(7rem);
      }
      .ball-container {
         overflow: hidden;
         filter: blur(0px);
         height: 100vh;
         width: 100vw;
         margin-left: -8px;
         margin-top: -10px;
         background-color: white;

      }
      body {
         /* overflow-x: hidden; */
		 background-color: pink;
      }
   </style>
</head>
   
	</header>
      <div class="ball-container">
		<div id="ball3"></div> 
		<div id="ball"></div>
		 <div id="ball2"></div>
      </div>
      <script>
            const ball = document.getElementById("ball");
            let x = 0;
            let y = 0;
            let xSpeed = 1;
            let ySpeed = 1;
            function animate() {
            x += xSpeed;
            y += ySpeed;
            if (x + 1000 > window.innerWidth || x < 0) {
               xSpeed = -xSpeed;
            }
            if (y + 1000 > window.innerHeight || y < 0) {
               ySpeed = -ySpeed;
            }
            ball.style.left = x + "vw";
            ball.style.top = y + "vh";
            requestAnimationFrame(animate);
         	}
        animate();

		// const ball2 = document.getElementById("ball2");
        //     let x2 = 200;
        //     let y2 = 400;
        //     let xSpeed2 = 8;
        //     let ySpeed2 = 8;
        //     function animate2() {
        //     x2 += xSpeed2;
        //     y2 += ySpeed2;
        //     if (x2 + 300 > window.innerWidth || x2 < 0) {
        //        xSpeed2 = -xSpeed2;
        //     }
        //     if (y2 + 300 > window.innerHeight || y2 < 0) {
        //        ySpeed2 = -ySpeed2;
        //     }
        //     ball2.style.left = x2 + "px";
        //     ball2.style.bottom = y2 + "px";
        //     requestAnimationFrame(animate2);
        //  }
        // animate2();

		// const ball3 = document.getElementById("ball3");
        //     let x3 = 0;
        //     let y3 = 0;
        //     let xSpeed3 = 8;
        //     let ySpeed3 = 8;
        //     function animate3() {
        //     x3 += xSpeed3;
        //     y3 += ySpeed3;
        //     if (x3 + 300 > window.innerWidth || x3 < 0) {
        //        xSpeed3 = -xSpeed3;
        //     }
        //     if (y3 + 300 > window.innerHeight || y3 < 0) {
        //        ySpeed3 = -ySpeed3;
        //     }
        //     ball3.style.left = x3 + "px";
        //     ball3.style.bottom = y3 + "px";
        //     requestAnimationFrame(animate3);
        //  }
        // animate3();
      </script> -->
   </body>
    <script src="js/slide.js"></script>
    <script src="js/splash.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="js/headerslide.js"></script>
</html>
