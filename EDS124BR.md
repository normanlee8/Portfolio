<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Norman Lee's EDS 124BR Portfolio</title>
<style>
  body {
    font-family: Arial, sans-serif;
  }
  .accordion {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
  }

  .active, .accordion:hover {
    background-color: #ccc;
  }

  .panel {
    padding: 0 18px;
    background-color: white;
    display: none;
    overflow: hidden;
  }

  .panel.show {
    display: block;
  }

  .video-responsive {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
  }

  .video-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
</style>
</head>
<body>

<h2>Norman Lee's EDS 124BR Portfolio</h2>

<button class="accordion">Sequencing</button>
<div class="panel">
  <p>Introduction to sequencing with examples and video demonstrations.</p>
  <div class="video-responsive">
    <iframe src="https://www.youtube.com/embed/LPD4u7oAgmI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>

<button class="accordion">Repeats</button>
<div class="panel">
  <p>Exploring the concept of loops with practical programming examples.</p>
  <div class="video-responsive">
    <iframe src="https://www.youtube.com/embed/6tFNldQoyGg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>

<button class="accordion">Repeats Animal Parade</button>
<div class="panel">
  <p>Animating an animal parade to demonstrate loops in a creative way.</p>
  <div class="video-responsive">
    <iframe src="https://www.youtube.com/embed/kHbEpmGqGAc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>

<button class="accordion">Nested Repeats</button>
<div class="panel">
  <p>Diving deeper into nested loops with complex pattern examples.</p>
  <div class="video-responsive">
    <iframe src="https://www.youtube.com/embed/nMpQpcanfcY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>

<script>
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
</script>

</body>
</html>
