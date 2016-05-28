var tufts_skills = ['BS in Computer Science',
    'Rising Senior',
    'English Minor',
    'Tufts Beelzebubs',
    'Tufts Wilderness Orientation',
    'Tufts Bikes'
];
var pingry_skills = ['Citizenshp Award',
    'Class of 2013',
    'Pres. of Sketch Comedy Group',
    'Musical Theater Award',
    'Pingry Buttondowns',
    'Varsity Football'
];
var madrid_skills = ['Immersion in Madrid',
    'Internship at Cooking School',
    'Professional Proficiency in Spanish'
];

$(document).ready(function() {


    $("#experience-content").owlCarousel({
        slideSpeed: 300,
        navigation: false,
        paginationSpeed: 400,
        singleItem: true
    });
    $("#experience-content").addClass('content');
    $(".content").hide();

    $('.content-gate').click(function() {
        var type = $(this).attr('id');
        var content = $('#' + type + "-content");
        revealContent(content, 'general');
    });

    $('.school').click(function() {
        revealContent($(this), 'school');
    });


});


function revealContent(content, type) {
    if (!content.hasClass('active')) {
        if (type == "general") {
            $('.active').slideUp();
            content.addClass('active');
            $('.content').not(content).removeClass('active');
            content.slideDown();
        }
        if (type == "school") {
            content.addClass('active');
            $('.school').not(content).removeClass('active');
            $('.overlay-wrap').hide();
            $('.school-info').show();
            fillSchoolSkills(content.attr('id'));
        }
    } else {
        if (type == "general") {
            content.removeClass('active');
            content.slideUp();
        }
    }
}

function fillSchoolSkills(school) {
    var school_arr;
    switch (school) {
        case 'tufts':
            school_arr = tufts_skills;
            break;
        case 'pingry':
            school_arr = pingry_skills;
            break;
        case 'madrid':
            school_arr = madrid_skills;
            $('#skill-3').html('');
            $('#skill-4').html('');
            $('#skill-5').html('');
            break
    }
    $('.panel__label--school').hide();
    for (var i = 0; i < school_arr.length; i++) {

        $('#skill-' + i).html(school_arr[i]);
    }
    $('.panel__label--school').delay(100).fadeIn();
}

function smoothScroll(hash) {
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 600, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
    });
}
