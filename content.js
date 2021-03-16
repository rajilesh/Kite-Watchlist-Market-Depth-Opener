/*
    Copyright by Rajilesh Panoli
    Author URI: https://www.rajilesh.in
    Author Email: info@rajilesh.in
*/
var th = document.createElement('div');
th.id = 'trade_watchlist_tools';
th.innerHTML = 'OPEN ALL';
th.style = `
    position:fixed;
    bottom:0;
    right:0;
    z-index:9999;
    width:50px;
    height:50px;
    background:#eee;
    cursor:pointer;
    text-align:center;
`;
document.querySelector('body').appendChild(th);


var th2 = document.createElement('div');
th2.id = 'trade_watchlist_tools2';
th2.innerHTML = 'OPEN ALL';
th2.style = `
    position:fixed;
    bottom:0;
    right:60px;
    z-index:9999;
    width:50px;
    height:50px;
    background:#eee;
    cursor:pointer;
    text-align:center;
`;
document.querySelector('body').appendChild(th2);

document.querySelector('#trade_watchlist_tools').addEventListener('click', function() {


    var mouseenterEvent = new MouseEvent('mouseenter');
    var mouseleaveEvent = new MouseEvent('mouseleave');
    var mouseoverEvent = new MouseEvent('mouseover');
    var clickEvent = new Event('click');

    // Delay on each action in order to render properly
    document.querySelector('.marketwatch-sidebar').querySelectorAll('.instrument').forEach(function(o, i) {
        setTimeout(function() {
            if (o.querySelector('div')) {
                o.querySelector('div').dispatchEvent(mouseenterEvent);
                setTimeout(function() {

                    if (o.querySelectorAll('.actions span')[3]) {
                        o.querySelectorAll('.actions span')[3].click();
                        setTimeout(function() {

                            if (o.querySelectorAll('.depth-toggle')[0]) {
                                o.querySelectorAll('.depth-toggle')[0].click();
                            }
                        }, 800);
                    }
                }, 500);
            }

        }, i * 1000);
    });
});
document.querySelector('#trade_watchlist_tools2').addEventListener('click', function() {


    var mouseenterEvent = new MouseEvent('mouseenter');
    var mouseleaveEvent = new MouseEvent('mouseleave');
    var mouseoverEvent = new MouseEvent('mouseover');
    var clickEvent = new Event('click');

    // Delay on each action in order to render properly
    document.querySelector('.marketwatch-sidebar').querySelectorAll('.instrument').forEach(function(o, i) {

        setTimeout(function() {
            if (o.querySelector('div')) {
                o.querySelector('div').dispatchEvent(mouseenterEvent);
                setTimeout(function() {

                    if (o.querySelectorAll('.actions span')[3]) {
                        o.querySelectorAll('.actions span')[3].click();
                        // setTimeout(function() {

                        // if(o.querySelectorAll('.depth-toggle')[0]){
                        //     o.querySelectorAll('.depth-toggle')[0].click()
                        // }
                        // }, 800);
                    }
                }, 500);
            }
        }, i * 1000);
    });
});