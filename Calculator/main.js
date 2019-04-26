

  
  function viewSource(){;
    var source = "<html>";
    source += document.getElementsByTagName('html')[0].innerHTML;
    source += "</html>";
    source = source.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    source = "<pre>"+source+"</pre>";
    sourceWindow = window.open('','Source of page','height=800,width=800,scrollbars=1,resizable=1');
    sourceWindow.document.write(source);
    sourceWindow.document.close();
    if(window.focus) sourceWindow.focus();
}
   
   // document.querySelector('.n').addEventListener('click',function clicked(e) {
    // document.querySelector('.input').innerText = e.target.innerText;
    // console.log(e);
    // });
    var input = document.querySelector('.input');
    var nums = document.querySelectorAll('.n')

    // document.querySelector('.calc-bottom').addEventListener('click',function clicked() {
  
    // });
    var res = '';
    const e = 2.718281828;
    const p = 3.141592654;

    for (let i = 0; i < nums.length; i++) {
        nums[i].addEventListener('click',function add(mousee) {
            
            var a = parseInt(nums[i].id);
            if ((a > 0 && a<13) || a==15 || a==16 || a==17 || a==18 ||a==19) {
                if (a==12) {
                    var q = res [res.length-1];
                    console.log(q);
                    if (q == '+' || q == '-' || q == '*' || q == '/' || res == '' ) {
                        res = res + 'p';
                        input.textContent = input.textContent + nums[i].innerText;
                    } else {
                        res = res + '*p';
                        input.textContent = input.textContent + '*' + nums[i].innerText;
                    }
                } else if (a==19) {
                    var q = res [res.length-1];
                    if (q == '+' || q == '-' || q == '*' || q == '/' || res == '') {
                        res = res + 'e';
                        input.textContent = input.textContent + nums[i].innerText;
                    } else {
                        res = res + '*e';
                        input.textContent = input.textContent + '*' + nums[i].innerText;
                    }
                } else {
                    res = res + nums[i].innerText;
                    input.textContent = input.textContent + nums[i].innerText;
                }
                document.querySelector('.result').textContent = '';
                
            } else if(a==13){
                input.textContent = input.textContent.substring(0,input.textContent.length - 1);
                res = res.substring(0,res.length - 1);
                console.log(res);
                document.querySelector('.result').textContent = '';
            }else if (a==14) {
                input.textContent = '';
                res = '';
                document.querySelector('.result').textContent = '';
            }else if(a==20){
                var re = eval(res);
                document.querySelector('.result').textContent = re;
            }

            
        });
   } 