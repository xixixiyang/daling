requirejs(['config'],function(){
    requirejs(['jquery'],function(){
    $(function(){
        //console.log(1);
            var $centerBox = $('.centerBox');
            var $ul = $('.pc').children('li');
            var len = $ul.length;
            var index = 0;
            var $tab = $('.tab');
            var cookie = document.cookie.split('; ');
            var myname;
            var mypassword;
           // console.log(document.cookie)
            cookie.forEach(function(item){
            var arr = item.split('=');
            //console.log(arr[0])
           if(arr[0] === 'username'){
                    myname = arr[1];
                    // $('.da-login').hide();
                    // $('.da-register').hide();
                    $('.da-login').hide();
                    $('.da-reg-tip').show().html(myname+'你好'+`
                        <span class="line">|</span>
                        <a class='login_out'>退出登录</a>
                        `);
                    $('.login_out').get(0).style.cursor='pointer';
                    $('.login_out').on('click',function(){
                    $('.da-login').show();
                    $('.da-reg-tip').hide();
                    var now = new Date();
                    now.setDate(now.getDate()-8);
                    //console.log(now)
                    document.cookie = 'username=null'+ ';expires=' + now+';path=/';
                    document.cookie = 'password=null'  + ';expires=' + now+';path=/';
                    // console.log(document.cookie);

                    });
                }else if(arr[0]==='carlist'){
                carlist=JSON.parse(arr[1]);
                console.log(carlist);
                var number=0;
                carlist.forEach(function(goods){
                number+=goods.idx
                //console.log(number);
                $('.span').text(number);
                })
               
            }
            });
            //    else if(arr[0] === 'password'){
            //         mypassword = arr[1];
            //        // console.log(1)
            //     }
            // });
            // if(myname && mypassword){
               
            // }

            $ul.eq(index).show().siblings().hide();
            var timer = setInterval(function(){
            index++;
            showPic();
            },3000)
            $centerBox.on('mouseenter',function(){
                clearInterval(timer);

               

            }).on('mouseleave',function(){
               // console.log(2);
                timer = setInterval(function(){
                index++;
                showPic();
                },3000);
                //console.log(index);

            })
             var $page = $('<div/>');
             $page.addClass('page');
             for(var i=0;i<len;i++){
             $span = $('<span/>');
             $span.html(i+1);
             // console.log($span);
             $page.append($span);
             if(i==index){
                 $span.addClass('active');
             }

           }
           $centerBox.append($page);
          
            
            function showPic(){
            if(index<0){
                index = len-1;
            }else if(index>len-1){
                index = 0;
            }
            $ul.eq(index).show().siblings().hide();
           
            $page.children().eq(index).addClass('active').siblings().removeClass('active');

            }
            $page.on('click','span',function(){
                // 事件委托
                // 这里的this表示事件源对象
                // 获取this所在同辈元素中的索引值
             index = $(this).index();
            // console.log(idx);
            console.log($(this))
           
           showPic();
            // $(this).addClass('active').siblings().removeClass('active');
            // console.log($ul)
            // $ul.eq(idx).show().siblings().hide()

            
            })




            
            // 给第一个tab加高亮
            $tab.children('.title').children().first().addClass('active');

            // 隐藏除第一个以外的.content
            $tab.children('.content').children().not(':first').hide();
            // $tab.children('.content').children().first().show();

            // jQuery的事件委托
            // on方法的第二个参数，写上事件元对象的选择器
            $tab.on('click','.title span',function(){
                // 事件委托
                // 这里的this表示事件源对象
                $(this).addClass('active').siblings().removeClass('active');

                // 获取this所在同辈元素中的索引值
                var idx = $(this).index();
                console.log(idx);
                // $tab.children('.content').children().eq(idx).show().siblings().hide();

                // 动画
                $tab.children('.content').children().eq(idx).show().siblings().hide();
                console.log( $tab.children('.content').children().eq(idx))
            })


    })
      
    })
})