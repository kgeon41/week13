var Links = {
  setColor : function(color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}

var Body = {
  setColor : function(color) {
    document.querySelector('body').style.color = color;
  },
  setBgColor : function(color) {
    document.querySelector('body').style.backgroundColor = color;
  }
}

function nightDayHandler(self){  
  if(self.value == 'day'){
    Body.setBgColor('white');
    Body.setColor('black');            
    Links.setColor('steelBlue');
    self.value = 'night';
  } else {
    Body.setBgColor('black');
    Body.setColor('white');        
    Links.setColor('darkGoldenRod');
    self.value = 'day';z
  }  
}
