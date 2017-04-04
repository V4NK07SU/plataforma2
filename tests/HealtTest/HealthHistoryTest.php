<?php

/**
 * @resource HealthDimensionTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @author Danny Rojas Reyes, @rojasknight
 */

class HealthHistoryTest extends TestCase
{

    /**
     * testHealthTypesStore
     *
     * prueba para crear una historia de salud(Relacion).
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
     * testHealthTypesStore
     *
     * prueba para crear una historia de salud(Relacion).
     *
     * JSON.
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
     * testHealthRecordStore
     *
     * prueba para crear un record de una historia de salud(Relacion).
     *
     * JSON.
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
     * testHealthHistoryStore
     *
     * prueba para crear una historia de salud.
     *
     * JSON.
     */

    public function testHealthHistoryStore()
    {
        $this->post('/api/health/history', [
            'record_id'       => 1,
            'date'            => '2000-01-01 00:00:00',
            'observations'    => 'example',
            'tracing'         => 'example',
            'reason'          => 'example',
            'professional_id' => 1,
        ])
            ->seeJson([
                'message' => 'la historia clinica  fue creada con exito',
            ]);
    }

    /**
     * testtHealthHistoryIndex
     *
     * prueba para mostrar las historias de salud.
     *
     * JSON.
     */

    public function testtHealthHistoryIndex()
    {
        $this->get('/api/health/history')
            ->seeJson([
                'record_id'       => 1,
                'date'            => '2000-01-01 00:00:00',
                'observations'    => 'example',
                'tracing'         => 'example',
                'reason'          => 'example',
                'professional_id' => 1,
            ]);
    }

    /**
     * testtHealthHistoryUpdate
     *
     * prueba para actualizar una historia de salud.
     *
     * JSON.
     */

    public function testtHealthHistoryUpdate()
    {
        $this->put('/api/health/history/1', [
            'record_id'       => 1,
            'date'            => '2000-01-01 00:00:00',
            'observations'    => 'example1',
            'tracing'         => 'example1',
            'reason'          => 'example1',
            'professional_id' => 1,
        ])
            ->seeJson([
                'message' => 'La historia clinica  fue actualizada con exito',
            ]);
    }

    /**
     * testtHealthHistoryShow
     *
     * prueba para mostrar una historia de salud.
     *
     * JSON.
     */

    public function testtHealthHistoryShow()
    {
        $this->get('/api/health/history/1')
            ->seeJson([
                'record_id'       => 1,
                'date'            => '2000-01-01 00:00:00',
                'observations'    => 'example1',
                'tracing'         => 'example1',
                'reason'          => 'example1',
                'professional_id' => 1,
            ]);
    }
}
