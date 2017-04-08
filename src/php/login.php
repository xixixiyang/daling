<?php
    include 'connect.php';

    
     $username  = $_GET['username'];
     $password  = $_GET['password'];
     $sqls = "select * from user where username='".$username."' and password='".$password."';";
     $results = $conn->query($sqls);


    //使用查询结果集
     $row = $results->fetch_all(MYSQLI_ASSOC);
    
//  echo json_encode($row);
     if(count($row)===1){
        echo '1';
     }else{
        echo '登录失败';
    }
    ?>
     




    
