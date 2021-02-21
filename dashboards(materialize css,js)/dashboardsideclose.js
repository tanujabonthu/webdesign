
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

});
var sideopen = true
function hidesidebar() {
    if (sideopen) {
        var elem = document.getElementById('slide-out')
        var instance = M.Sidenav.getInstance(elem);
        instance.close();
        sideopen = false
        document.getElementById('html').style.paddingLeft = '0px';
        document.getElementById('rights').className = "right";
        document.getElementById('graphagent').style.height = '380px';
        document.getElementById('trending').style.height = '380px';



    } else {
        var elem = document.getElementById('slide-out')
        var instance = M.Sidenav.getInstance(elem);
        instance.open();
        sideopen = true
        document.getElementById('html').style.paddingLeft = '260px';
        document.getElementById('rights').className = "left";
        document.getElementById('graphagent').style.height = '330px';
        document.getElementById('trending').style.height = '330px';
    }

}



