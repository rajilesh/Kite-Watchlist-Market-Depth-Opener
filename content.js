/*
    Copyright by Rajilesh Panoli
    Author URI: https://www.rajilesh.in
    Author Email: info@rajilesh.in
*/
var th = document.createElement('div');
th.id = 'trade_watchlist_tools';
th.style = `
    position:fixed;
    bottom:0;
    right:0;
    z-index:9999;
    width:50px;
    height:50px;
    background:#eee;
`;
document.querySelector('body').appendChild(th);

document.querySelector('#trade_watchlist_tools').addEventListener('click', function() {


    var mouseenterEvent = new MouseEvent('mouseenter');
    var mouseleaveEvent = new MouseEvent('mouseleave');
    var mouseoverEvent = new MouseEvent('mouseover');
    var clickEvent = new Event('click');

    // Delay on each action in order to render properly
    document.querySelector('.marketwatch-sidebar').querySelectorAll('.instrument').forEach(function(o, i) {
        console.log(i);
        setTimeout(function() {

            o.querySelector('div').dispatchEvent(mouseenterEvent);
            setTimeout(function() {

                o.querySelectorAll('.actions span')[3].click();
                setTimeout(function() {

                    o.querySelectorAll('.depth-toggle')[0].click()
                }, 800);
            }, 500);
        }, i * 1000);
    });
});