<?php

/**
 * @resource HealthDimensionCategoriesTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @author Danny Rojas Reyes, @rojasknight
 *
 */

class HealthDimensionCategoriesTest extends TestCase
{
    /**
     * testHealthDimencionCategoriesStore
     *
     * prueba para crear una categoria
     *
     * JSON
     */

    public function testHealthDimencionCategoriesStore()
    {
        $this->post('/api/health/dimension/categories', [
            'title'       => 'example',
            'description' => 'example',
        ])
            ->seeJson([
                'message' => 'la dimension fue creada con exito',
            ]);
    }

    /**
     * testHealthDimencionCategoriesIndex
     *
     * prueba para lostar las categorias
     *
     * JSON
     */

    public function testHealthDimencionCategoriesIndex()
    {
        $this->get('/api/health/dimension/categories')
            ->seeJson([
                'title'       => 'example',
                'description' => 'example',
            ]);
    }

    /**
     * testHealthDimencionCategoriesUpdate
     *
     * prueba para actualizar una categoria
     *
     * JSON.
     */

    public function testHealthDimencionCategoriesUpdate()
    {
        $this->put('/api/health/dimension/categories/1', [
            'title'       => 'example1',
            'description' => 'example1',
        ])
            ->seeJson([
                'message' => 'la dimension fue actualizada con exito',
            ]);
    }

    /**
     * testHealthDimencionCategoriesShow
     *
     * prueba para mostrar una categoria.
     *
     * JSON
     */

    public function testHealthDimencionCategoriesShow()
    {
        $this->get('/api/health/dimension/categories/1')
            ->seeJson([
                'title'       => 'example1',
                'description' => 'example1',
            ]);
    }

}
