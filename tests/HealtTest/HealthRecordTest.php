<?php


/**
 * @resource HealthRecordTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @author Danny Rojas Reyes, @rojasknight
 */

class HealthRecordTest extends TestCase
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
     * testHealthRecordStore
     *
     * prueba para crear un record de salud.
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
     * testHealthRecordIndex
     *
     * prueba para mostrar los records de salud.
     *
     * JSON.
     */

    public function testHealthRecordIndex()
    {
        $this->get('/api/health/record')
            ->seeJson([
                'user_id'         => 1,
                'professional_id' => 1,
                'type_id'         => 1,
            ]);
    }

    /**
     * testHealthRecordUpdate
     *
     * prueba para actualizar los records de salud.
     *
     * JSON.
     */

    public function testHealthRecordUpdate()
    {
        $this->put('/api/health/record/1', [
            'user_id'         => 1,
            'professional_id' => 1,
            'type_id'         => 1,
        ])
            ->seeJson([
                'message' => 'el record de salud fue actualizado con exito',
            ]);
    }

    /**
     * testHealthRecordShow
     *
     * prueba para mostrar un record de salud.
     *
     * JSON.
     */

    public function testHealthRecordShow()
    {
        $this->get('/api/health/record/1')
            ->seeJson([
                'user_id'         => 1,
                'professional_id' => 1,
                'type_id'         => 1,
            ]);
    }
}
