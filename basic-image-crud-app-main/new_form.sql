-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 26, 2024 at 10:27 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `newimg`
--

-- --------------------------------------------------------

--
-- Table structure for table `new_form`
--

CREATE TABLE `new_form` (
  `id` int(11) NOT NULL,
  `std_image` varchar(255) NOT NULL,
  `businessName` varchar(255) NOT NULL,
  `domainName` varchar(255) NOT NULL,
  `licenceKey` varchar(255) NOT NULL,
  `Copyrights` varchar(255) NOT NULL,
  `favicon` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `new_form`
--

INSERT INTO `new_form` (`id`, `std_image`, `businessName`, `domainName`, `licenceKey`, `Copyrights`, `favicon`) VALUES
(1, 'images/active voice.jpg', 'mm', 'mm', 'mm', 'aaa', 'icons/1_GvMdJd8HXMq2mmSCqDvcwA.gif'),
(2, 'images/active voice.jpg', 'mm', 'mm', 'mm', 'aaa', 'icons/'),
(3, 'images/active voice.jpg', 'mm', 'mm', 'mm', 'aaa', 'icons/'),
(4, 'images/active voice.jpg', 'mm', 'mm', 'mm', 'aaa', 'icons/'),
(5, 'images/active voice.jpg', 'mm', 'mm', 'mm', 'aaa', 'icons/');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `new_form`
--
ALTER TABLE `new_form`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `new_form`
--
ALTER TABLE `new_form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
