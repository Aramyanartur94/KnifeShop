function add_to_cart(id)
	{
		var key = 'Product_' + id;
		var x = window.localStorage.getItem(key);
		x = x * 1 + 1;
		window.localStorage.setItem(key, x)

		alert('Items in your cart: ' + cart_get_number_of_items());

		update_orders_input()
	}

function update_orders_input()
{
	var orders = cart_get_orders();
	$('#orders_input').val(orders);
}

function update_orders_input()
{
	var text = 'Cart (' + cart_get_number_of_items() +')';
	$('#orders_button').val(text);
}

function cart_get_number_of_items()
	{
		var cnt = 0;
		for(var i = 0; i < window.localStorage.length; i++)
		{
			var key = window.localStorage.key(i); // Получаем ключ;
			var value = window.localStorage.getItem(key); //Получаем значение; Аналог в руби: hh['bbb'] = x
			
			if(key.indexOf('Product_') == 0)
			{
				cnt = cnt + value * 1;
			}
		}
		return cnt;
	}	

function cart_get_orders()
	{
		var orders = '';
		for(var i = 0; i < window.localStorage.length; i++)
		{
			var key = window.localStorage.key(i); // Получаем ключ;
			var value = window.localStorage.getItem(key); //Получаем значение; Аналог в руби: hh['bbb'] = x
			
			if(key.indexOf('Product_') == 0)
			{
				orders = orders + key + '=' + value + ',';
			}
		}
		return orders;
	}	