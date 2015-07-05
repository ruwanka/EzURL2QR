'use strict';
/*globals $*/

$(document).ready(function () {

    chrome.tabs.getSelected(null, function (tab) {
        var urltoconvert = tab.url;
        urltoconvert = fixedEncodeURIComponent(urltoconvert);
        console.log(urltoconvert);
        $('#qrimg').attr('src', 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + urltoconvert);
        $('#spinner').css('display', 'none');
    });

    function fixedEncodeURIComponent(str) {
        //return encodeURIComponent(str).replace(/[!'()]/g, escape).replace(/\*/g, '%2A');
        return encodeURIComponent(str).replace(/\-/g, '%2D').replace(/\_/g, '%5F').replace(/\./g, '%2E').replace(/\!/g, '%21').replace(/\~/g, '%7E').replace(/\*/g, '%2A').replace(/\'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29');
    }

    $('#apilink').on('click', function () {
        chrome.tabs.create({url: $(this).attr('href')});
        return false;
    });

});
