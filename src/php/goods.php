<?php
    include 'connect.php';

    
     $id  = $_GET['id'];
    
     $sql = "select * from goods where id='".$id."'";
     $result = $conn->query('set names utf8');
     $result = $conn->query($sql);



    //使用查询结果集
     $row = $result->fetch_all(MYSQLI_ASSOC);
     echo json_encode($row,  JSON_UNESCAPED_UNICODE
);
   
   
?>