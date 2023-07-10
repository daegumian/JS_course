

function addCookie(name, value) {

    //시간설정

    var date = new Date();
    date.setDate(date.getDate()+1); //현재시간 + 1일
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);

    var cookie = "";
    cookie += name + "=" + value + "; ";
    cookie += "expires=" + date.toUTCString() + "; ";

    document.cookie = cookie;

}

//쿠키 가져오기
function getCookie(name){


    var arr = document.cookie.split('; ');
    if(arr.length != 0){

        for(var i = 0; i < arr.length; i++){
            
            if(arr[i].indexOf(name + "=") != -1){

                return true; //쿠키가 있다는 뜻.

            }

        }

    }

}