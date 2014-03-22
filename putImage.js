// putImage Plugin
// Created By: Jose Nino N. Garcia
// Date Created: 3/20/2014
// Description: The purpose of the plugin is to fetch two images and receive by the plugin and controls out the images for hovering.

(function($){
	
	$.fn.putImage = function(lengthMet, directory){
		
			var val = "<ul>";
			val += writeImgList(lengthMet);
			val += "</ul>";
		
		$(this).html(val);
		
		$(this).children("ul").find("li").css("float", "left");
		
		for(var i = 0; i < lengthMet; i++)
		{
			//var theProperty = $("li a#boxID" + (i + 1));
			var theProperty = $(document).find("li a#boxID" + (i + 1));
			var imageURL = directory + (i + 1) + ".png";
			
			theProperty.css("display","block");
			theProperty.css("background-image", "url(" + imageURL + ")");
			theProperty.css("background-repeat","no-repeat");	
			theProperty.css("height", "168px");
			theProperty.css("width", "129px");
			theProperty.mouseenter(function()
			{
				$(this).css("background-position", "0px -169px");
				var grpArray = [];
				var j = 0;
				
				for(j = 0; j != lengthMet; j++)
				{
					grpArray.push("boxID" + (j + 1));
					$("#sp" + (j + 1)).hide(100);
					if($(this).get(0).id == grpArray[j])
					{
						$("#sp" + (j + 1)).fadeIn(200);
						
					}
				}	
			});
			theProperty.mouseleave(function()
			{
				$(this).css("background-position", "0px 0px");
			});
			theProperty.css("cursor","pointer");
		}
	};
	
	function writeImgList(id)
	{
		var strBend = "";
		for(var i = 0; i < id; i++){
			strBend += "<li><a id='boxID" + (i + 1) + "'></a></li>"
		}
		return strBend;	
	}
	
	
	
})(jQuery);