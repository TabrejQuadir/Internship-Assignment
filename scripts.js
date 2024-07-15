$(document).ready(function(){
    // Contact Us Button Click Event
    $('#contactUsButton').click(function(){
        $('#contactFormModal').modal('show');
    });

    // What We Do Section Slider
    $('.carousel').carousel({
        interval: 2000
    });

    // Highlight on Hover
    $('.list-group-item').hover(function(){
        $(this).toggleClass('highlight');
    });
});

// Change Project Image
function changeProjectImage(imageSrc) {
    document.getElementById('projectImage').src = imageSrc;
}
