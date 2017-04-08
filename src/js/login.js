requirejs(['config'],function(){
    requirejs(['jquery'],function(){
        $(function(){
           // console.log(1);
         $title = $('.title');
         $login = $('.login');
         $register = $('.register');
         $login_btn = $('.login_btn');
         $register_btn = $('.register_btn');
        
         $title.on('click','span',function(){
                // 事件委托
                // 这里的this表示事件源对象
                // 获取this所在同辈元素中的索引值
             index = $(this).index();
             // console.log(index);
             // console.log($(this));
             if(index==0){
                $register.hide();
                $login.show();
                $(this).removeClass('active').siblings().addClass('active');

             }
             if(index==1){
                $login.hide();
                $register.show();
                $(this).removeClass('active').siblings().addClass('active');
             }
            
            });
        $register_btn.on('click',function(){
             $register_username = $('.register_username').val();
             $register_password = $('.register_password').val();
             $register_username = $.trim( $register_username);
             $register_password = $.trim( $register_password)
             if($register_password===''||$register_username===''){
                alert('用户名或密码不能为空')
             }else{
                $.get("http://localhost/daling/src/php/users.php",{
                username:$register_username,
                password:$register_password
             },function(data){
                alert(data);

            }) 
             }

            
        })
        $login_btn.on('click',function(){
             $login_username = $('.login_username').val();
             $login_password = $('.login_password').val();
             $login_username = $.trim( $login_username);
             $login_password = $.trim( $login_password)

             if ($login_username===''||$login_password==='') {
                alert('用户名或密码不能为空');
             }else{
             $.get("http://localhost/daling/src/php/login.php",{
                username:$login_username,
                password:$login_password
                  },function(data){
                if(data==1){
                    if($('#weeks').is(':checked')){
                    var now = new Date();
                    now.setDate(now.getDate()+7);
                    document.cookie = 'username=' + $login_username + ';expires=' + now+';path=/';
                    document.cookie = 'password=' + $login_password + ';expires=' + now+';path=/';
                     window.location = "http://localhost/daling/src/index.html";

                  }else{
                    //alert(1)
                    console.log(2)
                    var now = new Date();
                    
                    document.cookie = 'username=' + $login_username + ';expires=' + now+';path=/';
                    document.cookie = 'password=' + $login_password + ';expires=' + now+';path=/';
                     window.location = "http://localhost/daling/src/index.html";

                  }
                 

                 }else{
                    alert(data)
                 }
                

               })   
             }
           
        })







        })
    })
})