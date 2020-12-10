<?php
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 
 define('DB_HOST', 'localhost');
 define('DB_USER', 'root');
 define('DB_NAME', 'mydb');

function connect()
 {
 $connect = mysqli_connect(DB_HOST ,DB_USER);

 if (mysqli_connect_errno($connect)) {
 die("Failed to connect:" . mysqli_connect_error());
 }

 mysqli_select_db($connect, DB_NAME);

 mysqli_set_charset($connect, "utf8");
 return $connect;
 }

 $con = connect();

