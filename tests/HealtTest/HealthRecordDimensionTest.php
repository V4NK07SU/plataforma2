<?php

/**
 * @resource HealthRecordDimensionTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @author Danny Rojas Reyes, @rojasknight
 */

class HealthRecordDimensionTest extends TestCase
{

    /**
     * testUsersStore
     *
     * prueba para crear un usuario(Relacion).
     *
     * JSON
     */

    public function testUsersStore()
    {
        $this->post('/api/users/register', [

            'email'    => 'example@mail.com',
            'password' => '123456',

        ])
            ->seeJson([
                'message' => 'el usuario  se ha ingresado con exito',
            ]);
    }
 

     /**
     * testHealthTypesStore
     *
     * prueba para crear un tipo de salud(Relacion).
     *
     * JSON
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
     * testHealthRecordStore
     *
     * prueba para crear un record de salud(Relacion).
     *
     * JSON
     */

    public function testHealthRecordStore()
    {
        $this->post('/api/health/record', [
            'user_id'         => 1,
            'professional_id' => 1,
            'type_id'         => 1,

        ])
            ->seeJson([
                'message' => 'El record de salud fue creado con exito',
            ]);
    }


    /**
     * testHealthDimencionCategoriesStore
     *
     * prueba para crear las categorias de dimension de salud(Relacion).
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
     * testHealthDimensionStore
     *
     * prueba para crear las dimensiones de salud(Relacion).
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
     * testHealthRecordDimensionStore
     *
     * prueba para crear un record de dimension de salud.
     *
     * JSON
     */

    public function testHealthRecordDimensionStore()
    {
        $this->post('/api/health/record/dimension', [
            'record_id'    => 1,
            'dimension_id' => 1,
            'observations' => 'example',
            'value'        => 1,
        ])
            ->seeJson([
                'message' => 'El record de la dimension de salud fue creado con exito',
            ]);
    }

    /**
     * testHealthRecordDimensionIndex
     *
     * prueba para mostrar los records de las dimensiones  de salud.
     *
     * JSON
     */

    public function testHealthRecordDimensionIndex()
    {
        $this->get('/api/health/record/dimension')
            ->seeJson([
                'record_id'    => 1,
                'dimension_id' => 1,
                'observations' => 'example',
                'value'        => 1,
            ]);
    }

    /**
     * testHealthRecordDimensionUpdate
     *
     * prueba para actualizar los records de las dimensiones  de salud.
     *
     * JSON
     */

    public function testHealthRecordDimensionUpdate()
    {
        $this->put('/api/health/record/dimension/1', [
            'record_id'    => 1,
            'dimension_id' => 1,
            'observations' => 'example1',
            'value'        => 1,
        ])
            ->seeJson([
                'message' => 'El record de la dimension de salud se ha actualizada con exito',
            ]);
    }

    /**
     * testHealthRecordDimensionShow
     *
     * prueba para mostrar un records de las dimensiones de salud.
     *
     * JSON
     */

    public function testHealthRecordDimensionShow()
    {
        $this->get('/api/health/record/dimension/1')
            ->seeJson([
                'record_id'    => 1,
                'dimension_id' => 1,
                'observations' => 'example1',
                'value'        => 1,
            ]);
    }
}
