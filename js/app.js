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

$(document).ready(function() {
  $('input[type=checkbox]').change(function() {
    var total = 0;
    $('input[type=checkbox]:checked').each(function() {
      total += parseInt($(this).val());
    });
    $('#total').html('Total: $' + total);
  });
});


// Select Credit Card by default
function selectCredit() {
  // Disable to select the "Select Payment Method"
  $("select option[value='select_method']").attr('disabled', true);

  $("select option[value='credit card']").attr("selected", true);
  $("#credit-card").show();
  $("#paypal").hide();
  $("#bitcoin").hide();
}
selectCredit();


// Show and hide payment info
$(document).ready(function() {
  $("#payment").change(function() {
    if($(this).val() === "credit card") {
      $("#credit-card").show();
      $("#paypal").hide();
      $("#bitcoin").hide();
    } else if ($(this).val() === "paypal") {
      $("#paypal").show();
      $("#credit-card").hide();
      $("#bitcoin").hide();
    } else {
      $("#bitcoin").show();
      $("#credit-card").hide();
      $("#paypal").hide();
    }
  });
});


// Form validation
$(document).ready(function() {
  $('button[type="submit"]').click(function(e) {
    e.preventDefault();
    const name = $('#name').val();
    const email = $('#mail').val();
    const activities = $('input[type="checkbox"]')
    const creditNumber = $('#cc-num').val();
    const zip = $('#zip').val();
    const cvv = $('#cvv').val();
    const nameRegex = /^[a-zA-Z ]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    const creditCardRegex = /^[1-9][0-9]{12,15}$/;
    const zipRegex = /^[0-9]{5}$/;
    const cvvRegex = /^[0-9]{3}$/;

    if (name.length === 0 || !nameRegex.test(name)) {
      $('#name').addClass('error');
      $('label[for="name"]').addClass('error-tag');
    }
    if (email.length === 0 || !emailRegex.test(email)) {
      $('#mail').addClass('error');
      $('label[for="mail"]').addClass('error-tag');
    }
    if (!activities.is(':checked')) {
      $('#activities').addClass('error-tag');
    }
    if (creditNumber.length === 0 || !creditCardRegex.test(creditNumber)) {
      $('#cc-num').addClass('error');
      $('label[for="cc-num"]').addClass('error-tag');
    }
    if (zip.length === 0 || !zipRegex.test(zip)) {
      $('#zip').addClass('error');
      $('label[for="zip"]').addClass('error-tag');
    }
    if (cvv.length === 0 || !cvvRegex.test(cvv)) {
      $('#cvv').addClass('error');
      $('label[for="cvv"]').addClass('error-tag');
    }
  });
});
