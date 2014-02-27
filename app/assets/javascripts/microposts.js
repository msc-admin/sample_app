function updateCountdown() {
    // 140 is the max message length
    var remainder = 140 - jQuery('#micropost_content').val().length;
    jQuery('.countdown').text(remainder + ' characters remaining');
}

jQuery(document).ready(function($) {
    updateCountdown();
    $('#micropost_content').change(updateCountdown);
    $('#micropost_content').keyup(updateCountdown);
});