//whoarewe
  function whoarewe(evt, useName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(useName).style.display = "block";
    evt.currentTarget.className += " active";

    var current = document.getElementsByClassName("active");
  }


//tabs create space
  function tabsspace(evt, useName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent_space");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks_space");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(useName).style.display = "block";
    evt.currentTarget.className += " active";

    var current = document.getElementsByClassName("active");
  }


//tabs my account
  function tabsaccount(evt, useName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent_account");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks_account");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(useName).style.display = "block";
    evt.currentTarget.className += " active";

    var current = document.getElementsByClassName("active");
  }


////// pop up  //////
$(function() {

  // Vars
  var modBtn  = $('#modBtn'),
      modal   = $('#modal'),
      close   = modal.find('.close'),
      modContent = modal.find('.modal-content');

  // open modal when click on open modal button
  modBtn.on('click', function() {
    modal.css('display', 'block');
    modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
  });

  // close modal when click on close button or somewhere out the modal content
  $(document).on('click', function(e) {
    var target = $(e.target);
    if(target.is(modal) || target.is(close)) {
      modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
        modal.css('display', 'none');
        next();
      });
    }
  });

});

////// pop up 2  //////
$(function() {

  // Vars
  var modBtn  = $('#modBtn2'),
      modal   = $('#modal2'),
      close   = modal.find('.close'),
      modContent = modal.find('.modal-content');

  // open modal when click on open modal button
  modBtn.on('click', function() {
    modal.css('display', 'block');
    modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
  });

  // close modal when click on close button or somewhere out the modal content
  $(document).on('click', function(e) {
    var target = $(e.target);
    if(target.is(modal) || target.is(close)) {
      modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
        modal.css('display', 'none');
        next();
      });
    }
  });

});


////// pop up 3  //////
$(function() {

  // Vars
  var modBtn  = $('#modBtn3'),
      modal   = $('#modal3'),
      close   = modal.find('.close'),
      modContent = modal.find('.modal-content');

  // open modal when click on open modal button
  modBtn.on('click', function() {
    modal.css('display', 'block');
    modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
  });

  // close modal when click on close button or somewhere out the modal content
  $(document).on('click', function(e) {
    var target = $(e.target);
    if(target.is(modal) || target.is(close)) {
      modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
        modal.css('display', 'none');
        next();
      });
    }
  });

});


////// pop up 4  //////
$(function() {

  // Vars
  var modBtn  = $('#modBtn4'),
      modal   = $('#modal4'),
      close   = modal.find('.close'),
      modContent = modal.find('.modal-content');

  // open modal when click on open modal button
  modBtn.on('click', function() {
    modal.css('display', 'block');
    modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
  });

  // close modal when click on close button or somewhere out the modal content
  $(document).on('click', function(e) {
    var target = $(e.target);
    if(target.is(modal) || target.is(close)) {
      modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
        modal.css('display', 'none');
        next();
      });
    }
  });

});

////// pop up 5  //////
$(function() {

  // Vars
  var modBtn  = $('#modBtn5'),
      modal   = $('#modal5'),
      close   = modal.find('.close'),
      modContent = modal.find('.modal-content');

  // open modal when click on open modal button
  modBtn.on('click', function() {
    modal.css('display', 'block');
    modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
  });

  // close modal when click on close button or somewhere out the modal content
  $(document).on('click', function(e) {
    var target = $(e.target);
    if(target.is(modal) || target.is(close)) {
      modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
        modal.css('display', 'none');
        next();
      });
    }
  });

});


////// pop up 6  //////
$(function() {

  // Vars
  var modBtn  = $('#modBtn6'),
      modal   = $('#modal6'),
      close   = modal.find('.close'),
      modContent = modal.find('.modal-content');

  // open modal when click on open modal button
  modBtn.on('click', function() {
    modal.css('display', 'block');
    modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
  });

  // close modal when click on close button or somewhere out the modal content
  $(document).on('click', function(e) {
    var target = $(e.target);
    if(target.is(modal) || target.is(close)) {
      modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
        modal.css('display', 'none');
        next();
      });
    }
  });

});


////// pop up 7  //////
$(function() {

  // Vars
  var modBtn  = $('#modBtn7'),
      modal   = $('#modal7'),
      close   = modal.find('.close'),
      modContent = modal.find('.modal-content');

  // open modal when click on open modal button
  modBtn.on('click', function() {
    modal.css('display', 'block');
    modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
  });

  // close modal when click on close button or somewhere out the modal content
  $(document).on('click', function(e) {
    var target = $(e.target);
    if(target.is(modal) || target.is(close)) {
      modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
        modal.css('display', 'none');
        next();
      });
    }
  });

});


////// pop up 8  //////
$(function() {

  // Vars
  var modBtn  = $('#modBtn8'),
      modal   = $('#modal8'),
      close   = modal.find('.close'),
      modContent = modal.find('.modal-content');

  // open modal when click on open modal button
  modBtn.on('click', function() {
    modal.css('display', 'block');
    modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
  });

  // close modal when click on close button or somewhere out the modal content
  $(document).on('click', function(e) {
    var target = $(e.target);
    if(target.is(modal) || target.is(close)) {
      modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
        modal.css('display', 'none');
        next();
      });
    }
  });

});
