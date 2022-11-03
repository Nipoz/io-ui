console.log("i am coming")
    var listitem = setInterval(() => {
        var getGood_list = document.getElementsByClassName("li-list-price");
        for(var i = 0; i < getGood_list.length; i++){
            var getGood_list_price = getGood_list[i].innerText;
            if(getGood_list_price == ' 0.00' && document.getElementsByClassName("li-list-button")[i].getElementsByTagName("a")[0].innerText == '＋ 挑 战'){
                //document.getElementsByClassName("li-list-button")[i].getElementsByTagName("a")[0].click()
                //myFun2()
                console.log('because');
                //clearInterval(listitem);
            }
        }
    }, 100);
    console.log("i am out")
    

    function myFun2(){
        var listfor = setInterval(() => {
            var join = document.getElementsByClassName("dis-cen")
            for(var j = 0; j < join.length; j++){
                join[j].getElementsByTagName("button")[0].click()
                
                console.log('why');
                clearInterval(listfor);
                setTimeout(()=>{
                    self.location = 'http://www.agskins.cn/arena'
                },1000)
            }
        }, 100);
    }


    var join = document.getElementsByClassName("dis-cen")
    for( j = 0; j < join.length; j++){
        console.log('why', join[j].getElementsByClassName("button")[0]);
    }




    console.log("i am outing！！")
    
    
    
        var listWin = setInterval(() => {
            if(document.getElementsByClassName("win")[0].innerText == '胜 利'){
                //window.location.replace('http://www.agskins.cn/arena')
                self.location = 'http://www.agskins.cn/arena'
                console.log('win');
                clearInterval(listWin);
            }
        }, 10000);
    
    

setInterval(() => {
        var getGood_list = document.getElementsByClassName("li-list-price");
        for(var i = 0; i < getGood_list.length; i++){
            var getGood_list_price = getGood_list[i].innerText;
            if(getGood_list_price == ' 0.00'){
                document.getElementsByClassName("li-list-button")[i].getElementsByTagName("a")[0]//.click()
                console.log(getGood_list_price);
            }
        }
    }, 2000);

var join = document.getElementsByClassName("dis-cen")
for(var i = 0; i < join.length; i++){
    join[i].getElementsByTagName("button")[0].click()
    console.log(join[i].getElementsByTagName("button")[0].click());
}

var getGood_click = document.getElementsByClassName("li-list-button")[0].getElementsByTagName("a")[0].click()

var getGood_list = document.getElementsByClassName("li-list-price");
var getGood_list_price = getGood_list.find(item => item.innerText == ' 0.00');
console.log('getGood_list_price', getGood_list_price);

var getGood_list = document.getElementsByClassName("li-list-price");
var getGood_list_price = getGood_list[0].innerText;
console.log(getGood_list_price);