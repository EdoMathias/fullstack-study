CREATE DATABASE  IF NOT EXISTS `elden-trips` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `elden-trips`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: elden-trips
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `userId` int NOT NULL,
  `vacationId` int NOT NULL,
  KEY `usersIds_idx` (`userId`),
  KEY `vacationsIds_idx` (`vacationId`),
  CONSTRAINT `usersIds` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `vacationsIds` FOREIGN KEY (`vacationId`) REFERENCES `vacations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (4,35),(3,45),(4,45),(3,36),(4,37);
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin'),(2,'User');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(256) NOT NULL,
  `roleId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usersRoles_idx` (`roleId`),
  CONSTRAINT `usersRoles` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Elden','Lord','elden.lord@gmail.com','6153460c7bfa28d98c470f62abc540aebad766c80f434f60bdfefdee85ddca9e66969ba6d873a99fc5a5590e273e1ed9d0b256bd5336b26073374ef090febc50',1),(3,'Edo','Mathias','edo.mathias@gmail.com','58ef0a649965f579e81c5cdea5a2653e43744e5660a42bec55176429559450f92071c27a8ebedc12a47ecb7dc9f6330a71083a4e724e36e8e80d8e99c231c59d',2),(4,'Guest','Guest','Guest@gmail.com','c04a256cf77f8cd4a5dce5429a523b09596ca06944e307ed2980e090eae14981808e423002cbb305edcf909787f69df217787db3e648fde428a3b4d88501c3b1',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vacations`
--

DROP TABLE IF EXISTS `vacations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `destination` varchar(45) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `price` int NOT NULL,
  `imageName` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacations`
--

LOCK TABLES `vacations` WRITE;
/*!40000 ALTER TABLE `vacations` DISABLE KEYS */;
INSERT INTO `vacations` VALUES (35,'Limgrave','Limgrave is a lush, expansive section of the Tenebrae Demesne. Golden trees and tall grass and bushes provide plenty of sustenance for the local wildlife, that features boars, sheep, goat and rodents in addition to flying creatures such as eagles and owls. More sinister and aggressive wildlife also exists, and those venturing forth should be prepared to combat them.','2024-04-11','2024-04-18',299,'93783060-963a-4c73-8aed-71824cc104bb.jpg'),(36,'Caelid','Caelid, known as the locale of the last battle between General Radahn and Malenia, Blade of Miquella, is a vast land consummately marred by scarlet rot.','2024-04-14','2024-04-16',499,'5dcfc3f5-f28c-48e2-8f68-8dd5a1ca8498.jpg'),(37,'Weeping Peninsula','The peninsula, to Limgrave\'s south, is named for its unceasing rainfall, redolent of lament.','2024-04-22','2024-04-24',199,'6f793ab6-85de-4308-8727-e83b6b122bce.jpeg'),(38,'Liurnia of the Lakes','With its shallow waters and vast wetlands, the region of Liurnia is beset with the gradual sinking of most of its landmass. With its forests perpetually blanketed in fog, eerie sounds of bells can be heard in the distance.','2024-04-25','2024-04-27',199,'5813e922-56c8-47b3-9962-9a400e4bf105.jpeg'),(39,'Dragonbarrow','The dragons that escaped the scarlet rot made nest of the plateau to Caelid\'s north. Thus it was named \"Dragonbarrow,\" and none dare to enter.','2024-05-09','2024-05-11',899,'db504aa4-8c4e-4626-9900-779c83369e33.jpeg'),(40,'Altus Plateau','Altus Plateau is a lush and verdant land, once over-flowing with the bounty of the Erdtree itself. Most of the vegetation that grows in Altus is tinged with the gold of the Erdtree, and flowers that grow on the plateau are prized reagents by Perfumers.','2024-04-22','2024-04-27',1999,'259dfef5-3d5b-484c-b0be-b09eebc33a33.jpg'),(41,'Mt. Gelmir','Mt. Gelmir is a volcanic region west of the Altus Plateau, ruled over by the enigmatic Volcano Manor and their lord, Praetor Rykard. This region has been ravaged, and is home to many grotesque creatures.','2024-04-22','2024-04-29',4999,'30a68250-43a0-4d4c-acab-20852b40825f.jpg'),(42,'Leyndell, Royal Capital','The Capital City, located at the foot of the Erdtree. Despite being partially destroyed by the dragon Gransax, it still holds strong to this day. It houses many strong foes, along with the mysterious Veiled Monarch, Morgott.','2024-05-22','2024-05-25',3999,'51eee534-d3c4-4110-bc4b-745a39a0a694.jpg'),(43,'Mountaintops of the Giants','The fabled domain of the Giants, now in ruins. Devasted after their war against the Erdtree, their corpses lay frozen at the peak, with only the Fire Monks residing close by.\r\n\r\n','2024-04-18','2024-04-20',899,'0591df08-6e5f-4ecb-90c6-ecd95f56be1a.jpg'),(44,'Forbidden Lands','Secret passage in the eastern outskirts of the Capital leading to the untrodden snow-laden region beyond.','2024-05-04','2024-05-05',9999,'1863437a-9195-4db7-a968-1498679bbfd2.jpeg'),(45,'Siofra River','One of the two great rivers that flow beneath the Lands Between. Siofra is said to be the grave of civilisations that flourished before the Erdtree, and evidence of this can be found in the many ancient structures that litter the vast, subterranean space. The towering remains of an ancient dynasty are prominent throughout the area, inhabited by the Claymen who once served as the dynasty\'s priests.','2024-04-11','2024-04-13',399,'5240149e-6dd3-4218-a385-6e2106936c40.jpeg'),(46,'Crumbling Farum Azula','A giant temple in the sky, located above the sea to the east of the Lands Between. Once a royal city and the seat of the Dragonlord Placidusax, Farum Azula has been crumbling since time immemorial. Now, it is a mausoleum, guarded by chosen Beastmen who wield weapons clad in lightning. The storm beyond time rages in the centre of the crumbling city, and at its heart is the Dragonlord\'s seat, where he awaits the return of his god.','2024-04-28','2024-05-01',4999,'199331a8-21a6-4933-a04c-d4b09326c249.webp');
/*!40000 ALTER TABLE `vacations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-11 16:07:12
