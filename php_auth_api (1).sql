-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 07 jan. 2022 à 17:11
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `php_auth_api`
--

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'test', 'test@test.cc', '$2y$10$zZWoAfk/KuOVoGbufEdzz.NVSoN.TOHkXOuqLtBQcnzCy4BQ.Dcc.'),
(2, 'merieme', 'merieme@gmail.com', '$2y$10$ESvjxiUvAqC48lvYyW.d4eHxhu.dSVsZRLaOaxhEvdrIY5AT7py7C'),
(3, 'kaoutar', 'kaoutar.izi@gmail.com', '$2y$10$FrG/EbB1wjcagA9gfzeiweArJJr8Of614yrABlKq1SDHRSeum2o.m'),
(4, 'test', 'test@gmail.com', '$2y$10$zS4Im70v2qoSBciSIMsSUOcdqIlsgHh4EyYtOOfTmFiRVhl5mAZge'),
(5, 'fatima', 'fatima@gmail.com', '$2y$10$bsE8EvhWlvs3n5UKfEjpXuLdMxey.B6h1IzDi4tqCJ2s3snQEnCZu'),
(6, 'name', 'name@gmail.com', '$2y$10$A1kco6lhoprOE4tKRoxirONT1eB6lCoOxcuPIeVJxr2xqiGbkr15u');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
