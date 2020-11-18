
    $(document).ready(function(){

        $('#btn1').click(function(){
            var txt1=document.getElementById("u1").value
            if(txt1!="")
            {
            $("#box_1_txt").append("<p style=\"float:right;color:yellow;font-size:20px;\">"+txt1+"<br>"+"</p><br><br>")
            $('#box_2_txt').append("<p style=\"float:left;color:yellow;font-size:20px;\">"+txt1+"<br>"+"</p><br><br>")
            // scrollFunction();
            }
            })
        
            $('#btn2').click(function(){
            var txt2=document.getElementById("u2").value
            
            $('#box_1_txt').append("<p style=\"float:left;color:Green;font-size:20px;\">"+txt2+"</p><br><br>")
            $('#box_2_txt').append("<p style=\"float:right;color:Green;font-size:20px;\">"+txt2+"</p><br><br>")
            // scrollFunction1();
            
            })
        })
        
        // function scrollFunction()
        // {
        //     var element1=document.getElementById('box_1_txt')
        //     element1.scrollTop=element1.scrollHeight
        
        // }
        
        // function scrollFunction1()
        // {
        //     var element2=document.getElementById('box_2_txt')
        //     element2.scrollTop=element2.scrollHeight
        // }