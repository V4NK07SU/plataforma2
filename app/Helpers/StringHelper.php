<?php
namespace App\Helpers;
use Illuminate\Support\Facades\DB;

/**
 * Class to helps to maipulate strings
 * 
 * @author Pierre Silva <pierremichelsilva@gmail.com>
 */

class StringHelper
{
    public function __construct()
    {

    }
    /**
     * Get unique slug from table -> column field
     *
     * @param string $text      Text to convert to slug
     * @param string $table     Table where find unique slug
     * @param string $separator Char to separate words
     * @param string $column    Column where find unique slug
     * 
     * @return string           Unique slug string
     */
    public static function uniqueSlug($text, $table, $separator = '-', $column = 'slug')
    {
        $slug = str_slug($text, $separator);
        $slugs = self::findSlugs($slug, $table, $column);       
        if(count($slugs) == 0) {
            return $slug;
        }

        return $slug . $separator . count($slugs);
    }
    /**
     * Find a slug string on dtabase table
     *
     * @param string $slug      Slug string to find
     * @param string $table     Table name
     * @param string $column    Column name
     * 
     * @return Array            Array of slugs found
     */
    private static function findSlugs($slug, $table, $column)
    {
        $slugs = DB::table($table)
                ->where($column, 'like', $slug . '%')
                ->get()
                ->toArray();

        return $slugs;
    }
}