$(document).on('turbolinks:load', function(){
  $('.owl-carousel').owlCarousel({
    autoPlay: 4000,
    touchDrag: true,
    stopOnHover: true,
    items: 2,
    itemsDesktop: [1119,2],
    itemsDesktopSmall: [979, 2],
    itemsTablet: [768,2],
    itemsMobile: [479,1]
  });
});

$(document).on('click', '.update-combo-quantity-in-cart', function() {
  var order_combo = $(this).data('id');
  var idQuantityOrderComboField = '#quantity-of-order-combo-' + order_combo;
  var idOrderComboRow = '#order-combo-row-' + order_combo;
  var idOrderComboTotalPrice = ' #order-combo-total-price-' + order_combo;
  var quantity = $(idQuantityOrderComboField).val();
  var url = '/order_combos/' + order_combo;

  $.ajax({
    type:'PATCH',
    url: url,
    data: {
      order_combo: {
        quantity: quantity,
        id: order_combo
      }
    }
  }).success(function(){
    $(idOrderComboRow).load(document.URL + idOrderComboTotalPrice);
  });
});

$(document).on('click', '.delete-combo-in-cart', function() {
  var order_combo = $(this).data('id');
  var url = '/order_combos/' + order_combo;
  $.ajax({
    type:'DELETE',
    url: url,
    data: {
      order_combo: {
        id: order_combo
      }
    }
  }).success(function(){
    $('#cart-text').load(document.URL + ' #order-card-text');
    $('#cart-content').load(document.URL + ' #cart-content-list');
  });
});

$(document).on('click', '.update-dish-quantity-in-cart', function() {
  var order_dish = $(this).data('id');
  var idQuantityOrderDishField = '#quantity-of-order-dish-' + order_dish;
  var idOrderDishRow = '#order-dish-row-' + order_dish;
  var idOrderDishTotalPrice = ' #order-dish-total-price-' + order_dish;
  var quantity = $(idQuantityOrderDishField).val();
  var url = '/order_dishes/' + order_dish;
  $.ajax({
    type:'PATCH',
    url: url,
    data: {
      order_dish: {
        quantity: quantity,
        id: order_dish
      }
    }
  }).success(function(){
    $(idOrderDishRow).load(document.URL + idOrderDishTotalPrice);
  });
});

$(document).on('click', '.delete-dish-in-cart', function() {
  var order_dish = $(this).data('id');
  var url = '/order_dishes/' + order_dish;
  $.ajax({
    type:'DELETE',
    url: url,
    data: {
      order_dish: {
        id: order_dish
      }
    }
  }).success(function(){
    $('#cart-text').load(document.URL + ' #order-card-text');
    $('#cart-content').load(document.URL + ' #cart-content-list');
  });
});

$(document).on('click', '.add-dish-to-cart', function() {
  var dish = $('.dish-id').val();
  var id = '#quantity-dish-order-' + dish;
  var quantity = $(id).val();
  var url = '/order_dishes';
  $.ajax({
    type:'POST',
    url: url,
    data: {
      order_dish: {
        quantity: quantity,
        dish_id: dish
      }
    }
  }).success(function(){
    $('#cart-text').load(document.URL + ' #order-card-text');
  });
});

$(document).on('click', '.add-combo-to-cart', function() {
  var combo = $('.combo-id').val();
  var id = '#quantity-combo-order-' + combo;
  var quantity = $(id).val();
  var url = '/order_combos';
  $.ajax({
    type:'POST',
    url: url,
    data: {
      order_combo: {
        quantity: quantity,
        combo_id: combo
      }
    }
  }).success(function(){
    $('#cart-text').load(document.URL + ' #order-card-text');
  });
});
