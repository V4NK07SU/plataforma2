<?php 

namespace App\Helpers;

use App\User;
use Illuminate\Support\Facades\DB;

/**
 * Simple class to logins and search users
 * in Corhuila LDAP Server
 * 
 * @author Pierre Silva <pierremichelsilva@gmail.com>
 */
class LdapHelper
{
    /**
     * Ldap Host
     *
     * @var string
     */
    protected static $ldapHost = 'localhost';
    /**
     * Ldap Host Port
     *
     * @var int
     */
    protected static $ldapPort = 389;
    /**
     * Ldap dc string
     *
     * @var string
     */
    protected static $ldapDc = 'dc=corhuila,dc=edu,dc=co';
    /**
     * Ldap ds response
     *
     * @var null
     */
    protected static $ds = null;


    public function __construct()
    {

    }
    /**
     * Connect to LDAP Server
     *
     * @return boolean
     */
    public static function connect()
    {
        $ds = ldap_connect(self::$ldapHost, self::$ldapPort);

        if ($ds) {
            self::$ds = $ds;
            return true;
        }

        return false;
    }
    /**
     * Login a user to LDAP Server
     *
     * @param string $userName
     * @param string $userPassword
     * 
     * @return mixed ds conecction or false 
     */
    public static function login($userName, $userPassword)
    {
        if(self::connect()) {
            ldap_set_option(self::$ds, LDAP_OPT_PROTOCOL_VERSION, 3);
            ldap_set_option(self::$ds, LDAP_OPT_REFERRALS, 0);

            $binddn = "cn=" . $userName . ",ou=users," . self::$ldapDc;
            $ldapbind = false;
            try {
                $ldapbind = ldap_bind(self::$ds, $binddn, $userPassword);
            } catch (\Exception $e) {
                return false;
            }
            
            if ($ldapbind) {
                return self::search($userName);
            }            

            return false;
        }         

        return false;               

    }
    /**
     * Search for user in LDAP Server
     *
     * @param string $userName
     * 
     * @return mixed    user info array or false
     */
    public static function search($userName)
    {
        if(is_null(self::$ds)) {
            self::connect();
        }

        $search = ldap_search(self::$ds, 'cn=' . $userName . ',ou=users,' . self::$ldapDc, '(cn=*)');                
        $info = ldap_get_entries(self::$ds, $search);
        $userInfo = [];
        $userInfo['cn'] = $info[0]['cn'][0];
        $userInfo['uid'] = $info[0]['uid'][0];
        $userInfo['displayname'] = $info[0]['displayname'][0];
        $userInfo['sinuuser'] = $info[0]['sinuuser'][0];
        $userInfo['sn'] = $info[0]['sn'][0];
        $userInfo['givenname'] = $info[0]['givenname'][0];
        $userInfo['mail'] = $info[0]['mail'][0];
        $userInfo['dn'] = $info[0]['dn'];
        return $userInfo;
        
    }
    /**
     * Discomnnect to LDAP Server
     *
     * @return void False if can't disconnct to server
     */
    public static function disconnect()
    {
        if(!is_null(self::$ds)) {
            if(ldap_unbind(self::$ds)) {
                return true;
            }
            return false;
        }
        return true;
    }
}