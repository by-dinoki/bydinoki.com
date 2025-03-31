<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'bydinoki.github.io' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ';p,a1&m{{MuC4FeoB[!lv8;Pu@|yKas.&6zoAE[0p9!?D)Ja6*J^5>5??4EUC[Z4' );
define( 'SECURE_AUTH_KEY',  '^>$UIeCylN&X]txdJImNb^zwexC*_vFS04P.r8JK-gxQm0^aD`xK>*lG-Vq-<~mi' );
define( 'LOGGED_IN_KEY',    'C*XIM v:?qj|0A`Gr]/c12[QETYrP`)I.@>fSK#EJ-jcT~c[~mUw8:CHE3Ly(Kte' );
define( 'NONCE_KEY',        'oq$u=Se[[({}C-!&I,r7uLak{xQ>m|e=)i2K2}]Cy8[!RMaMaeq.i<Y/oK=VQWd!' );
define( 'AUTH_SALT',        '^=@Ba)goF4i~eb2MQHTji5)E3U/rNbMU 2~dHKKIWdV3.O9P{yrwf;is0PSDg5L=' );
define( 'SECURE_AUTH_SALT', 'oES?C<o~ApGv<{,<pdb}m!i=X[m}&4!lu,NG<BmU2=DM:YW>z,r5TSpANsd^jXQq' );
define( 'LOGGED_IN_SALT',   'Y:8|Af&,cTMa_JlIVAiHKzM}Z^U-Ut91Vms$k9rtjcXq&2W-ryNf3~Un]UuT{<}C' );
define( 'NONCE_SALT',       'WgSH|L1uw!Xjm1D8$!#_T6kMVj_41)UT0ymcM|#-8D$QXHb#tQB[29CuB97L6tD%' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
