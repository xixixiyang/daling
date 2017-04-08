requirejs(['config'],function(){
    requirejs(['jquery','gdszoom'],function($,gdszoom){
        $(function(){
           //console.log($)
          //console.log(jQuery.prototype.gdszoom)
        $('#header').load('header.html');
        $('#footer').load('footer.html');


        var guid;
        var str = location.search;
        var arr = str.split('=');
        if(arr[0] ==='?id'){
           guid=arr[1];
           // console.log(id);
          $.get("http://localhost/daling/src/php/goods.php",{
               id:guid
         },function(data){

             //cookie;
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
              //cookie


                for(var i=0;i<data.length;i++){
                var goods = document.createElement('div');

                //  console.log(data)
                 goods.innerHTML = `
                 <div class="box"><div id="smallImg" style="width: 283px; height: 268px; background: url(../${data[i].imgurl}) center; background-size: cover; position: absolute; left: 30px; top: 30px;">
                 <div id="smallArea" style="display: none; width: 40px; height: 40px; background: rgba(200, 250, 200, 0.4); position: absolute; left: 40px; top: 0;"></div>
                 </div>
                 <div id="bigArea" style="overflow: hidden; z-index:2;width: 400px; height: 400px; background: rgba(200, 200, 250, 0.5); position: absolute; left: 400px; top: 0px;">
            <img id="bigImg" src="../${data[i].imgurl}"  style="width:800px; height:800px; position: absolute; left: 0; top: 0;" />
            </div></div>
                 
               
                
                  <span class="read">${data[i].description}
                 </span>
                 <span class=da-price> 达令价</span>
                <span class ='now-price'>￥${data[i].nowprice}</span>
             
                
                <div class="price">
                海外现时售价<span class="old-price">￥${data[i].oldprice}</span>  <span class="discount">${data[i].discount}折</span>
                </div>
                <div class="da-collect">
                收藏 : <span class="collect">${data[i].collect}</span>
                </div>
                <div class="num">
                 购买数量<span class="by-num">1</span>
                <span class="up"></span>
                <span class="down"></span>
                </div>
                <div class="car">
                <span class='by'>立即购买</span><span class='join'>加入购物车</span>
                </div>
                
               
              
              


                `

                $('.container').get(0).appendChild(goods);
                 //console.log(1);
                var _smallImg = $("#smallImg"); //小图
                var _bigImg = $("#bigImg"); //大图
                var _smallArea = $("#smallArea"); //小区域
                var _bigArea = $("#bigArea"); //大区域
                _bigArea.hide();
                
                _smallArea.width( _smallImg.width() / _bigImg.width() * _bigArea.width() );
                _smallArea.height( _smallImg.height() / _bigImg.height() * _bigArea.height() );
                var scale = _bigImg.width() / _smallImg.width();
                $(document).mousemove(function(e){

                    
                    var leftSide = _smallImg.offset().left; //小图左边界
                    var rightSide = leftSide + _smallImg.width(); //右边界
                    var topSide = _smallImg.offset().top; //上边界
                    var bottomSide = topSide + _smallImg.height(); //下边界
                    
                    //如果在小图区域内
                    if (e.pageX > leftSide && e.pageX < rightSide && e.pageY > topSide && e.pageY < bottomSide) {
                        
                        //显示小区域
                        _smallArea.css("display", "block");
                          _bigArea.show();
                         
                        var x = e.pageX - _smallImg.offset().left - _smallArea.width()/2;
                        var y = e.pageY - _smallImg.offset().top - _smallArea.height()/2;
                        
                        //如果超出左边界, 则设置x为0
                        if (x < 0) {
                            x = 0;
                        }
                        //如果超出右边界, 则设置为右边界位置的值
                        else if ( x > _smallImg.width()-_smallArea.width() ) {
                            x = _smallImg.width()-_smallArea.width();
                        }
                        
                        //如果超出上边界, 则最小为0
                        if (y < 0) {
                            y = 0;
                        }
                        //如果超出下边界, 则设置为下边界位置的值
                        else if ( y > _smallImg.height()-_smallArea.height() ) {
                            y = _smallImg.height()-_smallArea.height();
                        }
                        
                        
                        //移动小区域
                        _smallArea.css({left: x, top: y});
                        
                        //移动大图的位置
                        _bigImg.css({left: -x*scale, top:-y*scale});
                        
                    }
                    else {
                        //隐藏小区域
                        _smallArea.css("display", "none");
                          _bigArea.hide();
                    }
                    
                })
                
                





                  var idx=1;
                  $('.up').on('click',function(){
                  $('.by-num').text(++idx);
                })
                  $('.down').on('click',function(){
                    if(idx<=1){
                    $('.by-num').text('1');
                  }else{
                    $('.by-num').text(--idx);
                  }
                  
                })

                 $('.join').on('click',function(){
                    console.log(idx);
                 var $currentImg = $("#smallImg");

                // 1>复制当前商品图片(用于实现动画效果)
                var $copyImg = $currentImg.clone();

               // console.log($copyImg)
                // 先获取原图片的位置（为了设置复制图片的初始位置）
                var startPos = $currentImg.offset();
               // console.log(startPos.left)
                // 获取原图片的宽度
                // var startWidth = $currentImg.width();

                // 把复制的图片写入页面，并设置样式
                $copyImg.css({
                    position:'absolute',
                    left:0,
                    top:0
                    //width:startWidth
                });
                $copyImg.appendTo('.container');
                var cartPos = $('.car').offset();
                //console.log(cartPos);
                $copyImg.animate({left:cartPos.left,top:-154 ,height:0,width:0,opacity:0},2000,function(){
                    // 删除用于动画的图片
                    $copyImg.remove();
                    var index= $('.span').text();
                    var res=idx*1+index*1;
                    //console.log(res,index,idx);
                    $('.span').text(res);
                    //写cookie
                    var carlist=[];
                    var cookie =document.cookie.split('; ');
                    cookie.forEach(function(item){
                    var arr = item.split('=');
                    if(arr[0]==='carlist'){
                        carlist = JSON.parse(arr[1])
                    }
                    })
                    var obj ={};
                    console.log(data);
                     for(var i=0;i<data.length;i++){
                        //console.log(data[i].id)
                         obj.guid = data[i].id;
                         obj.idx=idx;
                         obj.description=data[i].description;
                         obj.price=data[i].nowprice;
                         obj.imgurl=data[i].imgurl;
                     }
                   console.log(obj)
                   carlist.push(obj);
                   var now =new Date();
                   now.setDate(now.getDate()+3);
                   document.cookie = 'carlist='+JSON.stringify(carlist)+';expires='+now+';path=/';


                 







                })

 
                 })

                
            }
            
             

            },'json') 
        }
          
       // console.log(1);


        // requirejs(['jquery.gdszoom'],function(){
           
        // })
         //console.log(jQuery.prototype.gdszoom)

           
           // var $car=$('img')
           //  console.log($car);
           //console.log($('#header'))
           //$('.smallImg').gdszoom();
           // console.log($('#header'))
           // console.log($('#box').find('img'))
 




         })
    })
})