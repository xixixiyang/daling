<?php
    include 'connect.php';
    $sql = 'select * from goods';
    $result = $conn->query('set names utf8');
    $result = $conn->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    // $result->close();
   echo json_encode($row,  JSON_UNESCAPED_UNICODE
);
   
   
?>