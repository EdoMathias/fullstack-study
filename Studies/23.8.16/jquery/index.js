///<reference path="jquery-3.7.0.js"/>
'use strict';

// $(document).ready(() => {
//   console.log('Hello using jquery');
// });

//--Selectors--//
$(() => {
  console.log('Hello using jquery');
  //   $('#list li').addClass('red');
});

$(() => {
  console.log('Hello using jquery');
  //   $('.item3').addClass('red');
  //   console.log($('li')); // also shows length in the returned array
  //   $('li:odd').addClass('red');
  //   $('li:even').addClass('red');
});

// $(() => {
//   console.log('Hello using jquery');
//   $('li').addClass('red');
// });

// const items = document.querySelectorAll('li');
// items.forEach((item) => {
//   item.classList.add('red');
// });

//--Events--//
$(() => {
  $('#add-item-button')
    .click(() => {
      console.log('button clicked');
    })
    .addClass('red');

  //   $('li').click(() => {
  //     console.log('li clicked');
  //     $('ul').append($('<li>item 99</li>'));
  //   });

  $('ul').on('click', 'li', () => {
    $('ul').append($('<li>item 99</li>'));
  });
});
