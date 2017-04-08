/*
Navicat MySQL Data Transfer

Source Server         : 本地mySQL
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : daling

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-04-08 16:53:49
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `imgurl` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nowprice` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `oldprice` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `collect` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `discount` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `reg_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '咖啡', 'img/coffee.jpg', '49.00', '56.00', '6006', '8', '[越南.不喝酒也能hight] G7 精选3合1速溶咖啡', null);
INSERT INTO `goods` VALUES ('2', '海苔', 'img/haitai.jpg', '46.80', '60.00', '1', '7', '[泰国.片片均匀质地脆能] 小老板 小老板炸海苔辣味原味2种口味', null);
INSERT INTO `goods` VALUES ('3', '蛋糕', 'img/tilamisu.jpg', ' 48.80', '60.00', '3', '8', '[马来西亚.松软绵密香甜美味] 福多福多蛋糕-提拉米苏432g(432g)', null);
INSERT INTO `goods` VALUES ('4', '饼干', 'img/binggan.jpg', '26.80', '40.00', '1', '6', '[德国.香脆可口原装进口] 布莱尼兹 布莱尼兹动物型饼干45g*4(45g*4)', null);
INSERT INTO `goods` VALUES ('5', '薯片', 'img/supian.jpg', '38.80', '60.00', '4', '6', '[马来西亚.鲜脆口感回味无穷] 贝鲁斯 贝鲁斯烧烤番茄香辣黑胡椒五口味薯片', null);
INSERT INTO `goods` VALUES ('6', '巧克力', 'img/qiaokeli.jpg', '49.00', '59.00', '1', '6', '[国货精选.横扫饥饿出游食品]士力架德芙士力架牛奶花生夹心巧克力全家桶', null);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `reg_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=32 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'jimi', '123456', null);
INSERT INTO `user` VALUES ('2', 'john', '123456', null);
INSERT INTO `user` VALUES ('3', 'jjk', '123', null);
INSERT INTO `user` VALUES ('4', 'xixi', '123', null);
INSERT INTO `user` VALUES ('5', 'xiyang', '123321', null);
INSERT INTO `user` VALUES ('6', 'xiye', '123456', null);
INSERT INTO `user` VALUES ('7', 'haha', 'password', null);
INSERT INTO `user` VALUES ('8', 'root', 'password', null);
INSERT INTO `user` VALUES ('31', '321', '123', null);
SET FOREIGN_KEY_CHECKS=1;
