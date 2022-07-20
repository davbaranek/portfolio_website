let open_project; //variable to check whether the project is open

/**
* Function to hide a project if a user scrolls    
*/

window.onscroll = function () {
  if (open_project && $(window).width() > 960) hideProject();
}

/**
* Function to hide a project if a user press Esc    
*/

document.addEventListener('keydown', function(event){
  if(event.key === "Escape" && open_project) hideProject();
});

/**
* Function to scroll to any element
* @param    {String}     element that should be found 
*/

const scrolltoElement = function(element) {
   if (open_project) hideProject();

   if (element == "my_story_img" && $(window).width() < 960) {
      document.getElementById("my_story_img_mobil").scrollIntoView({behavior: "smooth"});
    } else {
      document.getElementById(element).scrollIntoView({behavior: "smooth"});
    }
}

/**
* Function to check if the element is in viewport
* @param    {String}     element that should be found 
* @return   {Boolean}    
*/

const isInViewport = function(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
* Function to open a project
* @param    {String}     project that should be opened 
*/


const seeProject = function(project) {
  const project_box = document.getElementById(project);
  const first_image = project_box.getElementsByTagName("img")[0];
  const body = document.getElementsByTagName("body")[0];

  project_box.style.height = '100vh';
  project_box.style.backgroundColor= "#F3F4EC";
  project_box.style.color= "#424343";
  project_box.classList.add("light_bcg");


  //Responsive design

  if ($(window).width() > 960) {
    if (project_box.getElementsByClassName("project_reverse")[0]) {
      first_image.style.margin = '20% 0 0 0';  
    } else {
       first_image.style.margin = '20% 0 0 -70px';
    }
  } else {
    first_image.style.margin = '20px 0 0 0';
    first_image.style.width = '400px';
      body.style.overflow= "hidden";
      project_box.classList.add("overflow-auto");
  }

  project_box.getElementsByClassName("projects_see_more")[0].classList.add("d-none");
  scrolltoElement(project);

  setTimeout(function() { open_project = project; }, 350); // save information what project is opened
  document.getElementById("x").classList.remove("d-none");

  project_box.getElementsByClassName("hidden_part")[0].classList.remove("d-none");

}

/**
* Function to hide a project
* @param    {String}     project that should be hidden
*/

const hideProject = function() {
  const project_box = document.getElementById(open_project);
  const first_image = getElementsByTagName("img")[0];
  const body = document.getElementsByTagName("body")[0];

  project_box.style.backgroundColor= "#4C4B4D";
  project_box.style.color= "#C7C9C9";
  project_box.classList.remove("light_bcg");

  project_box.getElementsByClassName("projects_see_more")[0].classList.remove("d-none");
  open_project = "";
  document.getElementById("x").classList.add("d-none");

  //Responsive design

  if ($(window).width() > 960) {
    project_box.style.height = '440px';
    if (project_box.getElementsByClassName("project_reverse")[0]) {
      project_box.first_image.style.margin = '-70px 0px -120px 0px';  
    } else {
       project_box.first_image.style.margin = '-70px 0 -120px -70px';
    }
  } else {
    project_box.style.height = 'auto';
    project_box.first_image.style.margin = '-70px 0px 0px 0px';  
    project_box.first_image.style.width = '250px';
    body.style.overflow= "auto";
    project_box.classList.remove("overflow-auto");
  }

  project_box.getElementsByClassName("hidden_part")[0].classList.add("d-none");

}