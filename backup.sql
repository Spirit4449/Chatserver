-- MariaDB dump 10.19  Distrib 10.11.4-MariaDB, for debian-linux-gnu (aarch64)
--
-- Host: localhost    Database: classchat
-- ------------------------------------------------------
-- Server version	10.11.4-MariaDB-1~deb12u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chats`
--

DROP TABLE IF EXISTS `chats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chats` (
  `ChatID` int(11) NOT NULL AUTO_INCREMENT,
  `ChatName` varchar(255) DEFAULT NULL,
  `ChatIcon` varchar(255) DEFAULT NULL,
  `Settings` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`Settings`)),
  `DateCreated` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`ChatID`)
) ENGINE=InnoDB AUTO_INCREMENT=100088 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chats`
--

LOCK TABLES `chats` WRITE;
/*!40000 ALTER TABLE `chats` DISABLE KEYS */;
INSERT INTO `chats` VALUES
(100000,'APCSP','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 02:38:36'),
(100001,'APCSP','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 15:10:58'),
(100002,'a','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 15:16:28'),
(100003,'b','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 15:17:48'),
(100004,'b','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 15:18:34'),
(100005,'yoo','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 15:20:24'),
(100006,'b','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 15:21:14'),
(100007,'a','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 15:21:44'),
(100008,'a','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 15:23:46'),
(100009,'c','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 15:24:09'),
(100010,'c','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 15:24:09'),
(100011,'a','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 15:24:57'),
(100012,'a','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 15:25:26'),
(100013,'a','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 15:25:42'),
(100014,'c','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 15:27:36'),
(100015,'a','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 15:28:04'),
(100016,'ab','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 15:29:17'),
(100017,'a','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 15:34:21'),
(100018,'a','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 16:30:57'),
(100019,'b','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 16:38:56'),
(100020,'a','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 22:08:02'),
(100021,'ab','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 22:10:32'),
(100022,'ac','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 22:12:00'),
(100023,'a','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 22:12:27'),
(100024,'aaae','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 22:12:36'),
(100025,'f','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 22:36:36'),
(100026,'','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 22:40:06'),
(100027,'','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 22:40:08'),
(100028,'ok','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-21 22:55:05'),
(100029,'Pritesh Patel Join','./Profile Icons/blueProfileIcon.png',NULL,'2023-11-30 22:19:57'),
(100030,'ok','./Profile Icons/blueProfileIcon.png',NULL,'2023-12-01 13:21:17'),
(100031,'Random','./Profile Icons/blueProfileIcon.png',NULL,'2023-12-01 21:47:45'),
(100032,'Random','./Profile Icons/blueProfileIcon.png',NULL,'2023-12-01 21:47:49'),
(100033,'Random','./Profile Icons/blueProfileIcon.png',NULL,'2023-12-01 21:47:50'),
(100034,'','./Profile Icons/blueProfileIcon.png',NULL,'2023-12-05 01:12:26'),
(100035,'','./Profile Icons/blueProfileIcon.png',NULL,'2023-12-05 16:08:30'),
(100036,'adfs','./Profile Icons/blueProfileIcon.png',NULL,'2023-12-05 16:08:33'),
(100037,'','./Profile Icons/blueProfileIcon.png',NULL,'2023-12-05 21:56:30'),
(100038,'okok','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:44:08'),
(100039,'okok','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:44:08'),
(100040,'new chat','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:44:23'),
(100041,'saf','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:48:48'),
(100042,'saf','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:48:48'),
(100043,'alright','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:48:59'),
(100044,'Your Chat','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:51:50'),
(100045,'Your Chat','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:51:50'),
(100046,'asdf','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:52:26'),
(100047,'v','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:53:36'),
(100048,'v','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:53:36'),
(100049,'ew','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:55:37'),
(100050,'ew','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:55:37'),
(100051,'sadf','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:56:05'),
(100052,'sadf','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:56:05'),
(100053,'fafweafdasdawefawaefaewffaewfeaw','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:56:26'),
(100054,'fafweafdasdawefawaefaewffaewfeaw','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:56:26'),
(100055,'aw','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:57:51'),
(100056,'aw','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:57:51'),
(100057,'avsv','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:58:03'),
(100058,'avsv','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:58:03'),
(100059,'asb','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:58:39'),
(100060,'asb','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:58:39'),
(100061,'asbmountain','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:58:56'),
(100062,'asbmountain','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 22:58:56'),
(100063,'poop','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 23:00:58'),
(100064,'poop','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 23:00:58'),
(100065,'pp','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 23:02:29'),
(100066,'pp','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 23:02:29'),
(100067,'ppp','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 23:02:43'),
(100068,'ppp','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 23:02:43'),
(100069,'mmee','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 23:03:44'),
(100070,'mmee','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 23:03:44'),
(100071,'09','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 23:04:22'),
(100072,'09','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 23:04:22'),
(100073,'23','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 23:04:50'),
(100074,'23','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-16 23:04:50'),
(100075,'ok','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-17 00:21:41'),
(100076,'cat','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-17 00:23:43'),
(100077,'aav','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-17 00:25:42'),
(100078,'sadfsdfsdfsdf','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-17 00:26:32'),
(100079,'zzz','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-17 00:28:42'),
(100080,'created','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-17 00:29:30'),
(100081,'test','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-17 01:32:56'),
(100082,'overflow','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-17 01:33:33'),
(100083,'asdf','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-17 01:34:23'),
(100084,'more','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-17 01:44:03'),
(100085,'w','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-17 01:44:40'),
(100086,'asdf','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-17 02:41:10'),
(100087,'Lorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text logn','/dist/assets/Profile Icons/blueProfileIcon.png',NULL,'2024-02-17 03:15:57');
/*!40000 ALTER TABLE `chats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `MessageID` int(11) NOT NULL AUTO_INCREMENT,
  `ChatID` int(11) DEFAULT NULL,
  `UserID` int(11) DEFAULT NULL,
  `ProfileIcon` varchar(255) DEFAULT NULL,
  `Username` varchar(255) DEFAULT NULL,
  `Content` text DEFAULT NULL,
  `DateSent` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`MessageID`),
  KEY `ChatID` (`ChatID`),
  KEY `UserID` (`UserID`),
  CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`ChatID`) REFERENCES `chats` (`ChatID`),
  CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=1000286 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES
(1000250,100017,100000,'blueProfileIcon.png','Nischay Patel','hello\n','2/16/2024 at 9:40pm'),
(1000251,100019,100000,'blueProfileIcon.png','Nischay Patel','b\n','2/16/2024 at 9:41pm'),
(1000252,100055,100000,'blueProfileIcon.png','Nischay Patel','asf\n','2/16/2024 at 10:17pm'),
(1000253,100055,100000,'blueProfileIcon.png','Nischay Patel','asdf\n','2/16/2024 at 10:17pm'),
(1000254,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognv\n','2/16/2024 at 10:17pm'),
(1000255,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000256,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000257,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000258,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text lognv\n','2/16/2024 at 10:17pm'),
(1000259,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000260,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000261,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000262,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000263,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text lognLorem ipsum big text lognv\n','2/16/2024 at 10:17pm'),
(1000264,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000265,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000266,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000267,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000268,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000269,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000270,100017,100000,'blueProfileIcon.png','Nischay Patel','v\n','2/16/2024 at 10:17pm'),
(1000271,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000272,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000273,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000274,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000275,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000276,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000277,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000278,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000279,100017,100000,'blueProfileIcon.png','Nischay Patel','v\n','2/16/2024 at 10:17pm'),
(1000280,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000281,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000282,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000283,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text logn\n','2/16/2024 at 10:17pm'),
(1000284,100017,100000,'blueProfileIcon.png','Nischay Patel','v\n','2/16/2024 at 10:17pm'),
(1000285,100017,100000,'blueProfileIcon.png','Nischay Patel','Lorem ipsum big text lognLorem ipsum big text lognLorem ipsum big text logn\n','2/16/2024 at 10:17pm');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userchats`
--

DROP TABLE IF EXISTS `userchats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userchats` (
  `UserID` int(11) NOT NULL,
  `ChatID` int(11) NOT NULL,
  PRIMARY KEY (`UserID`,`ChatID`),
  KEY `ChatID` (`ChatID`),
  CONSTRAINT `userchats_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`),
  CONSTRAINT `userchats_ibfk_2` FOREIGN KEY (`ChatID`) REFERENCES `chats` (`ChatID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userchats`
--

LOCK TABLES `userchats` WRITE;
/*!40000 ALTER TABLE `userchats` DISABLE KEYS */;
INSERT INTO `userchats` VALUES
(100000,100017),
(100000,100018),
(100000,100019),
(100000,100025),
(100000,100026),
(100000,100027),
(100000,100028),
(100000,100029),
(100000,100034),
(100000,100037),
(100000,100038),
(100000,100039),
(100000,100040),
(100000,100041),
(100000,100042),
(100000,100043),
(100000,100044),
(100000,100045),
(100000,100046),
(100000,100047),
(100000,100048),
(100000,100049),
(100000,100050),
(100000,100051),
(100000,100052),
(100000,100053),
(100000,100054),
(100000,100055),
(100000,100056),
(100000,100057),
(100000,100058),
(100000,100059),
(100000,100060),
(100000,100061),
(100000,100062),
(100000,100063),
(100000,100064),
(100000,100065),
(100000,100066),
(100000,100067),
(100000,100068),
(100000,100069),
(100000,100070),
(100000,100071),
(100000,100072),
(100000,100073),
(100000,100074),
(100000,100075),
(100000,100076),
(100000,100077),
(100000,100078),
(100000,100079),
(100000,100080),
(100000,100081),
(100000,100082),
(100000,100083),
(100000,100084),
(100000,100085),
(100000,100086),
(100000,100087),
(100014,100021),
(100015,100022),
(100015,100023),
(100015,100024),
(100016,100030),
(100017,100031),
(100017,100032),
(100017,100033),
(100018,100035),
(100018,100036);
/*!40000 ALTER TABLE `userchats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `UserID` int(11) NOT NULL AUTO_INCREMENT,
  `Email` varchar(255) NOT NULL,
  `Username` varchar(20) DEFAULT NULL,
  `Password` varchar(255) NOT NULL,
  `ProfileIcon` varchar(255) DEFAULT NULL,
  `Settings` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`Settings`)),
  `DateJoined` timestamp NULL DEFAULT current_timestamp(),
  `MCAccess` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`UserID`),
  UNIQUE KEY `Email` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=100030 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(100000,'nischayp510@gmail.com','Nischay Patel','$2b$10$nk00BDkbXCDDmM604HXbfuTNMfkg5q6bHEajC0/HTsKpy/JDQMKBm','blueProfileIcon.png',NULL,'2023-11-21 02:37:53','OXDPbllFZB7tRT20g9RaDRltZG307E'),
(100001,'priteshp108@gmail.com','spacesurfer','$2b$10$1jM2YFMkhWI8AATqb28X7OjSc.XGuY5P7W4vMUgQm9PMn9lvN4xve','blueProfileIcon.png',NULL,'2023-11-21 02:46:11',NULL),
(100002,'nischaydas510@gmail.com','Spirit','$2b$10$JWrOtxYOo9TBXS/0rJmTO.mdp7igb.sDGGOf3o2B7LvBNyYEtXcUq','blueProfileIcon.png',NULL,'2023-11-21 21:45:41',NULL),
(100004,'nischaydas510@gmail.coma','Spirit','$2b$10$gIYADsUS1W7eG6tBZ/w06uUy7M8/cOCtnwE/aSkxeCry4jyA6H/jO','blueProfileIcon.png',NULL,'2023-11-21 21:46:08',NULL),
(100007,'nischayp510@gmail.coma','a','$2b$10$vg76CFTgXGBN0tD0rjg8y.QJ8btR.ujq5L4Cf1gEDk9MLToineVIC','blueProfileIcon.png',NULL,'2023-11-21 21:51:17',NULL),
(100009,'nischayp510@gmail.comaa','Spirit','$2b$10$ld2wiGa.RVtrAJUc61shOOteAXs08oWYJ7IcFfXgYuVTfEAZlNV6e','blueProfileIcon.png',NULL,'2023-11-21 21:58:42',NULL),
(100010,'nischayp510@gmail.comaaa','Spirit','$2b$10$JWQZcMhgBk.OoRuCCr2p0.a5OmJXtukvqsaarfi2u10F.FguLf00W','blueProfileIcon.png',NULL,'2023-11-21 22:00:18',NULL),
(100011,'nischayp510@gmail.comaaaa','Spirit','$2b$10$OuH9AgX.TJXYphgPx4YsyekDRnmTHvbLWy3OGKeGecAh5UwGoNLy2','blueProfileIcon.png',NULL,'2023-11-21 22:02:20',NULL),
(100012,'nischayp510@gmail.comaaaaa','Spirit','$2b$10$Zw/RP6VsrzyuLM1zJLuupObjHSp6hLQCWavxwFH7ASL0Bo9vuoYB6','blueProfileIcon.png',NULL,'2023-11-21 22:03:22',NULL),
(100013,'nischayp510@gmail.comb','b','$2b$10$M0mcspSyBfUQgHVHrDB4t.jcYpv1ghujHTdnLmUdAM9i3d184lcWC','blueProfileIcon.png',NULL,'2023-11-21 22:07:33',NULL),
(100014,'nischaydas510@gmail.comab','b','$2b$10$gBEu8eyZy257eXbPrNjrvepqMSX/vD73va8lXYHWHRLAvpbcTjDKW','blueProfileIcon.png',NULL,'2023-11-21 22:10:23',NULL),
(100015,'nischaydas510@gmail.comae','e','$2b$10$70x4ETRble.1hZn98f73UeASk0OenWrMsrW9Gf8xzz2lcY.1CMNg.','blueProfileIcon.png',NULL,'2023-11-21 22:11:54',NULL),
(100016,'publicaccount@gmail.com','Anonymous','$2b$10$6/CqAHGIMr7RlFQ61f62A.v.wrgEijGmBnj.Mqt3Ne7ktpsHJgC02','blueProfileIcon.png',NULL,'2023-12-01 13:20:38',NULL),
(100017,'amrutsevak@gmail.com','amrutsevak@gmail.com','$2b$10$p5yL6pPKg9.IHFN9W/SRRup6ipiEF3OcfpmTfH1UEjr7cNMatnDNS','blueProfileIcon.png',NULL,'2023-12-01 21:38:33',NULL),
(100018,'shanechai6@gmail.com','shane','$2b$10$yIl31UNCN7p/Kvm4Td7pDu/uukIEun9Pvtnfa.jNMripnAvTY9JKS','blueProfileIcon.png',NULL,'2023-12-05 16:07:58',NULL),
(100019,'nochats@gmail.com','No Chats','$2b$10$v0lijmkHUFnMyBnBu0GTEu734xxkcSpeyWy65FNmSyTDcRGxECjkC','blueProfileIcon.png',NULL,'2023-12-05 21:50:09',NULL),
(100020,'nischaydas510@gmail.comt','t','$2b$10$HB3x22SlicrVaPSdoM3veOsPD7LX9GSxQ2ZqDZV4CSEp.LvL8HltC','blueProfileIcon.png',NULL,'2023-12-05 21:52:29',NULL),
(100021,'whatsup@gmail.com','a a','$2b$10$aDn/Ultm8X2Kh7VXUHj3B.OOyQ8jAAxqVrbLAgjfzzOD5D.Cw5f6y','blueProfileIcon.png',NULL,'2023-12-05 21:53:10',NULL),
(100022,'computer.georgemanole@gmail.com','Sheep','$2b$10$JA2b.IDQks/h5q19K.DeF.PplQhyK7gR43O2ohXJNtwDx/lPiiyi2','blueProfileIcon.png',NULL,'2023-12-11 15:11:48',NULL),
(100023,'test@gmail.com','test','$2b$10$3nnN9U2QhULW3MaBqxfe0.Ij64LBt72RwTAK9Ubeax3.axTHZP3mS','blueProfileIcon.png',NULL,'2023-12-16 00:58:15',NULL),
(100024,'nischayp510@gmail.com1','1','$2b$10$LU0Y8mmA3rrga1oxla0k0ew/W5hy4LqmJZowS6onI2jltcitiAQc2','blueProfileIcon.png',NULL,'2023-12-16 01:06:44',NULL),
(100025,'nischayp510@gmail.com2','2','$2b$10$ndKmlWwp8y7asp58yinXs.4aIPFpSvaOr6ZoLJvW6kNicN6phSq0S','blueProfileIcon.png',NULL,'2023-12-16 01:07:20',NULL),
(100026,'arthshah@outlook.com','NotPikachu','$2b$10$OjDUPZoZY3mzsEipHvWt0.oz56UK0dVZ3HCSu90Bq/NGtV1iDFKWu','blueProfileIcon.png',NULL,'2024-01-23 16:05:59',NULL),
(100027,'nischayp510@gmail.comae','b','$2b$10$8pHuBSojL5tp9kIp6Ou3oeJeaAhAMbrHj/cEBbmZ8HyqqEVl1YKYy','purpleProfileIcon.png',NULL,'2024-02-15 21:29:32',NULL),
(100028,'nischaydas510@gmail.combb','b','$2b$10$aRBhfRbKAt8gl5.Q/aL1L.O5a310OXFo4ZMuBcY5UxrNMXcPtZQ8q','purpleProfileIcon.png',NULL,'2024-02-15 21:30:23',NULL),
(100029,'test@gmail.com2','2','$2b$10$ubfBA0JTel4tyTU3obbOMuhBcUuVW46jZZAUnQ6E7y1tFM6HW.7x2','greenProfileIcon.png',NULL,'2024-02-15 21:31:04',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-17 11:13:56
