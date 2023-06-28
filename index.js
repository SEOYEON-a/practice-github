document.addEventListener('DOMContentLoaded', function () {
  var rock = document.getElementById('rocks');
  var scissor = document.getElementById('scissors');
  var paper = document.getElementById('papers');

  var computer = Math.floor(Math.random() * 3);

  rock.addEventListener('click', function () {
    if (computer == 0) {
      result.innerText = 'draw';
      document.getElementById('what').src = 'images/rock.png';
    } else if (computer == 1) {
      result.innerText = 'win';
      document.getElementById('what').src = 'images/scissor.png';
    } else {
      result.innerText = 'lose';
      document.getElementById('what').src = 'images/paper.png';
    }
  });
  scissor.addEventListener('click', function () {
    if (computer == 0) {
      result.innerText = 'lose';
      document.getElementById('what').src = 'images/rock.png';
    } else if (computer == 1) {
      result.innerText = 'draw';
      document.getElementById('what').src = 'images/scissor.png';
    } else {
      result.innerText = 'win';
      document.getElementById('what').src = 'images/paper.png';
    }
  });
  paper.addEventListener('click', function () {
    if (computer == 0) {
      result.innerText = 'win';
      document.getElementById('what').src = 'images/rock.png';
    } else if (computer == 1) {
      result.innerText = 'lose';
      document.getElementById('what').src = 'images/scissor.png';
    } else {
      result.innerText = 'draw';
      document.getElementById('what').src = 'images/paper.png';
    }
  });
});
