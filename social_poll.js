(function($){
  $.fn.social_poll = function(options) {
    
    var defaults = {
      //facebook credentials? twitter credentials? php to hit?
      //default facebook msg? twitter?
      options: new Array(),
      message: "hi!",
      url: "http://www.headcount.org"
      
    };
  
  var options = $.extend(defaults, options);
    
  return this.each(function() {
   obj = $(this);
   var body = obj.html();
                      
  //alter initial div
  obj.css('width', 150);
  
  //create voting boxes for each option
  $.each(options.options, function(index, value){
    //attach voting buttons to original object
    obj.append("<div id='social_poll_voting_button_" + index + "'class='social_poll_voting_button' style='float:left; margin-left:10px; width:35px; height:20px; background-color:white; border-style:solid; border-width:5px; border-color:grey;'>" + value + "</div>");
    
    //attach voting options to voting button
    $('#social_poll_voting_button_' + index).append("<div id='social_poll_option_box_" + index + "'class='social_poll_option_box hidden' style='position:relative; z-index:-1; width:400px; top:-4px; margin-left:-5px; background-color:white; display:none; border-style:solid; border-width:5px; border-color:grey;'>" +
                                                      "<ul style='list-style-type:none; margin-left:-20px;'>" +
                                                        "<li>Vote <span class='option_value'>" + value + "</span>! by tweeting with twitter <a href='http://twitter.com/share' class='twitter-share-button' data-url='" + options.url + "' data-text='I voted " + options.message + "'>Tweet</a></li>" +
                                                        "<li>Vote <span class='option_value'>" + value + "</span>! by liking with facebook <fb:like href='" + options.url + "' layout='button_count' show_faces='true' width='450'></fb:like></li>" +
                                                        "<li>Just vote <span class='option_value'>" + value + "</span><button class='fg-button ui-state-default ui-corner-all ui-state-active' type='button'>Vote " + value + "</button></li>" +
                                                      "</ul>" +
                                                    "</div>");
    
  });
  
  $('.social_poll_voting_button').bind('click', function(){
    $('.social_poll_voting_button').css('border-style', 'solid');
    if($(this).children('.social_poll_option_box').hasClass('hidden')){
        $(this).children('.social_poll_option_box').removeClass('hidden');
        $(this).children('.social_poll_option_box').addClass('visible');
        $(this).css('border-bottom-style', 'none');
      }
      else{
        $(this).children('.social_poll_option_box').removeClass('visible');
        $(this).children('.social_poll_option_box').addClass('hidden');
        $(this).css('border-bottom-style', 'solid');
      }
    
    $('.social_poll_option_box:not((this).children(.social_poll_option_box))').hide('slow');
    $(this).children('.social_poll_option_box').toggle('slow');
  });
   /*
   if(body.length > options.length + options.minTrail) {
    var splitLocation = body.indexOf(' ', options.length);
    if(splitLocation != -1) {
     // truncate tip
     var splitLocation = body.indexOf(' ', options.length);
     var str1 = body.substring(0, splitLocation);
     var str2 = body.substring(splitLocation, body.length - 1);
     obj.html(str1 + '<span class="truncate_ellipsis">' + options.ellipsisText + 
      '</span>' + '<span  class="truncate_more">' + str2 + '</span>');
     obj.find('.truncate_more').css("display", "none");
     
     // insert more link
     obj.append(
      '<div class="clearboth">' +
       '<a href="#" class="truncate_more_link">' +  options.moreText + '</a>' + 
      '</div>'
     );

     // set onclick event for more/less link
     var moreLink = $('.truncate_more_link', obj);
     var moreContent = $('.truncate_more', obj);
     var ellipsis = $('.truncate_ellipsis', obj);
     moreLink.click(function() {
      if(moreLink.text() == options.moreText) {
       moreContent.show('normal');
       moreLink.text(options.lessText);
       ellipsis.css("display", "none");
      } else {
       moreContent.hide('normal');
       moreLink.text(options.moreText);
       ellipsis.css("display", "inline");
      }
      return false;
       });
    }
   } // end if
   */
  });
 };
})(jQuery);
