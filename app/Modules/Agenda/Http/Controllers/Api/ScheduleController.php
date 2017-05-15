<?php

namespace App\Modules\Agenda\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\agenda\Http\Requests\ScheduleCreateRequest;
use App\Modules\Agenda\Models\Schedule;
use Illuminate\Http\Request;
use Carbon\Carbon;
/**
 *@resource ScheduleController
 *
 *Recurso de la agenda para ser consumidos
 *
 * @author david felipe bustos , david_bustos17@hotmail.com
 */

class ScheduleController extends Controller
{
    /**
     * index
     * 
     * Retorna las respuestas de los horarios en formato JSON 
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $schedules = Schedule::paginate(10);
        return $schedules;
    }

    /**
     * create
     * 
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * store
     * 
     * Retorna en formato JSON una respuesta para guardar las respuestas.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ScheduleCreateRequest $request)
    {
       // $schedule = new Schedule();
        //$schedule->create($request->all());

      

        //$dayOfWeek =[];
      if ($request->days) {
       $dayOfWeek = $request->days;
       $lunes = "Monday";
       $martes = "Tuesday";
       $miercoles = "Wednesday";
       $jueves = "Thursday";
       $viernes = "Friday";
       $sabado = "Saturday";
       $domingo = "Sunday";


       $startDate = \Carbon\Carbon::now();

       $endDate  = $startDate->addDays(30);    
      
       $dates = [];

       $step = \Carbon\CarbonInterval::day();

        $period = new \DatePeriod(\Carbon\Carbon::parse('2017-05-01'), $step, \Carbon\Carbon::parse('2017-06-01'));
/**
        $dateTime = "2017-05-12 00:00:00";

        $dateHour = explode(' ', $dateTime);

        $newDateTime = $dateHour[0] . ' ' . $request->timestart_at;
        */

        foreach ($period as $dayss) {

            foreach ($request->days as $day) {

           switch ($day) {

               case 'Monday':
                if($dayss->format('l') == $lunes) {
                $dateTime = $dayss;
                $dateHour = explode(' ', $dateTime);
                $newDateTimeStart = $dateHour[0] . ' ' . $request->timestart_at;
                $newDateTimeEnds = $dateHour[0] . ' ' . $request->timesends_at;
            
              $dates[] = [
              'service_id' => $request->service_id,
              'observation' => $request->observation,
              'start_at' => $newDateTimeStart,
              'ends_at' => $newDateTimeEnds,
                         ];
             } ///Cada dia del periodo
                   break;

               case 'Tuesday':
                if($dayss->format('l') == $martes) {
                $dateTime = $dayss;
                $dateHour = explode(' ', $dateTime);
                $newDateTimeStart = $dateHour[0] . ' ' . $request->timestart_at;
                $newDateTimeEnds = $dateHour[0] . ' ' . $request->timesends_at;
            
              $dates[] = [
              'service_id' => $request->service_id,
              'observation' => $request->observation,
              'start_at' => $newDateTimeStart,
              'ends_at' => $newDateTimeEnds,
                         ];
             } ///Cada dia del periodo
                break;

               case 'Wednesday':
                if($dayss->format('l') == $miercoles) {
                $dateTime = $dayss;
                $dateHour = explode(' ', $dateTime);
                $newDateTimeStart = $dateHour[0] . ' ' . $request->timestart_at;
                $newDateTimeEnds = $dateHour[0] . ' ' . $request->timesends_at;
            
              $dates[] = [
              'service_id' => $request->service_id,
              'observation' => $request->observation,
              'start_at' => $newDateTimeStart,
              'ends_at' => $newDateTimeEnds,
                         ];
             } ///Cada dia del periodo
                break;

               case 'Thursday':
                if($dayss->format('l') == $jueves) {
                $dateTime = $dayss;
                $dateHour = explode(' ', $dateTime);
                $newDateTimeStart = $dateHour[0] . ' ' . $request->timestart_at;
                $newDateTimeEnds = $dateHour[0] . ' ' . $request->timesends_at;
            
              $dates[] = [
              'service_id' => $request->service_id,
              'observation' => $request->observation,
              'start_at' => $newDateTimeStart,
              'ends_at' => $newDateTimeEnds,
                         ];
             } ///Cada dia del periodo
                break;

               case 'Friday':
                if($dayss->format('l') == $viernes) {
                $dateTime = $dayss;
                $dateHour = explode(' ', $dateTime);
                $newDateTimeStart = $dateHour[0] . ' ' . $request->timestart_at;
                $newDateTimeEnds = $dateHour[0] . ' ' . $request->timesends_at;
            
              $dates[] = [
              'service_id' => $request->service_id,
              'observation' => $request->observation,
              'start_at' => $newDateTimeStart,
              'ends_at' => $newDateTimeEnds,
                         ];
             } ///Cada dia del periodo
                break;

               case 'Saturday':
                if($dayss->format('l') == $sabado) {
                $dateTime = $dayss;
                $dateHour = explode(' ', $dateTime);
                $newDateTimeStart = $dateHour[0] . ' ' . $request->timestart_at;
                $newDateTimeEnds = $dateHour[0] . ' ' . $request->timesends_at;
            
              $dates[] = [
              'service_id' => $request->service_id,
              'observation' => $request->observation,
              'start_at' => $newDateTimeStart,
              'ends_at' => $newDateTimeEnds,
                         ];
             } ///Cada dia del periodo
                break;

               case 'Sunday':
                if($dayss->format('l') == $domingo) {
                $dateTime = $dayss;
                $dateHour = explode(' ', $dateTime);
                $newDateTimeStart = $dateHour[0] . ' ' . $request->timestart_at;
                $newDateTimeEnds = $dateHour[0] . ' ' . $request->timesends_at;
            
              $dates[] = [
              'service_id' => $request->service_id,
              'observation' => $request->observation,
              'start_at' => $newDateTimeStart,
              'ends_at' => $newDateTimeEnds,
                         ];
             } ///Cada dia del periodo
                break;
               
               default:
                   # code...
                   break;
           }
       }
   }

