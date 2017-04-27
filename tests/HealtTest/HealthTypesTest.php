<?php

/**
 * @resource HealthTypesTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @author Danny Rojas Reyes, @rojasknight
 */

class HealthTypesTest extends TestCase
{

    /**
     * testHealthTypesStore
     *
     * prueba para crear un tipo de salud.
     *
     * JSON.
     */

    public function testHealthTypesStore()
    {
        $this->post('/api/health/types', [
            'title'       => 'example',
            'description' => 'example',
        ])
            ->seeJson([
                'message' => 'El tipo de salud fue creado con exito',
            ]);
    }

    /**
     * testHealthTypesIndex
     *
     * prueba para mostrar los tipos de salud.
     *
     * JSON.
     */

    public function testHealthTypesIndex()
    {
        $this->get('/api/health/types')
            ->seeJson([
                'title'       => 'example',
                'description' => 'example',
            ]);
    }

    /**
     * testHealthTypesUpdate
     *
     * prueba para actualizar un tipo de salud.
     *
     * JSON.
     */

    public function testHealthTypesUpdate()
    {
        $this->put('/api/health/types/1', [
            'title'       => 'example1',
            'description' => 'example1',
        ])
            ->seeJson([
                'message' => 'El tipo de salud fue actualizado con exito',
            ]);
    }

    /**
     * testHealthTypesShow
     *
     * prueba para mostrar un tipo de salud.
     *
     * JSON.
     */

    public function testHealthTypesShow()
    {
        $this->get('/api/health/types/1')
            ->seeJson([
                'title'       => 'example1',
                'description' => 'example1',

            ]);
    }
}
