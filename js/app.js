// Focus on the first text field
$('#name').focus();


// "Your Job Role" field reveals when the "Other" option is selected
$(document).ready(function() {
 $("#title").change(function() {
  if($(this).val() == "other") {
   $("#job").show();
  } else {
   $("#job").hide();
  }
 });
 $("#job").hide();
});


// Only display the color options that match the design selected in the "Design" menu.
$(document).ready(function() {
  $('#design').change(function() {
    if ($(this).val() === "js puns") {
      $('#color').children('option').hide();
      $('#color').children("option[value='cornflowerblue']").show();
      $('#color').children("option[value='darkslategrey']").show();
      $('#color').children("option[value='gold']").show();
    } else if ($(this).val() === "heart js") {
      $('#color').children('option').hide();
      $('#color').children("option[value='tomato']").show();
      $('#color').children("option[value='steelblue']").show();
      $('#color').children("option[value='dimgrey']").show();
    } else {
      $('#color').children('option').show();
    }
  });
});


// ”Register for Activities” section
const jsFrameworks = $('input[name="js-frameworks"]');
const express = $('input[name="express"]');
const jsLibs = $('input[name="js-libs"]');
const node = $('input[name="node"]');

$(document).ready(function() {
  $('input').on('click', function() {
    if (jsFrameworks.is(':checked')) {
      $('input[name="express"]').prop('checked', false);
      $('input[name="express"]').prop('disabled', true);
    } else {
      $('input[name="express"]').removeAttr('disabled');
    }
  });
});

$(document).ready(function() {
  $('input').on('click', function() {
    if (express.is(':checked')) {
      $('input[name="js-frameworks"]').prop('checked', false);
      $('input[name="js-frameworks"]').prop('disabled', true);
    } else {
      $('input[name="js-frameworks"]').removeAttr('disabled');
    }
  });
});

$(document).ready(function() {
  $('input').on('click', function() {
    if (jsLibs.is(':checked')) {
      $('input[name="node"]').prop('checked', false);
      $('input[name="node"]').prop('disabled', true);
    } else {
      $('input[name="node"]').removeAttr('disabled');
    }
  });
});

$(document).ready(function() {
  $('input').on('click', function() {
    if (node.is(':checked')) {
      $('input[name="js-libs"]').prop('checked', false);
      $('input[name="js-libs"]').prop('disabled', true);
    } else {
      $('input[name="js-libs"]').removeAttr('disabled');
    }
  });
});

// Display total cost of activities
$('.activities').append('<div id="total"></div>')

$('input[type=checkbox]').change(function() {
  var total = 0;
  $('input[type=checkbox]:checked').each(function() {
    total += parseInt($(this).val());
  });
  $('#total').html('<p>Total: $' + total + '</p>');
});
