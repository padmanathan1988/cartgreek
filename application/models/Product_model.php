<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Product_model
 *
 * @author DELL
 */

defined('BASEPATH') OR exit('No direct script access allowed');
class Product_model extends CI_Model {

    public function getRecords($table_name)
    {
         $this->db->from($table_name); 
        $query = $this->db->get();
        return $query->result_array();
    }
    public function insertRow($table_name,$insert_data)
    {
        $this->db->insert($table_name,$insert_data);
        return $this->db->insert_id();
    }
     public function updateRow($table_name, $update_data, $condition) {
          $this->db->where($condition);
           $this->db->update($table_name, $update_data);
           return 1;
     }
      public function deleteRows( $table_name, $condition) {
        $this->db->where($condition);
                    $query = $this->db->delete($table_name);
                    return 1;
        }
}
