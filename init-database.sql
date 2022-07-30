-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Wersja serwera: 10.2.6-MariaDB
-- Wersja PHP: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Baza danych: `arena_f2f`
--

CREATE TABLE `warriors` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT uuid(),
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT uuid(),
  `power` tinyint(2) NOT NULL,
  `defence` tinyint(2) NOT NULL,
  `stamina` tinyint(2) NOT NULL,
  `agility` tinyint(2) NOT NULL,
  `wins` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `warriors`
  ADD UNIQUE KEY `name` (`name`);
COMMIT;
