function add_to_cart(id)
	{
		var key = 'Product_' + id;
		var x = window.localStorage.getItem(key);
		x = x * 1 + 1;
		window.localStorage.setItem(key, x)
	}