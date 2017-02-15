# waterfall.js

Make equal-width boxes fall like waterfall. 

## Examples

	<div id="container">
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		...
	<div>
	<script src="waterfall.min.js"></script>
	<script>
		Waterfall.init(document.querySelector('#container'), '.box', {
			space: [15, 15]
		})
	</script>

click [demo](https://nossika.github.io/waterfall.js/demo.html) to try it online.

## Options

|Parameter|Type|Default|Description|
|:-:|:-:|:-:|---|
|space|Array(2)|[20, 20]|[margin-top/bottom, margin-left/right] of boxes|
|keep_css|Boolean|false|whether to keep container's `position` and `height`|

## Methods

|Method|Description|
|:-:|---|
|init(container, selector [,config])|container \<DOM element><br>selector \<String><br>config \<Object>|
|fall(cache)|calc & set boxes' position<br>cache \<Boolean>|
|reset()|reset data & clear boxes|
## Ticks

* Boxes must be direct child of container.

* Remember to excute `Waterfall.fall()` when adding boxes or resizing container. Use `Waterfall.fall(true)` for better performance if container's width hasn't changed.

* Add `transition` property to box's css for better visual effect.

