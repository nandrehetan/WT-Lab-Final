-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 13, 2023 at 07:26 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vit_results`
--

-- --------------------------------------------------------

--
-- Table structure for table `results`
--

CREATE TABLE `results` (
  `prn_no` varchar(10) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `mse_marks` decimal(10,2) DEFAULT NULL,
  `ese_marks` decimal(10,2) DEFAULT NULL,
  `max_marks_mse` decimal(10,2) DEFAULT NULL,
  `max_marks_ese` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `results`
--

INSERT INTO `results` (`prn_no`, `subject`, `mse_marks`, `ese_marks`, `max_marks_mse`, `max_marks_ese`) VALUES
('12220306', 'SDAM', '55.00', '77.00', '80.00', '80.00'),
('12220306', 'OOP', '45.00', '77.00', '80.00', '80.00'),
('12220306', 'JAVA', '79.00', '70.00', '80.00', '80.00'),
('12220306', 'DSA', '76.00', '66.00', '80.00', '80.00'),
('12220305', 'SDAM', '25.00', '66.00', '30.00', '70.00'),
('12220305', 'OOP', '20.00', '56.00', '30.00', '70.00'),
('12220305', 'DAA', '28.00', '66.00', '30.00', '70.00'),
('12220305', 'DAA', '29.00', '65.00', '30.00', '70.00'),
('12220305', 'SDAM', '26.00', '66.00', '30.00', '70.00'),
('12220305', 'OOP', '29.00', '65.00', '30.00', '70.00'),
('12220305', 'JAVA', '28.00', '66.00', '30.00', '70.00'),
('12220305', 'DAA', '25.00', '69.00', '30.00', '70.00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
