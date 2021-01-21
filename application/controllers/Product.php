<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Product extends CI_Controller {

    function __construct() {
        parent::__construct();
        //$this->input->is_ajax_request()
        $this->load->helper('url');
        $this->load->library('session');
       $this->load->model('Product_model');
       
    }
	public function index()
	{
		$this->load->view('product_view');
	}
      public function getProductList()
      {
          $response['product_details']= $this->Product_model->getRecords('mst_product');
            $response['status'] = 1; 
                $response['message'] = 'Successfull Records'; 
                echo json_encode($response);
      }
      public function productinsert()
      {
          $product_name=$this->input->post('product_name');
          $product_price=$this->input->post('product_price');
          $product_discription=$this->input->post('product_description');
           if($product_name!='' && $product_price!='' && $product_discription!=''){
          $product_details=array('product_name'=>$product_name,'product_price'=>$product_price,'product_description'=>$product_discription);
         $product_id= $this->Product_model->insertRow('mst_product',$product_details);
       
         
         if(isset($_FILES['product_image']['name']))
for ($i = 0; $i < count($_FILES['product_image']['name']); $i++) {
  if($_FILES['product_image']['name'][$i]!='')
  {
      $imagePath='assets/images/product_images';
  $config['upload_path'] = $imagePath;
  $config['allowed_types'] = 'gif|jpg|png|jpeg';
  $config['file_name'] = time();
  $config['max_size'] = '10000000';
  $this->load->library('upload');
  $this->upload->initialize($config);
  $_FILES['product_file']['name'] = $_FILES['product_image']['name'][$i];
  $_FILES['product_file']['type'] = $_FILES['product_image']['type'][$i];
  $_FILES['product_file']['tmp_name'] = $_FILES['product_image']['tmp_name'][$i];
 $_FILES['product_file']['size'] = $_FILES['product_image']['size'][$i];
  $upload_dir = $config['upload_path'];
  if (!$this->upload->do_upload('product_file')) {
      $error = array('error' => $this->upload->display_errors());
  } else {
       $image_data = $this->upload->data();
      $image_name = $imagePath.'/'.$image_data['file_name'];
      $product_image=array('product_id_fk'=>$product_id,'image_path'=>$image_name);
       $product_image= $this->Product_model->insertRow('trans_product_image',$product_image);
  }
  }
  }


         $response['product_id']=$product_id;
 
         $response['status'] = 1; 
                $response['message'] = 'Submitted successfully!'; 
           }
           else
           {
               $response['product_id']='';
        
         $response['status'] = 0; 
                $response['message'] = 'Please Enter Input';
           }
                echo json_encode($response);
      }
      public function productupdate()
      {
          $product_name=$this->input->post('product_name');
          $product_price=$this->input->post('product_price');
          $product_discription=$this->input->post('product_description');
          $product_id=$this->input->post('product_id');
          if($product_id!='' && $product_name!='' && $product_price!='' && $product_discription!=''){
          $product_details=array('product_name'=>$product_name,'product_price'=>$product_price,'product_description'=>$product_discription);
         $product_id= $this->Product_model->updateRow('mst_product',$product_details,array('product_id'=>$product_id));
         $response['product_id']=$product_id;
        
         $response['status'] = 1; 
                $response['message'] = 'Update successfully!'; 
          }
          else
          {
              $response['product_id']='';
         
         $response['status'] = 0; 
                $response['message'] = 'Please Enter Input Details'; 
          }
                echo json_encode($response);
      }
      Public function productdelete()
      {
           $product_id=$this->input->post('product_id');
          if($product_id!='' ){
              $this->Product_model->deleteRows('mst_product_details',array('product_id'=>$product_id));
              $response['status'] = 1; 
                $response['message'] = 'Delete successfully!'; 
          }
          else
          {
              
         
         $response['status'] = 0; 
                $response['message'] = 'Please Enter Input Details'; 
          }
                echo json_encode($response);
      }
}
