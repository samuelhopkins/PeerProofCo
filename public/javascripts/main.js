$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: true,
        lockAnchors: true,
        anchors:['homepage', 'page2', 'page3', 'page4', 'page5'],
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['Home', 'About','Team', 'Vision', 'Contact' ],
        showActiveTooltip: true,
        slidesNavigation: false,
        slidesNavPosition: 'top',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize : false,
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',
    });
});

var SolutionsDriver = function () {

};

$( function () {
    var solutionsDriver = new SolutionsDriver();
});


