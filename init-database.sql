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

--
-- Zrzut danych tabeli `warriors`
--

INSERT INTO `warriors` (`id`, `name`, `power`, `defence`, `stamina`, `agility`, `wins`) VALUES
('6c89703c-f0ec-4684-96f8-d26449d4172c', 'Przemysław KOX Satro', 4, 2, 2, 2, 99),
('17e63783-af61-4547-a76b-a3eeea203496', 'Pablo Alwaro', 4, 1, 2, 3, 2),
('212e077c-5e23-40a0-8687-ab7672f3a701', 'Pan Doktor', 2, 5, 2, 1, 5),
('41c61df0-f0e8-47ed-93af-0a2a9368f86a', 'Michał Tornado Jeziorski', 7, 1, 1, 1, 0),
('aa2edd38-4be8-44dc-9123-49bcad7d5145', 'Ukarz Leń Kruzo', 5, 1, 3, 1, 0),
('bff0f9aa-ca95-474d-907a-e771769acf27', 'Jarek', 3, 2, 3, 2, 1),
('fd2aeb63-8ded-4be3-b285-e8e6d9625275', 'Arek', 4, 4, 1, 1, 0);

--
-- Indeksy dla zrzutów tabel
--

ALTER TABLE `warriors`
  ADD UNIQUE KEY `name` (`name`);
COMMIT;
