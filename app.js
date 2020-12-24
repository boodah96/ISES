var name = prompt('Enter your name please');
    alert('welcome  ' + name);
    document.write('<h2>'+'Hello our customer: '+name+'</h2>')
    var age = prompt('Enter your age please "your age should be more than 18"')
    while (age<18 ){
        
        if (age<18) { 
            alert('your age should be more than 18');
        }
        var age = prompt('Enter your age please')
        
    }

    document.write('<h2>'+'your age : '+age+'</h2>')


    var panel = prompt ('How many panel do you want ?')
    document.write('<h2>'+'# of panel : '+panel+'</h2>')

  for(var i = 0; i < panel ;i++ ){
   document.write('<img src="https://5.imimg.com/data5/SELLER/Default/2020/10/PX/SQ/LE/76138387/330-w-polycrystalline-solar-pv-250x250.jpg">')

  }

    
