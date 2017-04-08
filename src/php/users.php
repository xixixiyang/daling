<?php
    include 'connect.php';

    
     $username  = $_GET['username'];
     $password  = $_GET['password'];
     $sqls = "select * from user where username='".$username."'";
     $result = $conn->query($sqls);



    //使用查询结果集
     $row = $result->fetch_all(MYSQLI_ASSOC);
     if(count($row)<1){
       // 插入数据
     $sql = "insert into user(username,password)
     values('".$username."','".$password."')
     "; 
     // $result = $conn->query($sql);
     if ($conn->query($sql) === TRUE) {
      echo "注册成功";

         } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
         };
     }else{
      echo  "用户已注册";
    
     }

    


    // // 查询数据库获取数据
    // $result = $conn->query($sql);



    // //使用查询结果集
    // $row = $result->fetch_all(MYSQLI_ASSOC);


    // echo json_encode($row);
   
?>