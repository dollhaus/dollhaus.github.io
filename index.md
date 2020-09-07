<!doctype html>
<html>

<head>
    <title>VIXEN</title>
    <script type="text/javascript" src="resources/scripts/jquery/jquery-3.3.1.min.js"></script>
    <link rel="stylesheet" href="resources/styles/homepage.css" type="text/css" />
    <link rel="stylesheet" href="resources/styles/mobileDevices.css" type="text/css" />
    <link rel="stylesheet" href="resources/styles/smallScreen.css" type="text/css" />

</head>

<body>
    <div id="mob"></div>
    <span id="ruler"></span>
    <div id="stickyHeader">
        <div id="pageActiveBox"></div>
        <div id="titlebar">
            <ul id="menulist">
                <li id="menuhome"><span>Home</span></li>
                <li id="menuabout"><span>About</span></li>
                <!--<li id="menuproducts"><span>Products</span></li>-->
                <li id="menuportfolio"><span>Portfolio</span></li>
                <li id="menucontact"><span>Contact</span></li>
            </ul>
        </div>
        <div id="logoContainer">
            <div id="logo">VIXEN</div>
        </div>
    </div>

    <div id="main">
        <div id="tabbedContent">
            <div id="homeTab">

                <div id="captiveText">
                    <span>WE</span>
                    <span>ARE</span>
                    <span class="bold">VIXEN</span>
                </div>

                <div id="specialityMarks">
                    <div id="datavisual" class="markContent">
                        <div class="markText">Data visualisation</div>
                        <div class="markLogo"><img src="resources/images/datavis.png" width="424" height="407"></div>
                    </div>
                    <div id="automation" class="markContent">
                        <div class="markText">Task flow automation</div>
                        <div class="markLogo"><img src="resources/images/automa.png" width="424" height="407"></div>
                    </div>
                    <div id="bespokeDes" class="markContent">
                        <div class="markText">Bespoke design</div>
                        <div class="markLogo"><img src="resources/images/bespokedes.png" width="424" height="407"></div>
                    </div>
                    <div id="digitisation" class="markContent">
                        <div class="markText">Digitisation</div>
                        <div class="markLogo"><img src="resources/images/digitis.png" width="424" height="407"></div>
                    </div>
                </div>





            </div>



            <div id="aboutTab">

                <div class="blurb" id="blurbUpper">Streamlining the web is the name of the game. From a quick touch-up to a full migration, VCSD is proud to offer top-notch skills and eye-catching designs.</div>
                <div class="blurb">Our unique approach guarantees a highly consumable result, at an affordable price. Some of our key clients are charities, not-for-profits, and social enterprises!</div>
                <div class="blurb">Want to learn code? Our from-the-basics course will get you started with basic C#, HTML, SQL and Object-Oriented concepts. Suitable from all ages, from 9 to 99!</div>




                <div id="oneLiner">
                    <span>SIMPLE</span>
                    <span>ATTRACTIVE</span>
                    <span>RESPONSIVE</span>
                    <span class="bold">EFFECTIVE</span>
                </div>






            </div>


            <!--<div id="productsTab">

                <div class="scrollableContainer">
                    <div class="blockyGrid">
                        <div class="blockyGridWrapper">
                            <div id="slickworksPromo" class="blockyGridContent">
                                <div class="blockyGridDefaults blockyGridContentTitle">
                                    SlickWorks
                                </div>
                                <div class="blockyGridDefaults blockyGridContentStrapline">
                                    A Micro-CMS Blogging platform
                                </div>
                                <div class="blockyGridDefaults blockyGridContentDesc">
                                    Really, really small. Deployable in seconds, with an easy to manage content template and a no-db design.
                                </div>
                            </div>
                        </div>

                        <div class="blockyGridWrapper">
                            <div id="aitcherPromo" class="blockyGridContent">
                                <div class="blockyGridDefaults blockyGridContentTitle">
                                    Aitcher
                                </div>
                                <div class="blockyGridDefaults blockyGridContentStrapline">
                                    Complete, automated HR and accounting
                                </div>
                                <div class="blockyGridDefaults blockyGridContentDesc">
                                    Designed for fledgling businesses and social enterprises, Aitcher handles the stress and cost of managing people and money.
                                </div>
                            </div>
                        </div>

                        <div class="blockyGridWrapper">
                            <div id="nextstepstoolkitPromo" class="blockyGridContent">
                                <div class="blockyGridDefaults blockyGridContentTitle">
                                    Next Steps toolkit
                                </div>
                                <div class="blockyGridDefaults blockyGridContentStrapline">
                                    Complete management of employee mental health needs
                                </div>
                                <div class="blockyGridDefaults blockyGridContentDesc">
                                    Developed in partnership with Next Steps, this toolkit is aimed at employees working in potentially traumatic environments.
                                </div>
                            </div>
                        </div>

                        <div class="blockyGridWrapper">
                            <div id="vixconsultdigiPromo" class="blockyGridContent">
                                <div class="blockyGridDefaults blockyGridContentTitle">
                                    Vixen Digital Packaging
                                </div>
                                <div class="blockyGridDefaults blockyGridContentStrapline">
                                    Move away from paper
                                </div>
                                <div class="blockyGridDefaults blockyGridContentDesc">
                                    We are experts in digital conversion. From paper training materials to workflow processes, our conversion service is clear and direct. Contact us today for your no-obligation quote!
                                </div>
                            </div>
                        </div>


                        <div class="blockyGridWrapper">
                            <div id="vixconsultautomPromo" class="blockyGridContent">
                                <div class="blockyGridDefaults blockyGridContentTitle">
                                    Automation consultancy
                                </div>
                                <div class="blockyGridDefaults blockyGridContentStrapline">
                                    Put your man-hours to better use
                                </div>
                                <div class="blockyGridDefaults blockyGridContentDesc">
                                    Want to redirect your employees to more profitable work? Automate your repetitive tasks and free up some time!
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>-->





            <div id="portfolioTab">

                <div id="sampleText">This is a work in progress, check back soon!</div>





            </div>




            <div id="contactTab">


                <div id="sampleText">This is a work in progress, check back soon!</div>








            </div>




        </div>

        <div id="productWindow" class="modalWindow">
            <div id="windowContent" class="modalWindowContent">
                <div class="modalUpperNav">
                    <span id="productModalClose" class="modalClose">&times;</span>
                    <h4 id="modalTitle">Modal Product Window</h4>
                </div>
                <div id="modalContent">

                </div>
            </div>
        </div>



    </div>
    <!-- Proprietary scripts -->

    <script type="text/javascript" src="resources/scripts/proprietary/ani.js "></script>



</body>

</html>