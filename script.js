let open_project;

//Hide project when user scrolls and Esc press

window.onscroll = function () {
  if (open_project && $(window).width() > 960) hideProject();
}

document.addEventListener('keydown', function(event){
  if(event.key === "Escape" && open_project) hideProject();
});

const scrolltoElement = function(element) {
   if (open_project) hideProject();

   if (element == "my_story_img" && $(window).width() < 960) {
      document.getElementById("my_story_img_mobil").scrollIntoView({behavior: "smooth"});
    } else {
      document.getElementById(element).scrollIntoView({behavior: "smooth"});
    }
}

//Return true if the element is in the viewport

const isInViewport = function(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//Handling the project - see and hide

const seeProject = function(project) {
  const project_box = document.getElementById(project);

  project_box.style.height = '100vh';
  project_box.style.backgroundColor= "#F3F4EC";
  project_box.style.color= "#424343";
  project_box.classList.add("light_bcg")

    //Responsive design

  if ($(window).width() > 960) {
    if (project_box.getElementsByClassName("project_reverse")[0]) {
      project_box.getElementsByTagName("img")[0].style.margin = '20% 0 0 0';  
    } else {
       project_box.getElementsByTagName("img")[0].style.margin = '20% 0 0 -70px';
    }
  } else {
    project_box.getElementsByTagName("img")[0].style.margin = '20px 0 0 0';
    project_box.getElementsByTagName("img")[0].style.width = '400px';
      document.getElementsByTagName("body")[0].style.overflow= "hidden";
      project_box.classList.add("overflow-auto");
  }

  
  project_box.getElementsByClassName("projects_see_more")[0].classList.add("d-none");
  scrolltoElement(project);

  setTimeout(function() { open_project = project; }, 350);
  document.getElementById("x").classList.remove("d-none");


  project_box.getElementsByClassName("hidden_part")[0].classList.remove("d-none");

}

const hideProject = function() {
  const project_box = document.getElementById(open_project);

  //Responsibility
  if ($(window).width() > 960) {
    project_box.style.height = '440px';
    if (project_box.getElementsByClassName("project_reverse")[0]) {
      project_box.getElementsByTagName("img")[0].style.margin = '-70px 0px -120px 0px';  
    } else {
       project_box.getElementsByTagName("img")[0].style.margin = '-70px 0 -120px -70px';
    }
  } else {
    project_box.style.height = 'auto';
    project_box.getElementsByTagName("img")[0].style.margin = '-70px 0px 0px 0px';  
    project_box.getElementsByTagName("img")[0].style.width = '250px';
    document.getElementsByTagName("body")[0].style.overflow= "auto";
    project_box.classList.remove("overflow-auto");
  }
  project_box.style.backgroundColor= "#4C4B4D";
  project_box.style.color= "#C7C9C9";
  project_box.classList.remove("light_bcg")

  project_box.getElementsByClassName("projects_see_more")[0].classList.remove("d-none");
  open_project = "";
  document.getElementById("x").classList.add("d-none");

  project_box.getElementsByClassName("hidden_part")[0].classList.add("d-none");

}