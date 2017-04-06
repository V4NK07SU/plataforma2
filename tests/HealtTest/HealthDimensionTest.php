<?php

/**
 * @resource HealthDimensionTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @author Danny Rojas Reyes, @rojasknight
 */

class HealthDimensionTest extends TestCase
{

    /**
     * testHealthDimensionsCategoriesStore
     *
     * prueba para crear una dimension de salud
     *
     * JSON
     */

    public function testHealthDimensionsCategoriesStore()
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
     * testHealthDimensionStore
     *
     * prueba para crear una dimension de salud
     *
     * JSON
     */

    public function testHealthDimensionStore()
    {
        $this->post('/api/health/dimension', [
            'title'       => 'example',
            'description' => 'example',
            'category_id' => 1,
        ])
            ->seeJson([
                'message' => 'la dimensiones ha sido creada con exito',
            ]);
    }

    /**
     * testHealthDimensionIndex
     *
     * prueba para crear mostrar las dimensiones de salud
     *
     * JSON
     */

    public function testHealthDimensionIndex()
    {
        $this->get('/api/health/dimension')
            ->seeJson([
                'title'       => 'example',
                'description' => 'example',
                'category_id' => 1,
            ]);
    }

    /**
     * testHealthDimensionsCategoriesStore
     *
     * prueba para actualizar una dimension de salud
     *
     * JSON
     */

    public function testHealthDimensionUpdate()
    {
        $this->put('/api/health/dimension/1', [
            'title'       => 'example1',
            'description' => 'example1',
            'category_id' => 1,
        ])
            ->seeJson([
                'message' => 'Las dimensiones han sido actualizadas con exito',
            ]);
    }

    /**
     * testHealthDimensionShow
     *
     * prueba para mostrar una dimension de salud
     *
     * JSON
     */

    public function testHealthDimensionShow()
    {
        $this->get('/api/health/dimension/1')
            ->seeJson([
                'title'       => 'example1',
                'description' => 'example1',
                'category_id' => 1,
            ]);
    }
}
