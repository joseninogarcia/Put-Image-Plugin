Put Image jQuery Plugin
================

Put Image Plugin is a jQuery plugin that generates an image tag for your web page. Just simply initialize the plugin together with two parameters which are the number of images that stored in your folder then the directory of your folder where the images are located. 

This use to present the images that hovers a whole image together with a background position. 


How to use:
================

First, you need to include this code in the header:

```html
<script type="text/javascript" language="javascript" src="js/putImage.js"></script>
<script>
		$(document).ready(function(e) {
            $("#myLists").putImage(4, "images/casino/subnav/subbtn");
        });
</script>
```

For markup:

```html
<div id="tabDatas">
        	<div id="sp1">
            	<div class="bdGround">
                	<div class="pbtn1"><a href="" class="playNowBtn"></a></div>
                    <div class="pbtnMain">
                    	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                    </div><!-- pbtnMain -->
                    <div class="clear"></div>
                </div><!-- bdGround -->
                <div class="arrw1"></div>
            </div><!-- sp1 -->
            <div id="sp2">
            	<div class="bdGround">
                	<div class="pbtn1"><a href="" class="playNowBtn"></a></div>
                    <div class="pbtnMain">
                    	<p>LABEL 2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                    </div><!-- pbtnMain -->
                    <div class="clear"></div>
                </div><!-- bdGround -->
                <div class="arrw2"></div>
            </div><!-- sp2 -->
            <div id="sp3">
            	<div class="bdGround">
                	<div class="pbtn1"><a href="" class="playNowBtn"></a></div>
                    <div class="pbtnMain">
                    	<p>LABEL 3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                    </div><!-- pbtnMain -->
                    <div class="clear"></div>
                </div><!-- bdGround -->
                <div class="arrw3"></div>
            </div><!-- sp3 -->
            <div id="sp4">
            	<div class="bdGround">
                	<div class="pbtn1"><a href="" class="playNowBtn"></a></div>
                    <div class="pbtnMain">
                    	<p>LABEL 4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                    </div><!-- pbtnMain -->
                    <div class="clear"></div>
                </div><!-- bdGround -->
                <div class="arrw4"></div>
            </div><!-- sp4 -->
        </div><!-- tabDatas -->
        
<div id="myLists">
	<div class="clear"></div>
</div>
```