       foreach ($dates as $date) {

        Schedule::create($date);
       }
        

       //return $dates;
      }
      else
      {   


         $dates = [];

           $dateTime = $request->start_at;
           $dateHour = explode(' ', $dateTime);
           $newDateTimeStart = $dateHour[0] . ' ' . $request->timestart_at;

           $dateTime2 = $request->ends_at;
           $dateHour2 = explode(' ', $dateTime2);
           $newDateTimeEnds = $dateHour2[0] . ' ' . $request->timesends_at;
           // foreach ($request as $key) {
              $dates[] = [
              'service_id' => $request->service_id,
              'observation' => $request->observation,
              'start_at' => $newDateTimeStart,
              'ends_at' => $newDateTimeEnds,
                         ];
          //}
          foreach ($dates as $date) {
            # code...
               Schedule::create($date);
          }
     
          //return $dates;
      }
   
        return response([
            'message' => 'el horario se han ingresado con exito',
        ], 200);

    }

    /**
     * show
     * 
     * Muestra un recurso especificado.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $shedule= Schedule::findOrFail($id);

        return  $shedule;
    }

    /**
     * edit
     * 
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update
     * 
     * Actualiza los registros especificados
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ScheduleCreateRequest $request, $id)
    {
        Schedule::find($id)->update($request->all());

        return response([
            'message' => 'se actualizo con exito',
        ], 200);
    }

    /**
     * destroy
     * 
     * Remueve el campo especificado de la base de datos.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Schedule::destroy($id);

        return response([
            'message' => 'se elimino con exito',
        ], 200);
    }
     public function search ($keyword) {
        return Schedule::where('observation', 'like', '%' . $keyword . '%')
        ->orWhere('start_at', 'like', '%' . $keyword . '%')
        ->orWhere('ends_at', 'like', '%' . $keyword . '%')->paginate(10);
    }


    public function getAll()
    {
        $schedule = Schedule::all();
        return response()->json(['data'=> $schedule->toArray()]);

    }
}
