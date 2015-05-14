<!DOCTYPE html>
<html lang="en" id="page">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="Pierrepont Solutions">
  <link rel="shortcut icon" href="../favicon.ico"/>

  <title>The Pierrepont School</title>


  <link href="../css/bootstrap.min.css" rel="stylesheet">
  <link href="../css/bootstrap-theme.min.css" rel="stylesheet">

  <link href="../css/main.css" rel="stylesheet">
  <link href="../css/page.css" rel="stylesheet">

  <script src="../js/ie-emulation-modes-warning.js"></script><style type="text/css"></style>

  <style id="holderjs-style" type="text/css">
  </style>
</head>

<body id="body" role="document">

  <div id="wrapper">


    <!-- Topbar -->
    <div id="topbar">
      <div id="topbar-heading">
        Pierrepont
        <span id="school-heading">
          School
        </span>
      </div>
      <div id="menu-toggle-div">
        <a href="#menu-toggle" class="btn btn-default" id="menu-toggle">
          <img id="menu-toggle-img" src="../menu-icon.png"></a>

        </div>
      </div>


      <!-- Sidebar -->
      <nav id="sidebar-wrapper">
        <div id="logoContainer">
          <a href="../index.php"><img id="logo" src="../logo.png"></a>
        </div>
        <ul class="sidebar-nav">
          <li>
            <a class="choose-sub">About</a>
            <ul class="sidebar-nav-sub">
              <li>
                <a href="../about/overview.html">Overview</a>
              </li>
              <li>
                <a href="../about/mission statement.html">Mission Statement</a>
              </li>
              <li>
                <a href="../about/founders statement.html">Founder's Statement</a>
              </li>
              <li>
                <a href="../about/from the head.html">From the Head</a>
              </li>
              <li>
                <a href="../about/alumni.html">Alumni</a>
              </li>
              <li>
                <a href="../about/administration.html">Administration</a>
              </li>
            </ul>
          </li>
          <li>
            <a class="choose-sub">Faculty</a>
            <ul class="sidebar-nav-sub">
              <li>
                <a href="../faculty/faculty.html">Faculty</a>
              </li>
            </ul>
          </li>
          <li>
            <a class="choose-sub">Curriculum</a>
            <ul class="sidebar-nav-sub">
              <li>
                <a href="../curriculum/humanities.html">Humanities</a>
              </li>
              <li>
                <a href="../curriculum/sciences.html">Sciences</a>
              </li>
              <li>
                <a href="../curriculum/arts.html">Arts</a>
              </li>
              <li>
                <a href="../curriculum/lower school.html">Lower School</a>
              </li>
            </ul>
          </li>
          <li>
            <a class="choose-sub">Community</a>
            <ul class="sidebar-nav-sub">
               <li>
                <a href="../community/community.html">Community</a>
              </li>
              <li>
                <a href="../community/calendar.html">Calendar</a>
              </li>
            </ul>
          </li>
          <li>
            <a class="choose-sub">Admissions</a>
            <ul class="sidebar-nav-sub">
              <li>
                <a href="../admissions/apply.html">Apply</a>
              </li>
              <li>
                <a href="../admissions/faqs.html">FAQs</a>
              </li>
            </ul>
          </li>
          <li>
            <a class="choose-sub">Contact</a>
            <ul class="sidebar-nav-sub">
              <li>
                <a href="../contact/contact.html">Contact</a>
              </li>
            </ul>
          </li>
          <li>
            <a class="choose-sub">Donate</a>
            <ul class="sidebar-nav-sub active-sub">
              <li>
                <a href="../donate.html">Donate</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /#sidebar-wrapper -->

      <!-- Page Content -->
      <div id="page-content-wrapper">


        <div class="container-fluid">
          <div class="row">
            <!--div id="watermark-wrapper">
            <img id="watermark" src="logo10.png">
          </div-->
            <div class="col-lg-12" id="text-wrapper">
              <h1 id="heading">Donate</h1>
              <p>
                If you would like to support our school with a donation, please provide your contact information below.
              </p>

              <?php
              //if "email" variable is filled out, send email
                if ($_REQUEST['email'] != "" && $_REQUEST['name'] != "" && $_REQUEST['phone'] != "")  {

                  //Email information
                  $admin_email = "nwebber@pierrepontschool.org";
                  $email = $_REQUEST['email'];
                  $name =  $_REQUEST['name'];
                  $phone = $_REQUEST['phone'];
                  $content = "Dear Pierrepont Admin,\n" . $name . " would like to make a donation to support Pierrepont. Please contact them at " . $email . " or " . $phone;
                  $subject = "Donation";

                  mail($admin_email, "$subject", $content, "From:" . $email);
                  echo "Thank you for your support, we will contact you shortly.";


                }

                //if "email" variable is not filled out, display the form
                else  {
              ?>

              <form method="post">
                <br>
                <input name="name" type="text" placeholder="Name"><br>
                <input name="email" type="text" placeholder="Email"><br>
                <input name="phone" type="text" placeholder="Phone"><br><br>
                Please complete all fields.<br><br>
                <input type="submit" value="Submit">
              </form>

              <?php
                }
              ?>

            </div>
          </div>
        </div>
      </div>
        <!-- /#page-content-wrapper -->


      </div> <!-- /container -->

      <script src="../js/jquery.min.js"></script>
      <script src="../js/bootstrap.min.js"></script>
      <script src="../js/docs.min.js"></script>
      <script src="../js/portfolio.js"></script>
      <script src="../js/main.js"></script>
      <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
      <script src="../js/ie10-viewport-bug-workaround.js"></script>

      <script>
        $("#menu-toggle").click(function(e) {
          e.preventDefault();
          $("#wrapper").toggleClass("toggled");
        });
      </script>
      <script>
        $(".choose-sub").click(function(e) {
          $(".active-sub").removeClass("active-sub");
          $(this).next().addClass("active-sub");
        });
      </script>


    </div></body></html>