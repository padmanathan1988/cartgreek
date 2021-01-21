$(document).ready(function(){ 
 getProduct();
 var count = 0;
 var output='';
 function getProduct()
 {
     $.ajax({
            type: 'POST',
            url: 'product/getProductList',
            data: '',
            dataType: 'json',
            contentType: false,
            cache: false,
            processData:false,
            beforeSend: function(){
               
                
            },
            success: function(response){
              
               
                
                $('.statusMsg').html('');
                if(response.status == 1){
                   
                  for (var product of response.product_details) 
  {
   
   count=product.product_id;
  var product_name=product.product_name;
  var product_price=product.product_price;
  var product_description=product.product_description;
            output += '<tr id="row_'+count+'">';
    output += '<td>'+product_name+'<input type="hidden" name="hidden_product_name[]" id="product_name'+count+'" class="prodcut_name" value="'+product_name+'" /></td>';
    output += '<td>'+product_price+'<input type="hidden" name="hidden_product_price[]" id="product_price'+count+'" class="prodcut_price" value="'+product_price+'" /></td>';
    output += '<td>'+product_description+'<input type="hidden" name="hidden_product_description[]" id="product_description'+count+'" class="prodcut_discription" value="'+product_description+'" /></td>';
    output += '<td><button type="button" name="view_details" class="btn btn-warning btn-xs view_details" id="'+count+'">View</button></td>';
    output += '<td><button type="button" name="remove_details" class="btn btn-danger btn-xs remove_details" id="'+count+'">Remove</button></td>';
    output += '</tr>';
    }
     $('#user_data').append(output);
                   
                    
                }
               
            }
        });
 }
 $('#user_dialog').dialog({
  autoOpen:false,
  width:400
 });

 $('#add').click(function(){
  $('#user_dialog').dialog('option', 'title', 'Add Data');
  $('#product_name').val('');
  $('#product_price').val('');
  $('#product_description').val('');
  $('#error_product_name').text('');
  $('#error_product_price').text('');
  $('#error_product_description').text('');
  $('#error_product_image').text('');
  $('#product_name').css('border-color', '');
  $('#product_price').css('border-color', '');
  $('#product_description').css('border-color', '');
  $('#save').text('Save');
  $('#user_dialog').dialog('open');
 });

 $('#save').click(function(){
  var error_first_name = '';
  var error_last_name = '';
  var product_name = '';
  var product_price = '';
  var product_description = '';
  if($('#product_name').val() == '' )
  {
   error_product_name = 'Product Name is required';
   $('#error_product_name').text(error_product_name);
   $('#product_name').css('border-color', '#cc0000');
   product_name = '';
  }
  else
  {
   error_product_name = '';
   $('#error_product_name').text(error_product_name);
   $('#product_name').css('border-color', '');
   product_name = $('#product_name').val();
  } 
  if($('#product_price').val() == '')
  {
   error_product_price = 'Product Price is required';
   $('#error_product_price').text(error_product_price);
   $('#product_price').css('border-color', '#cc0000');
   product_price = '';
  }
  else
  {
   error_product_price = '';
   $('#error_product_price').text(error_product_price);
   $('#product_price').css('border-color', '');
   product_price = $('#product_price').val();
  }
  if($('#product_description').val() == '')
  {
   error_product_description = 'Product Discription is required';
   $('#error_product_description').text(error_product_description);
   $('#product_description').css('border-color', '#cc0000');
   product_description = '';
  }
  else
  {
   error_product_description = '';
   $('#error_product_description').text(error_product_description);
   $('#product_description').css('border-color', '');
   product_description= $('#product_description').val();
  }
  if(error_product_name != '' || error_product_price != '' ||  error_product_description != '')
  {
   return false;
  }
  else
  {
   if($('#save').text() == 'Save')
   {
   $("#fupForm").on('submit', function(e){
        e.preventDefault();
       
        $.ajax({
            type: 'POST',
            url: 'product/productinsert',
            data: new FormData(this),
            dataType: 'json',
            contentType: false,
            cache: false,
            processData:false,
            beforeSend: function(){
                $('.submitBtn').attr("disabled","disabled");
                
            },
            success: function(response){
               // console.log(response);
                var output='';
                $('.statusMsg').html('');
                if(response.status == 1){
                    $('#fupForm')[0].reset();
            count = response.product_id ;        
            output += '<tr id="row_'+count+'">';
    output += '<td>'+product_name+' <input type="hidden" name="hidden_product_name[]" id="product_name'+count+'" class="prodcut_name" value="'+product_name+'" /></td>';
    output += '<td>'+product_price+'<input type="hidden" name="hidden_product_price[]" id="product_price'+count+'" class="prodcut_price" value="'+product_price+'" /></td>';
    output += '<td>'+product_description+'<input type="hidden" name="hidden_product_description[]" id="product_description'+count+'" class="prodcut_discription" value="'+product_description+'" /></td>';
    output += '<td><button type="button" name="view_details" class="btn btn-warning btn-xs view_details" id="'+count+'">View</button></td>';
    output += '<td><button type="button" name="remove_details" class="btn btn-danger btn-xs remove_details" id="'+count+'">Remove</button></td>';
    output += '</tr>';
     $('#user_data').append(output);
     
                    
     $('#action_alert').html('<p>'+response.message+'</p>');
     $('#action_alert').dialog('open');
                    
                }else{
                   $('#fupForm')[0].reset();
                    
     $('#action_alert').html('<p>'+response.message+'</p>');
     $('#action_alert').dialog('open');
                }
               
            }
        });
    });
    
   }
   else
   {
   
   $("#fupForm").on('submit', function(e){
        e.preventDefault();
       
        $.ajax({
            type: 'POST',
            url: 'product/productupdate',
            data: new FormData(this),
            dataType: 'json',
            contentType: false,
            cache: false,
            processData:false,
            beforeSend: function(){
                $('.submitBtn').attr("disabled","disabled");
                
            },
            success: function(response){
               // console.log(response);
                var output='';
                $('.statusMsg').html('');
                if(response.status == 1){
                    $('#fupForm')[0].reset();
            count = $('#product_id').val() ;        
           
    output += '<td>'+product_name+' <input type="hidden" name="hidden_product_name[]" id="product_name'+count+'" class="prodcut_name" value="'+product_name+'" /></td>';
    output += '<td>'+product_price+'<input type="hidden" name="hidden_product_price[]" id="product_price'+count+'" class="prodcut_price" value="'+product_price+'" /></td>';
    output += '<td>'+product_description+'<input type="hidden" name="hidden_product_description[]" id="product_description'+count+'" class="prodcut_discription" value="'+product_description+'" /></td>';
    output += '<td><button type="button" name="view_details" class="btn btn-warning btn-xs view_details" id="'+count+'">View</button></td>';
    output += '<td><button type="button" name="remove_details" class="btn btn-danger btn-xs remove_details" id="'+count+'">Remove</button></td>';
   
      var row_id = $('#product_id').val() ;  
       $('#row_'+row_id+'').html(output);
                     
     $('#action_alert').html('<p>'+response.message+'</p>');
     $('#action_alert').dialog('open');
                    
                }else{
                   $('#fupForm')[0].reset();
                   
     $('#action_alert').html('<p>'+response.message+'</p>');
     $('#action_alert').dialog('open');
                }
               
            }
        });
    });
   
   
   
   }

   $('#user_dialog').dialog('close');
  }
 });

 $(document).on('click', '.view_details', function(){
  var row_id = $(this).attr("id");
  
  var product_name = $('#product_name'+row_id+'').val();
  var product_price = $('#product_price'+row_id+'').val();
    var product_description = $('#product_description'+row_id+'').val();
    console.log(product_description);
  $('#product_name').val(product_name);
  $('#product_price').val(product_price);
  $('#product_description').val(product_description);
 $('#product_id').val(row_id);
  $('#save').text('Edit');
  $('#hidden_row_id').val(row_id);
  $('#user_dialog').dialog('option', 'title', 'Edit Data');
  $('#user_dialog').dialog('open');
  
  
  
 });

 $(document).on('click', '.remove_details', function(){
  var row_id = $(this).attr("id");
  if(confirm("Are you sure you want to remove this row data?"))
  {
   
   $.ajax({
            type: 'POST',
            url: 'product/productdelete',
            data: {product_id:row_id},
            dataType: 'json',
            contentType: false,
            cache: false,
            processData:false,
            beforeSend: function(){
                $('.submitBtn').attr("disabled","disabled");
                
            },
            success: function(response){
               // console.log(response);
                var output='';
                $('.statusMsg').html('');
                if(response.status == 1){
                    $('#fupForm')[0].reset();
            $('#row_'+row_id+'').remove();
                    
     $('#action_alert').html('<p>'+response.message+'</p>');
     $('#action_alert').dialog('open');
                    
                }else{
                   $('#fupForm')[0].reset();
                    
     $('#action_alert').html('<p>'+response.message+'</p>');
     $('#action_alert').dialog('open');
                }
               
            }
        });
    
   
  }
  else
  {
   return false;
  }
 });

 $('#action_alert').dialog({
  autoOpen:false
 });


 
});  