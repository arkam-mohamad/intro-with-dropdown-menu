let features = $('#first')
let company = $('#second');
let arrowDown = $('.arrow-down');
let arrowUp = $('.arrow-up');
let mobileFeatures = $('#mobile-first');
let mobileCompany = $('#mobile-second')
let menuIcon = $('.menu-icon');
let closeIcon = $('.close');


//toggle submenu
$(features).click(function (e) { 
  $(e.currentTarget).toggleClass('hidden');
  $(e.currentTarget.children[0].children[1]).toggleClass('display-none');
  $(e.currentTarget.children[0].children[2]).toggleClass('display-none');
});

$(company).click(function (e) { 
  $(e.currentTarget).toggleClass('hidden');
  $(e.currentTarget.children[0].children[1]).toggleClass('display-none');
  $(e.currentTarget.children[0].children[2]).toggleClass('display-none');
});


//toggle mobile menu
$(menuIcon).click(function (e) { 
  e.preventDefault();
  $('.mobile').toggleClass('display-flex');
});

$(closeIcon).click(function (e) { 
  e.preventDefault();
  $('.mobile').toggleClass('display-flex');
});


//toggle submenu for mobile
$(mobileFeatures).click(function (e) { 
  $(e.currentTarget).toggleClass('mobile-hidden');
  $(e.currentTarget.children[0].children[1]).toggleClass('display-none');
  $(e.currentTarget.children[0].children[2]).toggleClass('display-none');
});

$(mobileCompany).click(function (e) { 
  $(e.currentTarget).toggleClass('mobile-hidden');
  $(e.currentTarget.children[0].children[1]).toggleClass('display-none');
  $(e.currentTarget.children[0].children[2]).toggleClass('display-none');
});

