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
      express.prop('checked', false);
      express.prop('disabled', true);
      express.parent().addClass('disabled');
    } else {
      express.removeAttr('disabled');
      express.parent().removeClass('disabled');
    }
    if (express.is(':checked')) {
      jsFrameworks.prop('checked', false);
      jsFrameworks.prop('disabled', true);
      jsFrameworks.parent().addClass('disabled');
    } else {
      jsFrameworks.removeAttr('disabled');
      jsFrameworks.parent().removeClass('disabled');
    }
    if (jsLibs.is(':checked')) {
      node.prop('checked', false);
      node.prop('disabled', true);
      node.parent().addClass('disabled');
    } else {
      node.removeAttr('disabled');
      node.parent().removeClass('disabled');
    }
    if (node.is(':checked')) {
      jsLibs.prop('checked', false);
      jsLibs.prop('disabled', true);
      jsLibs.parent().addClass('disabled');
    } else {
      jsLibs.removeAttr('disabled');
      jsLibs.parent().removeClass('disabled');
    }
  });
});


// Set div to display total cost
$('.activities').append('<div id="total"></div>')

// Set values to each activities
$('input[name="all"]').attr('value', 200);
$('input[name="js-frameworks"]').attr('value', 100);
$('input[name="js-libs"]').attr('value', 100);
$('input[name="express"]').attr('value', 100);
$('input[name="node"]').attr('value', 100);
$('input[name="build-tools"]').attr('value', 100);
$('input[name="npm"]').attr('value', 100);

// Display total cost of activities
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


// Set divs to display error messages
$('#cc-num').after('<div class="cc-error"></div>');
$('#zip').after('<div class="zip-error"></div>');
$('#cvv').after('<div class="cvv-error"></div>');

// Form validation
$(document).ready(function() {
  $('button[type="submit"]').click(function (e) {
    const name = $('#name').val();
    const email = $('#mail').val();
    const activities = $('input[type="checkbox"]')
    const creditNumber = $('#cc-num').val();
    const zip = $('#zip').val();
    const cvv = $('#cvv').val();
    const nameRegex = /^[a-zA-Z ]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const creditCardRegex = /^[0-9]{13,16}$/;
    const zipRegex = /^[0-9]{5}$/;
    const cvvRegex = /^[0-9]{3}$/;

    if (name.length === 0 || !nameRegex.test(name)) {
      $('#name').addClass('error');
      $('#name').attr("placeholder", "Please enter a name");
      $('label[for="name"]').addClass('error-tag');
      return false;
    } else {
      $('#name').removeClass('error');
      $('label[for="name"]').removeClass('error-tag');
    }
    if (email.length === 0 || !emailRegex.test(email)) {
      $('#mail').addClass('error');
      $('#mail').attr("placeholder", "Please enter an email adress");
      $('label[for="mail"]').addClass('error-tag');
      return false;
    } else {
      $('#mail').removeClass('error');
      $('label[for="mail"]').removeClass('error-tag');
    }
    if (!activities.is(':checked')) {
      $('#activities').addClass('error-tag');
      $('#total').html("please select at least one activity");
      return false;
    } else {
      $('#activities').removeClass('error-tag');
    }
    if (creditNumber.length === 0 || !creditCardRegex.test(creditNumber)) {
      $('#cc-num').addClass('error');
      $('label[for="cc-num"]').addClass('error-tag');
      $('.cc-error').html("Please enter a valid credit card number");
      return false;
    } else {
      $('#cc-num').removeClass('error');
      $('label[for="cc-num"]').removeClass('error-tag');
    }
    if (zip.length === 0 || !zipRegex.test(zip)) {
      $('#zip').addClass('error');
      $('label[for="zip"]').addClass('error-tag');
      $('.zip-error').html("Please enter a valid zip code");
      return false;
    } else {
      $('#zip').removeClass('error');
      $('label[for="zip"]').removeClass('error-tag');
    }
    if (cvv.length === 0 || !cvvRegex.test(cvv)) {
      $('#cvv').addClass('error');
      $('label[for="cvv"]').addClass('error-tag');
      $('.cvv-error').html("Please enter a valid cvv number");
      return false;
    } else {
      $('#cvv').removeClass('error');
      $('label[for="cvv"]').removeClass('error-tag');
    }
    return true;
  });
});
