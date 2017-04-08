requirejs(['config'],function(){
    requirejs(['jquery','gdszoom'],function($,gdszoom){
        $(function(){
        // console.log(cookie)
            var carlist =[];
            var myname;
            var mypassword;
            var cookie = document.cookie.split('; ')
            cookie.forEach(function(item){
            var arr = item.split('=');
            if(arr[0]==='username'){
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
               // console.log(carlist);
                var number=0;
                var sump=0;
                carlist.forEach(function(goods){
                number+=goods.idx
                //console.log(number);

                $li=$('<li/>');
                $li.get(0).setAttribute('guid',goods.guid);
                //console.log($li.get(0).getAttribute(guid))
                $('<span/>').text('商品名称').appendTo($li).addClass('name');
                $('<span/>').text('单价(元)').appendTo($li).addClass('danjia');
                $('<span/>').text('数量').appendTo($li).addClass('shuliang');          
                $('<span/>').text('小计(元)').appendTo($li).addClass('xiaoji');
                $('<span/>').text('操作').appendTo($li).addClass('caozuo');
                $('<img/>').attr('src','../'+goods.imgurl).appendTo($li).addClass('img');
                $('<h6/>').text(goods.description).appendTo($li).addClass('h6');
                $('<span/>').text(goods.price).appendTo($li).addClass('price');
                $('<span/>').text(goods.idx).appendTo($li).addClass('idx');
                $('<span/>').text((goods.price*goods.idx).toFixed(2)).appendTo($li).addClass('sum');
                $('<span/>').text('删除').appendTo($li).addClass('btnclose')
                $li.appendTo($('.da-login-bg'));

                 
                 sump+= goods.price*goods.idx;
                 //console.log($('.sum').text());
               //  console.log(goods.price,goods.idx)
                 //console.log(sump.toFixed(2))
                 
               
                })
                $('<span/>').text("合计：￥").appendTo($('.da-login-bg')).addClass('heji')
                $('<span/>').text(sump.toFixed(2)).appendTo($('.da-login-bg')).addClass('sump')
                $('<span/>').text("立即付款").appendTo($('.da-login-bg')).addClass('pay')

                //console.log(number)
                $('.btnclose').on('click',function(){
                  //console.log($(this))
                $(this).parent().remove();
                var currentguid = $(this).parent().get(0).getAttribute('guid');
                 var sum  = $('.sump').text();
                 console.log(sum)
               
                 sum = sum - $(this).parent().find('.price').text()*1*$(this).parent().find('.idx').text()*1;
                 if(sum<0){
                    sum=0;
                 }

                 $('.sump').text(sum.toFixed(2));
                 console.log(currentguid)
                 for(var i=0;i<carlist.length;i++){
                  if(carlist[i].guid===currentguid){
                    carlist.splice(i,1);
                    var now =new Date();
                    now.setDate(now.getDate()+3);
                    document.cookie ='carlist='+JSON.stringify(carlist)+';expires'+now+';path=/';
                    break;
                  }
                }


                })

            }


         })





         })
    })
})