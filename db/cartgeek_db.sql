-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 21, 2021 at 09:05 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cartgeek_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `ci_sessions`
--

CREATE TABLE `ci_sessions` (
  `id` varchar(128) NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `timestamp` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `data` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ci_sessions`
--

INSERT INTO `ci_sessions` (`id`, `ip_address`, `timestamp`, `data`) VALUES
('oh97573fu4dsogcr3ubpaouodsgrrnjk', '::1', 1611250704, 0x5f5f63695f6c6173745f726567656e65726174657c693a313631313235303730343b),
('km3ortb29chu2svto9vkmcfmr6bs0bpg', '::1', 1611251104, 0x5f5f63695f6c6173745f726567656e65726174657c693a313631313235313130343b),
('tbobt9b891h5fr9v6uq9k977ai0klt02', '::1', 1611251559, 0x5f5f63695f6c6173745f726567656e65726174657c693a313631313235313535393b),
('vu2u0f4aikrg970h36peudd8husadesb', '::1', 1611252096, 0x5f5f63695f6c6173745f726567656e65726174657c693a313631313235323039363b),
('157m4uvmh6battqkil78vrdj6qcsolnl', '::1', 1611253254, 0x5f5f63695f6c6173745f726567656e65726174657c693a313631313235333235343b),
('saui7nbuda1ndl7i7h94bn7ahi9e6l8e', '::1', 1611253602, 0x5f5f63695f6c6173745f726567656e65726174657c693a313631313235333630323b),
('2p4eki1s2spvpb6pklr41e8g5hjvs7s5', '::1', 1611254115, 0x5f5f63695f6c6173745f726567656e65726174657c693a313631313235343131353b),
('itcsiqqnqtb4ic46c5q8ioka62s57cm8', '::1', 1611255067, 0x5f5f63695f6c6173745f726567656e65726174657c693a313631313235353036373b),
('ur4hd8ot8ul6m4hb66rd15mcthg8p5vv', '::1', 1611255501, 0x5f5f63695f6c6173745f726567656e65726174657c693a313631313235353530313b),
('k3p3va0n475bj4sjpfnnfc1t2qa5gjgn', '::1', 1611255873, 0x5f5f63695f6c6173745f726567656e65726174657c693a313631313235353837333b),
('dvab5ihj0ci1mbbjq4dpu3vmogg5n84c', '::1', 1611256260, 0x5f5f63695f6c6173745f726567656e65726174657c693a313631313235363236303b),
('vql4macg3lvrt66l872bootd9hehnr65', '::1', 1611256743, 0x5f5f63695f6c6173745f726567656e65726174657c693a313631313235363734333b),
('sk1u2nfjqqh5l9s39a8eb8busn5blr1l', '::1', 1611257097, 0x5f5f63695f6c6173745f726567656e65726174657c693a313631313235373039373b),
('ea4oftpkoisjja55nth9e8qjsdk2sl8q', '::1', 1611257431, 0x5f5f63695f6c6173745f726567656e65726174657c693a313631313235373433313b),
('p69ghfjmortm4nnvm4gjn68iqsor9kc7', '::1', 1611258645, 0x5f5f63695f6c6173745f726567656e65726174657c693a313631313235383634353b),
('vas5u1970j27fcov7ddv6e02fnfum65c', '::1', 1611258992, 0x5f5f63695f6c6173745f726567656e65726174657c693a313631313235383939323b),
('s3f0jqdh3gfs9lp5g784erguo0tdbkh1', '::1', 1611259337, 0x5f5f63695f6c6173745f726567656e65726174657c693a313631313235393333373b),
('jlicer6erkhv4vfmmb2cs09ut3gp7vo0', '::1', 1611259449, 0x5f5f63695f6c6173745f726567656e65726174657c693a313631313235393333373b);

-- --------------------------------------------------------

--
-- Table structure for table `mst_product`
--

CREATE TABLE `mst_product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_price` float NOT NULL,
  `product_description` text NOT NULL,
  `product_status` enum('0','1') NOT NULL DEFAULT '1',
  `product_update_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `product_created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mst_product`
--

INSERT INTO `mst_product` (`product_id`, `product_name`, `product_price`, `product_description`, `product_status`, `product_update_at`, `product_created_at`) VALUES
(1, 'product1', 6, 'testing', '1', '2021-01-21 20:04:09', '2021-01-21 19:55:44'),
(2, 'product2', 2, 'e', '1', '2021-01-21 19:56:48', '2021-01-21 19:56:48'),
(3, 'product3', 3, '3', '1', '2021-01-21 19:58:28', '2021-01-21 19:58:28'),
(4, 'product4', 4, '4', '1', '2021-01-21 20:00:01', '2021-01-21 20:00:01');

-- --------------------------------------------------------

--
-- Table structure for table `trans_product_image`
--

CREATE TABLE `trans_product_image` (
  `trans_product_image_id` int(11) NOT NULL,
  `product_id_fk` int(11) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `image_status` enum('0','1') NOT NULL DEFAULT '1',
  `product_update_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `product_created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `trans_product_image`
--

INSERT INTO `trans_product_image` (`trans_product_image_id`, `product_id_fk`, `image_path`, `image_status`, `product_update_at`, `product_created_at`) VALUES
(1, 1, 'assets/images/product_images/1611258944.png', '1', '2021-01-21 19:55:44', '2021-01-21 19:55:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ci_sessions`
--
ALTER TABLE `ci_sessions`
  ADD KEY `ci_sessions_timestamp` (`timestamp`);

--
-- Indexes for table `mst_product`
--
ALTER TABLE `mst_product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `trans_product_image`
--
ALTER TABLE `trans_product_image`
  ADD PRIMARY KEY (`trans_product_image_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mst_product`
--
ALTER TABLE `mst_product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `trans_product_image`
--
ALTER TABLE `trans_product_image`
  MODIFY `trans_product_image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
