# waterfall.js

Auto set boxes's position to make a waterfall layout. 

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

Click [DEMO](https://nossika.github.io/waterfall.js/demo.html) to try it!

## Init options

	Waterfall.init(container, selector, options);

* **container** (required, type: HTMLElement)

* **selector** (required, type: String): selector of boxes in container

* **options** (type: Object)

	* **space** (type: Array, default: `[20, 20]`): margin-top/bottom and margin-left/right of boxes

	* **keep_css** (type: Boolean, default: false): whether to keep container's `position` and `height`


## Methods

* **init(container, selector, options)**

	Check out **Init options** for detail.

* **fall(cache)**
 
	Calc and reset boxes' position.

	* **cache** (type: Boolean, default: false): whether to use cache

* **reset()**

	Reset data and clear boxes.
	

## Tips

* Boxes must be direct child of container.

* Remember to excute `Waterfall.fall()` when adding boxes or resizing container. Use `Waterfall.fall(true)` for better performance if container's width hasn't changed.

* Add `transition` property to boxes' css for better visual effect.

