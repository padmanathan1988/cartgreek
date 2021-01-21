

<html>  
    <head>  
        <title>Product List</title>  
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    </head>  
    <body>  
        <div class="container">
   <br />
   
   <h3 align="center">Product List</a></h3><br />
   <br />
   <br />
   <div align="right" style="margin-bottom:5px;">
    <button type="button" name="add" id="add" class="btn btn-success btn-xs">Add</button>
   </div>
   <br />
  
    <div class="table-responsive">
     <table class="table table-striped table-bordered" id="user_data">
      <tr>
<!--       <th>Product Id</th>-->
       <th>Product Name</th>
       <th>Product Price</th>
       <th>Product Description</th>
       <th>Details</th>
       <th>Remove</th>
      </tr>
     </table>
    </div>
    
  

   <br />
  </div>
        
  <div id="user_dialog" title="Add Product Data">
    <form id="fupForm" enctype="multipart/form-data">
      <div class="form-group">
    <label>Enter Product Name</label>
    <input type="hidden"  name="product_id" id="product_id"  />
    <input type="text" required="" name="product_name" id="product_name" class="form-control" />
    <span id="error_product_name" class="text-danger"></span>
   </div>
   <div class="form-group">
    <label>Enter Product Price</label>
    <input type="number" required="" name="product_price" id="product_price" class="form-control" />
    <span id="error_product_price" class="text-danger"></span>
   </div>
      <div class="form-group">
    <label>Enter Product Description</label>
    <textarea  class="form-control" name="product_description" id="product_description"></textarea>
    <span id="error_product_description" class="text-danger"></span>
   </div>
      <div class="form-group">
            <label for="file">Files</label>
            <input type="file" class="form-control" id="file" name="product_image[]" multiple />
             <span id="error_product_image" class="text-danger"></span>
        </div>
   <div class="form-group" align="center">
    <input type="hidden" name="row_id" id="hidden_row_id" />
    <button type="submit" name="save" id="save" class="btn btn-info">Save</button>
   </div>
  </div>
</form>
  <div id="action_alert" title="Action">

  </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" ></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" ></script>
 <script src="<?php echo base_url('assets/js/app.js') ?>"></script>
    </body>  
</html> 

