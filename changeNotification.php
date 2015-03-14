<?php
  if(isset($_POST['message'])) {
      $data = $_POST['onoff'] . '$$' . $_POST['color'] . '$$' . $_POST['message'];
      $ret = file_put_contents('notification.txt', $data);
      if($ret === false) {
          die('There was an error writing this file');
      }
  }
  else {
     die('no post data to process');
  }

  header('Location: ./admin.html')
?>
