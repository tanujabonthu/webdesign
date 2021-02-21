document.write('<footer id="footer" class="page-footer footer-correct">\n');
document.write('        <div class="row"  style="margin-top: 20px !important;margin-bottom:-40px !important;"><b>\n');
document.write('            <div class="col left s12 m4 l4">\n');
document.write('                <div class="copyright grey-text text-lighten-3">\n');
document.write('                    © 2020 AGi DMC ( TA License No 03266)\n');
document.write('                    <a class="grey-text text-lighten-3" href=\'https://www.agitechnosys.com/\' target="_blank">\n');
document.write('                        <div class="copyright grey-text text-lighten-3">\n');
document.write('                            Part of AGi Technosys Pte Ltd, Singapore\n');
document.write('                        </div>\n');
document.write('                    </a>\n');
document.write('                    <p><b style="text-decoration: underline;" class="grey-text text-lighten-3">Subsidiaries</b></p>\n');
document.write('                     <a href="https://www.agidmc.com" target="_blank" class="white-text">  AGi DMC Limited, UK</a>\n');
document.write('                        <br><a href="https://www.agidmc.com" target="_blank" class="whie-text">AGi DMC Travel & Forex Pvt Ltd, India</a>\n');
document.write('                </div>\n');
document.write('            </div>\n');
document.write('            <div class="col m4 s12 l4 photo" style="margin-top:25px;">\n');
document.write('                <div class="center" style=" background-color: transparent;" >\n');
document.write('                    <marquee>\n');
document.write('                    <img alt="AGi DMC" class="singapore" height="55px" src="https://agidmc.com/images/stb_logo.png">\n');
document.write('                    <img alt="AGi DMC" class="india" height="55px" src="https://agidmc.com/images/itb_logo.png">\n');
document.write('                    </marquee>\n');
document.write('                </div>\n');
document.write('            </div>    \n');
document.write('            <div id="comingSoon" class="modal-action modal m2 l4 modal-close comingSoon">\n');
document.write('                <img alt="AGi DMC" src="https://agidmc.com/images/19.gif" height="200px" width="100%" >               \n');
document.write('            </div>               \n');
document.write('            <div class="col m4 s12 l4">\n');
document.write('                <div class="right grey-text text-lighten-3">\n');
document.write('                  <div class="row">\n');
document.write('                    <a class="grey-text text-lighten-3 " href="https://agidmc.com/aboutus" target="_blank">About Us</a> \n');
document.write('                    \n');
document.write('                    | <a class="grey-text text-lighten-3" href="https://agidmc.com/career" target="_blank">Careers</a> \n');
document.write('                    | <a class="grey-text text-lighten-3 " href="https://agidmc.com/contact" target="_blank">Contact Us</a> \n');
document.write('                    | <a class="grey-text text-lighten-3" href="https://agidmc.com/privacy" target="_blank">Privacy Policy</a> \n');
document.write('                    |</div><div class="row" style="margin-top: -20px;"><a class="grey-text text-lighten-3" href="https://agidmc.com/terms" target="_blank"> Terms & Conditions</a>\n');
document.write('                    | <a class="grey-text text-lighten-3" href="https://agidmc.com/translationdisclaimer.html" target="_blank"> Translation Disclaimer</a>\n');
document.write('                    </div> <div class="row" style="margin-top: -20px;">\n');
document.write('                    <a class="grey-text text-lighten-3 modal-trigger" data-target="comingSoon"  href="" target="_blank">\n');
document.write('                        <img alt="AGi DMC" src="https://agidmc.com/images/googleplaystore.png" width="40%" height="48px">\n');
document.write('                    </a>\n');
document.write('                    <a class="grey-text text-lighten-3 modal-trigger" data-target="comingSoon"  href="" target="_blank" >\n');
document.write('                        <img alt="AGi DMC" src="https://agidmc.com/images/appleplaystore.png" width="40%" height="50px">\n');
document.write('                    </a></div>\n');
document.write('                </div>\n');
document.write('            </div></b>\n');
document.write('        </div>\n');
document.write('    </footer>');


document.addEventListener('DOMContentLoaded', async function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, { coverTrigger: false });
    var elems = document.querySelectorAll('.comingSoon');
    var instances = M.Modal.init(elems, {});
    try {
        var res = await fetch('/myDetails', {
            method: 'GET'
        })
        if (res.ok) {
            res = await res.json()
            document.getElementById('userName').innerText = res.firstName + ' ' + res.lastName
            document.getElementById('userName1').innerText = res.firstName + ' ' + res.lastName
            document.getElementById('companyName').innerText = res.companyName
            document.getElementById('companyName1').innerText = res.companyName

        } else {
        }
    } catch (error) {

    }
});