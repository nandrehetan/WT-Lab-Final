-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2024 at 09:33 PM
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
-- Database: `clubnew`
--

-- --------------------------------------------------------

--
-- Table structure for table `admininfo`
--

CREATE TABLE `admininfo` (
  `Username_Admin` varchar(225) NOT NULL,
  `Password_Admin` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admininfo`
--

INSERT INTO `admininfo` (`Username_Admin`, `Password_Admin`) VALUES
('Admin', '123');

-- --------------------------------------------------------

--
-- Table structure for table `complaint_v2`
--

CREATE TABLE `complaint_v2` (
  `User` varchar(255) NOT NULL,
  `Complaint` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `complaint_v2`
--

INSERT INTO `complaint_v2` (`User`, `Complaint`) VALUES
('Vishal', 'OKOK');

-- --------------------------------------------------------

--
-- Table structure for table `studentinfo`
--

CREATE TABLE `studentinfo` (
  `prn` int(225) NOT NULL,
  `pass` varchar(225) NOT NULL,
  `stud_name` varchar(225) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `avatar` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studentinfo`
--

INSERT INTO `studentinfo` (`prn`, `pass`, `stud_name`, `phone`, `email`, `avatar`) VALUES
(12220012, '123', 'Arman', 9022514562, 'arman@vit.edu', 0x61637469766520766f6963652e6a7067),
(12220021, '123456', 'Vishal ', 9022517871, 'vp0072003@gmail.com', 0x50686f746f2e6a7067);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `studentinfo`
--
ALTER TABLE `studentinfo`
  ADD PRIMARY KEY (`prn`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
