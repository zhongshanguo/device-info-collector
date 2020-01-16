CREATE TABLE `login_info` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `app_id` varchar(255) DEFAULT NULL,
  `user_id` varchar(128) DEFAULT NULL,
  `device_id` varchar(128) DEFAULT NULL,
  `device_type` varchar(255) DEFAULT NULL,
  `is_physical_device` int(11) DEFAULT '1',
  `ios_name` varchar(255) DEFAULT NULL,
  `ios_system_name` varchar(255) DEFAULT NULL,
  `ios_system_version` varchar(255) DEFAULT NULL,
  `ios_model` varchar(255) DEFAULT NULL,
  `ios_localized_model` varchar(255) DEFAULT NULL,
  `android_version` varchar(255) DEFAULT NULL,
  `android_board` varchar(255) DEFAULT NULL,
  `android_bootloader` varchar(255) DEFAULT NULL,
  `android_brand` varchar(255) DEFAULT NULL,
  `android_device` varchar(255) DEFAULT NULL,
  `android_display` varchar(255) DEFAULT NULL,
  `android_fingerprint` varchar(255) DEFAULT NULL,
  `android_hardware` varchar(255) DEFAULT NULL,
  `android_host` varchar(255) DEFAULT NULL,
  `android_id` varchar(255) DEFAULT NULL,
  `android_manufacturer` varchar(255) DEFAULT NULL,
  `android_model` varchar(255) DEFAULT NULL,
  `android_product` varchar(255) DEFAULT NULL,
  `android_tags` varchar(255) DEFAULT NULL,
  `android_type` varchar(255) DEFAULT NULL,
  `collect_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;