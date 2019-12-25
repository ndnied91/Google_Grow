// var doc = new jsPDF();
// var specialElementHandlers = {
//     '#editor': function (element, renderer) {
//         return true;
//     }
// };

// $('#cmd').click(function () {
//     doc.fromHTML($('#content').html(), 15, 15, {
//         'width': 170,
//             'elementHandlers': specialElementHandlers
//     });
//     doc.save('sample-file.pdf');
// });


// var doc = new jsPDF();
// var specialElementHandlers = {
//     '#editor': function (element, renderer) {
//         return true;
//     }
// };

// $('#cmd').click(function () {
//     doc.fromHTML($('#content').html(), 15, 15, {
//         'width': 170,
//             'elementHandlers': specialElementHandlers
//     });
//     doc.save('sample-file.pdf');
// });



$('#cmd').click(function () {
var name_val = $('form#smdiv input[name="name"]').val();
var pixel_can = $('form#smdiv div[id="canvas"]').val();




var pdf = new jsPDF();
// pdf.text(5, 5, 'You figure out formatting');
pdf.image(20,20, 'Name: '+ pixel_can); 
pdf.text(20,20, 'Name: '+ name_val); 

pdf.save('Your Sketch.pdf');
});    



///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

 $('#pixelCanvas').on('mouseover', 'tr td', function(e) {
    if(e.buttons===1) { //left mouse down
        let color = $('#colorPicker').val();
        $(this).css('background-color', color);
    } 
          else if(e.buttons===2) { //right mouse down
        //eraser logic
               e.preventDefault();
        $(this).css('background-color' , 'none');
    }
});

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
  $("#getReady").click(function () {
    $("#getReady").hide();
  });
});



$(document).ready(function(){
    $("#getReady").click(function(){
        $("#all").animate({
            height: 'toggle'
        });
    });
});


////////////////////////////////////////////


$('#sizePicker').submit(function() {
    makeGrid();
    return false;
});



function makeGrid() {
$('#pixelCanvas').empty();
  
    var tr,height,width,size;
  size=document.getElementById('sizePicker');
  height = parseInt(size.elements['height'].value); 
  width = parseInt(size.elements['width'].value);

  for (row=1; row<=height; row++) {
    tr=$(' <tr/>');
     for (col=1; col<=width; col++) {
   
        tr.append('<td/>')
       

      }
       $("#pixelCanvas").append(tr);
 }


return false;
}



///////////////////////////
//ADD GOOD MORNING AND GOOD EVENING 
//add eraser
//add option to import ursl
//add option to export image
//change background
//add more pictures

function randombg(){
  var random= Math.floor(Math.random() * 6) + 0;
  var bigSize = ["url('http://drawingartpop.com/wp-content/uploads/2017/03/easy-pictures-for-kids-to-draw-1000-images-about-tracing-pictures-on-pinterest-valentines-day.jpg')",
                 "url('http://pre00.deviantart.net/1f7b/th/pre/i/2009/337/d/d/spongebob___lineart__by_2d75.jpg')",

                 "url('http://www.nephogram.net/wp-content/uploads/2018/01/How-To-Draw-A-Cartoon-Wolf-Cub-With-How-To-Draw-A-Cartoon-Wolf-Howling-At-The-Moon-In-conjunction-With-How-To-Draw-A-Cartoon-Wolf-805x779.jpg')",

                 "url('http://i.pinimg.com/736x/13/d5/83/13d583d8704a2721b93327ecc1556753--truck-coloring-pages-coloring-sheets.jpg')",

                 "url('http://i.pinimg.com/736x/3c/e0/09/3ce009ad2401275d4fa5ee9ea583ce89--poly-pocket-kucing.jpg')",

                 "url('http://images.template.net/wp-content/uploads/2014/12/Gold-Fish-Template.jpg')"];

  document.getElementById("pixelCanvas").style.backgroundImage=bigSize[random];






  
}