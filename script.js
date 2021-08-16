feedback();
portfolio();
menu();

window.addEventListener('scroll', () => {
	let scrollTop = document.querySelector('html').scrollTop;

	let bgPos = Math.min(scrollTop / 2, 350);
	document.querySelector('#home').style.backgroundPosition = `0 ${bgPos}px`;
})


function menu(){
    let nav = document.querySelector('.navbar-box');
    let menuDiv = document.querySelector('.menu');
    
    menuDiv.addEventListener('click', ()=>{
        if (nav.style.display === "block") {
            nav.style.display = "none"
        }
        else{
            nav.style.display = "block";
        }
    })
}

function portfolio(){
    let projectTypes = document.querySelectorAll('.project-types li')
    let projects = document.querySelectorAll('.project');
    

    for (let i = 0; i < projectTypes.length; i++) {
        projectTypes[i].addEventListener('click', ()=>{
            let classes= projectTypes[i].classList.value;

            selectProject(classes);
        })
        
    }
    

    function selectProject(classes){
        for (let j = 0; j < projects.length; j++) {
            let projectClass = projects[j].className;

            if (!projectClass.includes(classes)) {
                projects[j].style.display = ('none')
            }
            if(projectClass.includes(classes)){
                projects[j].style.display = ('flex')
            }
            if(classes == "all"){
                projects[j].style.display = ('flex')
            }
        }
        
    }
}

function feedback(){
    let reviews = document.querySelectorAll('.client');
    let dots = document.querySelectorAll('.dots>div');

    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', ()=>{
            dots[i].classList.add('visible-dot');
            reviews[i].classList.remove('hidden');
            reviews[i].classList.add('visible');

            clearClasses(i);
        })
    }
    function clearClasses(i) {

        for (let j = 0; j < dots.length; j++) {
            if (j !=i ) {
                dots[j].classList.remove('visible-dot');
                reviews[j].classList.remove('visible');
                reviews[j].classList.add('hidden');
            }
        }
    }
}

