$(function(){

	//This is page loader
	setTimeout(function(){
		$('.page-loader').fadeOut();
	},3000);
 	

});

AOS.init();		

// NavigationBar function

$(document).scroll(function(){
	var nav 			= $("header");
	var mainSection 	= $(".main-section").outerHeight(true)-30;

	nav.toggleClass("scroll" , $(this).scrollTop() > mainSection);
});
	
	// add your boat (form)
$("#formContact").validate(
{
	rules:
	{
		name:
		{
			required:true,
			Alphabetsonly:true
		},
		phone:
		{
			required:true,
			numbersonly:true
		},
		email:
		{
			required:true
		},
		password:
		{
			required:true,
		    minlength: 8,
		    maxlength: 16
		},
		country:
		{
			required:true
		},
		professional:
		{
			required:true
		},
		zipcode:
		{
			required:true,
			minlength:5,
			numbersonly:true
		},
		findaboutus:
		{
			required:true,
		},
		radiotype:
		{
			required:true
		},
	},
	messages:
	{
		name:
		{
			required:"Please enter your name",
			Alphabetsonly:"Alphabetical characters only"

		},
		phone:
		{
			required:"Please enter your Contact Number",
			numbersonly:"Numbers only"
		},
		email:
		{
			required:"Please enter your email address"
		},
		password:
		{
			required:"Please enter your password",
			password: "Password should be 8-16 characters with uppercase letters, lowercase letters and at least one number."
		},
		country:
		{
			required:"Please select a field"
		},
		radiotype:
		{
			required:"Please select a field"
		},
		findaboutus:
		{
			required:"Please select a field"
		},
		professional:
		{
			required:"Please select a field"
		},
		zipcode:
		{
			required:"Enter your 5 digit zipcode",
			 minlength:"Enter 5digits",
			 numbersonly:"Only numbers are allowed"
		},



	},
	submitHandler:function(form)
	{
		Swal.fire("You have registered successfully , We will revert to you shortly");
	},
	errorPlacement: function (error, element) {
		if(element.attr("name") == "radiotype"){
            error.insertAfter(element.closest('ul'));               
		}else{
            error.insertAfter(element);               

		}               
	}

});

jQuery.validator.addMethod("Alphabetsonly",function(value,element)
{
	return this.optional(element) || /^[a-z\s ]+$/i.test(value);
}, );

jQuery.validator.addMethod("numbersonly",function(value,element)
{
	return this.optional(element) || /^[-+1-9 ]*$/i.test(value);
}, );
$.validator.addMethod("password",function(value,element)
{
    return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/i.test(value);
});

		// footer-subscription
$("#form").validate(
	{
 	rules:
 	{
 		email:
 		{
 			required:true
 		}
 	},
 	messages:
 	{
 		email:
 		{
 			required:"Please enter your email address"
 		}
 	},
 	submitHandler:function(form)
 	{

 		Swal.fire({
		  title: 'Successfully Subscribed',
		  confirmButtonText: `OK`,
		}).then((result) => {
		  if (result.isConfirmed) {
		  	window.location.href  = window.location.href;
		  }
		})
 	},
 	errorPlacement: function (error, element) {
                     error.appendTo(element.closest('.form'));
             }

 });
$("#load-button").click(function()
{
	$("#hide-boats").fadeToggle( "slow", "linear" );
	$("#hide-boats").css("display","flex");
	if(this.innerHTML =='Load more boats'){
		this.innerHTML = 'Show Less';
	}else{
		this.innerHTML = 'Load more boats';
	}
});

	// counter-section
var count = 1;
$(window).on("scroll",function(){
		//count = 1
	if($('.counter-section').length > 0){

		if($('.counter-section').offset().top < $(window).scrollTop() ){
			if(count == 1){

				$('.counter').rCounter({
					duration: 60
				});
				count = 0
			}

		}
	}
});

	// social media icons

$(function(){

$("body").floatingSocialShare();

 });

	// slider

