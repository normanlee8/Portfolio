<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Norman Lee's EDS 124BR Portfolio</title>
<style>
  /* Base styles */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center content horizontally */
    background-color: #f0f0f0; /* Light mode background */
    color: #333; /* Light mode text */
    transition: background-color 0.3s, color 0.3s;
  }

  .dark-mode {
    background-color: #333; /* Dark mode background */
    color: #f0f0f0; /* Dark mode text */
  }

  h2 {
    text-align: center;
  }

  .accordion {
    background-color: #007bff;
    color: white;
    cursor: pointer;
    padding: 15px;
    width: 600px; /* Adjust width as needed */
    border: none;
    text-align: center;
    outline: none;
    font-size: 18px;
    margin: 10px 0;
    border-radius: 5px;
    transition: background-color 0.4s;
  }

  .accordion:hover {
    background-color: #0056b3;
  }

  .panel {
    width: 600px; /* Adjust width as needed */
    display: none; /* Initially hide the content */
    overflow: hidden;
    border-radius: 5px;
  }

  .video-responsive {
    position: relative;
    height: 0;
    padding-bottom: 56.25%;
  }

  .video-responsive iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  /* Media query for dark mode preference */
  @media (prefers-color-scheme: dark) {
    body {
      background-color: #333;
      color: #f0f0f0;
    }

    .accordion {
      background-color: #0056b3;
    }

    .accordion:hover {
      background-color: #007bff;
    }
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
  // JavaScript for accordion functionality
  var acc = document.getElementsByClassName("accordion");
  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  }

  // Automatic dark mode based on system preference
  function setDarkMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }

  // Listen for changes in the system's color scheme preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setDarkMode);

  // Set initial theme
  setDarkMode();
</script>

</body>
</html>
