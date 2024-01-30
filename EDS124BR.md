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
    align-items: center;
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
    width: 600px;
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
    width: 600px;
    display: none;
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

  /* Dark mode toggle styles */
  .theme-switch-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .theme-switch {
    display: inline-block;
    height: 34px;
    position: relative;
    width: 60px;
  }

  .theme-switch input {
    display: none;
  }

  .slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
    border-radius: 34px;
  }

  .slider:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 26px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 26px;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #66bb6a;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
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

<div class="theme-switch-wrapper">
  <label class="theme-switch" for="checkbox">
    <input type="checkbox" id="checkbox">
    <div class="slider round"></div>
  </label>
  <em>Enable Dark Mode!</em>
</div>

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

  // JavaScript for the dark mode toggle
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  toggleSwitch.addEventListener('change', switchTheme, false);

  function switchTheme(e) {
    if (e.target.checked) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }
</script>

</body>
</html>
