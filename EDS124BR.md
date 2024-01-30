<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Norman Lee's EDS 124BR Portfolio</title>
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 20px;
  }
  .accordion {
    background-color: #007bff; /* Blue background */
    color: white; /* White text color */
    cursor: pointer;
    padding: 15px;
    width: calc(100% - 30px); /* Full width minus padding */
    border: none;
    text-align: left;
    outline: none;
    font-size: 18px;
    margin-bottom: 5px; /* Space between buttons */
    border-radius: 5px; /* Rounded corners */
    transition: background-color 0.4s, transform 0.2s; /* Smooth background color change and slight push effect on click */
  }

  .accordion:hover, .accordion:focus {
    background-color: #0056b3; /* Darker blue on hover/focus */
  }

  .accordion:active {
    transform: translateY(2px); /* Push effect on click */
  }

  .panel {
    padding: 0 18px;
    background-color: white;
    display: none;
    overflow: hidden;
    border-radius: 5px; /* Rounded corners for the panel */
  }

  .video-responsive {
    overflow: hidden;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
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
  <div class="video-responsive">
    <iframe src="https://www.youtube.com/embed/LPD4u7oAgmI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>

<button class="accordion">Repeats</button>
<div class="panel">
  <div class="video-responsive">
    <iframe src="https://www.youtube.com/embed/6tFNldQoyGg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>

<button class="accordion">Repeats Animal Parade</button>
<div class="panel">
  <div class="video-responsive">
    <iframe src="https://www.youtube.com/embed/kHbEpmGqGAc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>

<button class="accordion">Nested Repeats</button>
<div class="panel">
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
