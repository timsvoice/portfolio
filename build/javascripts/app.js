$(document).foundation();

// // text animations
// function fadeIn() {
//   // console.log('success');
//   this.addClass('fadein');
// }
// fadeIn();

function changeBackground(projectId) {  
  var image = document.getElementById('project-background');
  image.src = 'img/' +  projectId + '.jpeg'
}

//splash 
function resizesplash() {
    var heights = window.innerHeight;
    document.getElementById('splash').style.height = heights -0 + 'px';
  }
  resizesplash();
  window.onresize = function() {
      resizesplash();
};
