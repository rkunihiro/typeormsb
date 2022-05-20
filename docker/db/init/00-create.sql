CREATE TABLE `User` (
    `id` bigint unsigned NOT NULL AUTO_INCREMENT,

    `name` varchar(255) NOT NULL,
    `age` int unsigned NOT NULL,

    `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `User` (`id`, `name`, `age`) VALUES
(1, 'foo', 25),
(2, 'bar', 32);

CREATE TABLE `Post` (
    `id` bigint unsigned NOT NULL AUTO_INCREMENT,

    `autherId` bigint unsigned NOT NULL,
    `title` varchar(255) NOT NULL,

    `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
    -- PRIMARY KEY (`id`),
    -- FOREIGN KEY `autherId` (`autherId`) REFERENCES `User` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `Post` (`autherId`, `title`) VALUES
(1, 'Hello,World!'),
(2, 'こんにちは'),
(1, 'Good-bye...');
