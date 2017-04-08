requirejs(['config'],function(){
    requirejs(['jquery'],function(){
        $(function(){

        $('#header').load('header.html');
        $('#footer').load('footer.html');
        
        $.get("http://localhost/daling/src/php/page.php",function(data){
              console.log(data);
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
            for(var i=0;i<data.length;i++){
                // console.log(data[i].imgurl)
                var li = document.createElement('li');

                li.innerHTML = `
                <a href = "goods.html?id=${data[i].id}"><img src="../${data[i].imgurl}"</a> 
                <div class='price'>
                <span class ='now-price'>￥${data[i].nowprice}</span>
                <span class="old-price">￥${data[i].oldprice}</span>
                <span class="collect">${data[i].collect}人收藏</span>
                </div>
                <div class="title">
                <span class="discount">${data[i].discount}折/</span>
                <span class="read"><a>${data[i].description}
                </a></span>

       </div>

                `

                $('.container').get(0).appendChild(li);
            }
             
               
            },'json');









              })
    })
})