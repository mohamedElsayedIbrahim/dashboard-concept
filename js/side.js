const appContent = document.querySelector("#app");
const sideBar = document.querySelector('#side-bar');
const sidBarBtn = document.querySelector('#toggle-btn');

handelAppContentOffWidth(appContent,getWidth(sideBar));

sidBarBtn.addEventListener('click',function(){
    if (this.dataset.meToggle == 'off') {
        var spans = sideBar.querySelectorAll('span');
        for (const element of spans) {
            element.classList.add('d-inline');
        }
        handelAppContentOffWidth(appContent,getWidth(sideBar));
        var icon = this.querySelector('svg');
        icon.classList.add('fa-arrow-left');
        icon.classList.remove('fa-arrow-right');
        this.dataset.meToggle = 'on';
    } else {
        var spans = sideBar.querySelectorAll('span');
        for (const element of spans) {
            element.classList.remove('d-inline');
        }
        handelAppContentOffWidth(appContent,getWidth(sideBar));
        var icon = this.querySelector('svg');
        icon.classList.remove('fa-arrow-left');
        icon.classList.add('fa-arrow-right');
        this.dataset.meToggle = 'off';
    }
});

function getWidth(element) {
    var width = element.offsetWidth;
    return width;
}

function handelAppContentOffWidth(element,width) {
    element.style.marginLeft = `${width+5}px`;
}