$('.slider').slick({
	arrows:false,
  slidesToShow: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
   fade: true,
  cssEase: 'linear'
});

/*accordian*/

$( function() {
    $( "#accordion" ).accordion();
  } );

 /*Side Login*/
 $(document).on('click','.login-btn,.sign-up-btn',function(){
        $('.main').addClass('main-active')
    });

    $(document).on('click','.login-btn',function(){
        $('.side-login').addClass('side-login-active')
    });

    $(document).on('click','.sign-up-btn',function(){
        $('.side-sign-up').addClass('side-sign-up-active')
    });

    $(document).on('click','.sign-up-cancel-btn,.login-cancel-btn',function(){
        $('.main').removeClass('main-active')
    });
    $(document).on('click','.login-cancel-btn',function(){
        $('.side-login').removeClass('side-login-active')
    });
    $(document).on('click','.sign-up-cancel-btn',function(){
        $('.side-sign-up').removeClass('side-sign-up-active')
    });



 $(".form1").validate(
{
  rules:
  {

  fullname:
    {
      required:true,
       lettersonly:true

    },

    email:
    {
      required:true
    },

    password:
    {
      required:true,
    }

  },
  messages:
  {
    fullname:
    {
    required: "Enter Your First Name ",
    lettersonly:"Alphabetsonly"
  },
    
    email: 
    {
      required:"Enter Your email address",
  },

    password:
    {
      required:"Enter Your password",
  }

  },
  submitHandler:function(form)
  {
    Swal.fire("Registered");
  },
  errorPlacement: function (error, element) {               
                    error.insertAfter(element.closest('div'));               
            }



});

jQuery.validator.addMethod("lettersonly",function(value,element)
{
  return this.optional(element) || /^[a-z\s]+$/i.test(value);
}, );


jQuery.validator.addMethod("numbersonly",function(value,element)
{
  return this.optional(element) || /^[-+1-9 ]*$/i.test(value);
}, );




			// featuredBoats innerpage
$("#persons").change(function(event){
		var persons		=		$("#persons option:selected").val();
		$("#search").attr("data-persons" , persons);
 });
$("#duration").change(function(event){
	var duration	=		$("#duration option:selected").val();
	$("#search").attr("data-duration" , duration);
});
$("#type").change(function(event){
	var type	=		$("#type option:selected").val();
	$("#search").attr("data-type" , type);
});

$("#search").click(function(){
	var type				=		$(this).attr("data-type");
	var duration 			=		$(this).attr("data-duration");
	var persons 			=		$(this).attr("data-persons");
	var boat 				=		type + "-" + duration + "-" + persons;
	$('.img-box img').each(function(){
	
		var item 	= 		$(this).data('value');

		

		if(item == boat){
			$(this).show();
			//$(this).parent('.img-box').prev('.sorry-mesg').hide();	
		}
		else{
			$(this).hide();	
			//$(this).parent('.img-box').prev('.sorry-mesg').show();	
		} 

	})
});

	// header (find a boat)

$('#find-boat').click(function(){
	 var destination = $('#destination-list option:selected').val();
	 console.log(destination);
	 location.href = 'featured-boats.html' + "#" + destination;
 });


 if (window.location.hash == '#spain'){
	 $('html, body').animate({
 		scrollTop: $("#spain").offset().top
 	}, 1500);
	 // $('#portugal, #italy', '#monaco').hide();
 }
 if (window.location.hash == '#monaco'){
	 $('html, body').animate({
 		scrollTop: $("#monaco").offset().top
 	}, 1500);
	 $('#portugal, #italy', '#spain').hide();
 }
 if (window.location.hash == '#italy'){
	 $('html, body').animate({
 		scrollTop: $("#italy").offset().top
 	}, 1500);
	 $('#portugal, #spain', '#monaco').hide();
 }
 if (window.location.hash == '#portugal'){
	 $('html, body').animate({
 		scrollTop: $("#portugal").offset().top
 	}, 1500);
	 $('#spain, #italy', '#monaco').hide();
 }




