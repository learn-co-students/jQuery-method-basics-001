function clickListeners() {

	//go to: http://api.jquery.com to read about each of the methods below and then set the apropriate button to apply the method to the content below it.

	//hide
	$("#b1").click(function(){
		$("#p1").hide();
	});
		
	//show
	$('#b2').click(function(){
		$('#p1').show();
	});
			
	//toggle
	$('#b3').click(function(){
		$('#p1').toggle();
	});
		
	//css
	$('#b4').click(function(){
		$('#p2').css({'background-color': '#ccc'});
	}); 
		
	//css (multiple property changes)
	$('#b5').click(function(){
		$('#p2').css({'color': 'white', 'padding': '5px', 'background-color': 'blue'});
	}); 
		
	//html
	$('#b6').click(function(){
		$('#p3').html("change html text to this!");
	});
		
	//prepend
	$('#b7').click(function(){
		$('#p3').prepend("<strong>Before </strong>");
	});
		 
	//append
	$('#b8').click(function(){
		$('#p3').append("<strong> After</strong>");
	});
		 
	//before
	$('#b9').click(function(){
		$('#p4').before("<h3>Before E</h3>");
	}); 
	//after
	$('#b10').click(function(){
		$('#p4').after("<h3>After E</h3>");
	});
		 
	//wrap
	$('#b11').click(function(){
		$('#p5').wrap("<div class='pinky'></div>");
	});
		 
	//addClass
	$('#b12').click(function(){
		$('#p5').addClass("texty");
	});
		 
	//clone
	$('#b13').click(function(){
		$('li').clone().appendTo('ul');
	});
		 
	//fadeOut
	$('#b14').click(function(){
		$('#p6').fadeOut('slow');
	});
		 
	//fadeIn
	$('#b15').click(function(){
		$('#p6').fadeIn('slow');
	});
		  
	//fadeToggle
	$('#b16').click(function(){
		$('#p6').fadeToggle('slow');
	});
		  
	//slideUp
	$('#b17').click(function(){
		$('.box-content').slideUp('slow');
	});
		 
	//slideDown
	$('#b18').click(function(){
		$('.box-content').slideDown('slow');
	});
		
	//slideToggle
	$('.box-header').click(function(){
		$('.box-content').slideToggle('slow');
	});
		  
	//animate
	$('#b19').click(function(){
		$('.box-animate').animate({height: 200}).animate({width: 200}).animate({height: 50}).animate({width: 50, overflow: 'hidden'}).animate({width: 100, overflow: 'hidden'}).animate({height: 100});
	});
		 
}