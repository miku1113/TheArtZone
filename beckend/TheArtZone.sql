-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 18, 2024 at 12:00 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `TheArtZone`
--

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `id` int(11) NOT NULL,
  `class` varchar(50) NOT NULL,
  `description` varchar(300) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`id`, `class`, `description`, `image`) VALUES
(1, 'MUSIC', 'An art of sound in time that expresses ideas and emotions in significant forms through the elements of rhythm, melody, harmony, and color', 'MUSIC.jpg'),
(2, 'DANCE', 'Dance is a form of creative expression through physical movement that includes rhythmic movements that accompany music.', 'dance-icon.jpg'),
(3, 'VOKAL', 'Vokal is India\'s Vernacular Question and Answers platform in Indian Languages', 'vokal.jpg'),
(4, 'KARATE', 'Karate is a Japanese martial art whose physical aspects seek the development of defensive and counterattacking body movements', 'karate-icon.jpg'),
(5, 'BODY FITNESS', 'Physical fitness refers to the ability of your body systems to work together efficiently to allow you to be healthy and perform activities of daily living.', 'fitness-icon.jpg'),
(6, 'DRAWING & PAINTING', 'The primary drawing definition is a visual depiction made using tools such as pen or pencil. ', 'drawing-icon.jpg'),
(7, 'MAHENDI', 'Mehndi (also called Mehandi) is the traditional art of painting the hands, feet or body with a paste made from the powdered, dried leaves of the henna plant ', 'mahendi.jpg'),
(8, 'ART TEACHER TRANING', 'The course features a curriculum that blends theoretical modules with hands-on studio experiences. ', 'art-icon.jpg'),
(9, 'HAND WRITING ART', 'Writing a letter in one\'s own hand can be an artistic act. Handwriting animates paper. The bold flairs of calligraphic script shout for attention, while elegant flourishes of cursive sashay across the page.', 'handwriting.jpg'),
(10, 'GARBA', 'Garba is a dance that honors, worships, and celebrates the feminine form of divinity.', 'garba-icon.jpg'),
(11, ' EVENT PLANNING', 'Manage the event planning process. Event organizers work closely with their clients during the planning process to manage every aspect of the event. ', 'event-icon.jpg'),
(12, 'BEAUTY PARLOUR', 'A beauty salon is an establishment that offers a variety of cosmetic treatments and cosmetic services for men and women. ', 'beauty_parlour-icon.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `event` varchar(200) NOT NULL,
  `image` varchar(200) NOT NULL,
  `category` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE `photos` (
  `id` int(11) NOT NULL,
  `class_id` int(11) NOT NULL,
  `image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `photos`
--

INSERT INTO `photos` (`id`, `class_id`, `image`) VALUES
(1, 6, 'art1.jpeg'),
(2, 6, 'art2.jpeg'),
(3, 6, 'art3.jpeg'),
(4, 6, 'art4.jpeg'),
(5, 6, 'art5.jpeg'),
(6, 6, 'art6.jpeg'),
(7, 6, 'art7.jpeg'),
(8, 6, 'art8.jpeg'),
(9, 6, 'art9.jpeg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `classes`
--
ALTER TABLE `classes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
