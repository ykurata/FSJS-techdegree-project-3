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
  })
})
