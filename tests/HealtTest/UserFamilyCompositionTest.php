<?php

/**
 * @resource UserFamilyCompositionTest
 *
 * Clase donde se encuentran los metodos para el respectivo test
 *
 * @author Danny Rojas Reyes, @rojasknight
 */

class UserFamilyCompositionTest extends TestCase
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
     * testUserFamilyCompositionStore
     *
     * prueba para crear una familia
     *
     * JSON.
     */

    public function testUserFamilyCompositionStore()
    {
        $this->post('/api/health/userfamilycomposition', [
            'user_id'      => 1,
            'first_name'   => 'example',
            'last_name'    => 'example',
            'relationship' => 'example',
            'occupation'   => 'example',
            'address'      => 'example',
            'phone'        => 'example',

        ])
            ->seeJson([
                'message' => 'la Composicion de la familia de usuarios  fue creada con exito',
            ]);
    }

    /**
     * testUserFamilyCompositionIndex
     *
     * prueba para mostrar las familia
     *
     * JSON.
     */

    public function testUserFamilyCompositionIndex()
    {
        $this->get('/api/health/userfamilycomposition')
            ->seeJson([
                'user_id'      => 1,
                'first_name'   => 'example',
                'last_name'    => 'example',
                'relationship' => 'example',
                'occupation'   => 'example',
                'address'      => 'example',
                'phone'        => 'example',
            ]);
    }

    /**
     * testUserFamilyCompositionUpdate
     *
     * prueba para actualizar una familia
     *
     * JSON.
     */

    public function testUserFamilyCompositionUpdate()
    {
        $this->put('/api/health/userfamilycomposition/1', [
            'user_id'      => 1,
            'first_name'   => 'example1',
            'last_name'    => 'example1',
            'relationship' => 'example1',
            'occupation'   => 'example1',
            'address'      => 'example1',
            'phone'        => 'example1',
        ])
            ->seeJson([
                'message' => 'la Composicion de la familia de usuarios fue actualizada con exito',
            ]);
    }

    /**
     * testUserFamilyCompositionShow
     *
     * prueba para mostrar una familia
     *
     * JSON.
     */

    public function testUserFamilyCompositionShow()
    {
        $this->get('/api/health/userfamilycomposition/1')
            ->seeJson([
                'user_id'      => 1,
                'first_name'   => 'example1',
                'last_name'    => 'example1',
                'relationship' => 'example1',
                'occupation'   => 'example1',
                'address'      => 'example1',
                'phone'        => 'example1',
            ]);
    }
}
