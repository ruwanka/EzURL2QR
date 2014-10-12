$(document).ready(function(){

    chrome.tabs.getSelected(null, function(tab) {
        var urltoconvert = tab.url;
        urltoconvert = fixedEncodeURIComponent(urltoconvert);
        $('#qrimg').attr('src', 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + urltoconvert);
        $('#spinner').css('display', 'none');
    });

    function fixedEncodeURIComponent (str) {
        return encodeURIComponent(str).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
    }

    $('#apilink').on('click', function(){
        chrome.tabs.create({url: $(this).attr('href')});
        return false;
    });

});