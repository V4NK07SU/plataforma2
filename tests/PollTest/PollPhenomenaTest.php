<?php

class PollPhenomenaTest extends TestCase
{
    /**
     * testStore
     *
     * prueba para crear un fenomeno
     *
     * JSON
     */

    public function testStore()
    {
        $this->post('/api/polls/pollphenomena', [

            'title'       => 'example',
            'description' => 'example',
        ])
            ->seeJson([
                'message' => 'el fenomeno se ha ingresado con exito',
            ]);
    }

    /**
     * testIndex
     *
     * prueba a mostrar los fenomenos
     *
     * JSON
     */

    public function testIndex()
    {
        $this->get('/api/polls/pollphenomena')
            ->seeJson([

                'title'       => 'example',
                'description' => 'example',
            ]);
    }

    /**
     * testUpdate
     *
     * prueba para actualizar los fenomenos
     *
     * JSON
     */

    public function testUpdate()
    {
        $this->put('/api/polls/pollphenomena/1', [
            'title'       => 'exampleupdate',
            'description' => 'example',
        ])
            ->seeJson([
               'message' => 'el fenomeno se ha actualizado con exito',
            ]);
    }
    /**
     * testShow
     *
     * prueba a mostrar  los fenomenos
     *
     * JSON
     */

    public function testShow()
    {
        $this->get('/api/polls/pollphenomena/1')
            ->seeJson([

                'title'       => 'exampleupdate',
                'description' => 'example',
            ]);
    }

    

    /**
     * testDelete
     *
     * prueba para eliminar un fenomeno
     *
     * JSON
     * 


    public function testDelete()
    {
    $this->delete('/api/polls/pollphenomena/1')
    ->seeJson([
    'message' => 'se elimino con exito',
    ]);
    }

     * */
}
