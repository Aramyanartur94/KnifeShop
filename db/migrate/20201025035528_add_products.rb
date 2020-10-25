class AddProducts < ActiveRecord::Migration[6.0]
  def change
  	Product.create 	:title => 'Нож Финка',
  					:description => 'Береста, компания АИР',
  					:price => 5000,
  					:size => 235,
  					:path_to_image => '/images/knifefinka.jpeg'
  	Product.create 	:title => 'Нож Макс',
  					:description => 'Сталь, кожа',
  					:price => 4000,
  					:size => 258,
  					:path_to_image => '/images/knifemax.jpeg'
  	Product.create 	:title => 'РР266',
  					:description => 'Рукоять граб + латунь',
  					:price => 3500,
  					:size => 245,
  					:path_to_image => '/images/knifepp266.jpeg'
  	Product.create 	:title => 'Стрела',
  					:description => 'Сталь, резина',
  					:price => 2500,
  					:size => 295,
  					:path_to_image => '/images/knifestrela.jpeg'
  	Product.create 	:title => 'Варан',
  					:description => 'Сталь, кожа компания АИР',
  					:price => 4000,
  					:size => 240,
  					:path_to_image => '/images/knifevaran.jpeg'
  	Product.create 	:title => 'Лиса',
  					:description => 'Сталь, рукоять кожа, компания АИР',
  					:price => 4200,
  					:size => 258,
  					:path_to_image => '/images/lisa.jpeg'																			
  end
end
