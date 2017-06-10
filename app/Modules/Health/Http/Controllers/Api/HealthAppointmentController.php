<?php

namespace App\Modules\Health\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Modules\Health\Http\Requests\HealthAppointmentCreateRequest;
use App\Modules\Health\Models\HealthAppointment;
use DateTime;
use DateInterval;

class HealthAppointmentController extends Controller
{
    /**
     * index
     *
     * 
     *
     * @return Response()
     */

    public function index()
    {

        $healthappointment = HealthAppointment::paginate(10);
        return $healthappointment;
    }

    public function create()
    {
        //
    }

    /**
     * store
     *
     * Guarda un registro en la base de datos  en la  tabla health_appoinment
     *
     * @param   HealthAppointmentCreateRequest $request
     *
     * @return  JSON Response()
     */

    public function store(Request $request)
    {
        //dd($request->all());

        $received_range_start = $request->start;
        $received_range_end = $request->end;

        $start = new DateTime($received_range_start);
        $start_day = clone $start;
        $start_day->setTime(0, 0, 0);

        $end = new DateTime($received_range_end);
        $end_day = clone $end;
        $end_day->setTime(0, 0, 0);

        $days = $end_day->diff($start_day)->days;

        if ($end > $end_day) {
            $days += 1;
        }

        $scale = $request->scale;

        $timeline = $this->loadTimeline($scale, $days, $start_day);

        $slot_duration = 60;
        $doctor_id = $request->resource;
        //dd($timeline);

        foreach($timeline as $cell) {
            if ($start <= $cell->start && $cell->end <= $end) {
                for($shift_start = clone $cell->start; $shift_start < $cell->end; $shift_start->add(new DateInterval("PT".$slot_duration."M"))) {
                    $shift_end = clone $shift_start;
                    $shift_end->add(new DateInterval("PT".$slot_duration."M"));
                    //create_shift($shift_start->format("Y-m-d\\TH:i:s"), $shift_end->format("Y-m-d\\TH:i:s"), $doctor_id);
                    $newSlot = new HealthAppointment();
                    $newSlot->appointment_start = $shift_start->format("Y-m-d\\TH:i:s");
                    $newSlot->appointment_end = $shift_end->format("Y-m-d\\TH:i:s");
                    $newSlot->user_id = $doctor_id;
                    $newSlot->appointment_status = 'free';
                    $newSlot->save();
                }
            }
        }
        //$healthappointment = new HealthAppointment();
        //$healthappointment->create($request->all());

        return response([
            'result' => 'OK',
            'message' => 'La programación se creo con éxito!',
        ], 200);
    }

    

    public function loadTimeline($scale, $days, $start_day) {
        //global $scale, $days, $start_day;
        
        $morning_shift_starts = 9;
        $morning_shift_ends = 13;
        $afternoon_shift_starts = 14;
        $afternoon_shift_ends = 18;
        
        switch ($scale) {
            case "hours":
                $increment_morning = 1;
                $increment_afternoon = 1;
                break;
            case "shifts":
                $increment_morning = $morning_shift_ends - $morning_shift_starts;
                $increment_afternoon = $afternoon_shift_ends - $afternoon_shift_starts;
                break;
            default:
                die("Invalid scale");
        }
        
        $timeline = array();

        for ($i = 0; $i < $days; $i++) {
            $day = clone $start_day;
            $day->add(new DateInterval("P".$i."D"));
            
            for($x = $morning_shift_starts; $x < $morning_shift_ends; $x += $increment_morning) {
                $cell = new TimeCell();
                
                $from = clone $day;
                $from->add(new DateInterval("PT".$x."H"));
                
                $to = clone $day;
                $to->add(new DateInterval("PT".($x + $increment_morning)."H"));
                
                $cell->start = $from;
                $cell->end = $to;    
                $timeline[] = $cell;            
            }

            for($x = $afternoon_shift_starts; $x < $afternoon_shift_ends; $x += $increment_afternoon) {
                $cell = new TimeCell();
                
                $from = clone $day;
                $from->add(new DateInterval("PT".$x."H"));
                
                $to = clone $day;
                $to->add(new DateInterval("PT".($x + $increment_afternoon)."H"));
                
                $cell->start = $from;
                $cell->end = $to;    
                $timeline[] = $cell;            
            }

        }
        
        return $timeline;
    }


    /**
     * show
     *
     * muestra un dato de la tabla health_appointment.
     *
     * @param  int $id
     *
     * @return JSON Response()
     */

    public function show($id)
    {
        $healthappointment = HealthAppointment::findOrFail($id);

        return $healthappointment;
    }

    public function edit($id)
    {
        //
    }

    /**
     * update
     *
     * Actualiza los campos especificados en la base de datos en la tabla health_appointment.
     *
     * @param  HealthAppointmentCreateRequest  $request
     *
     * @param  int  $id
     *
     * @return JSON Response()
     */

    public function update(HealthAppointmentCreateRequest $request, $id)
    {
        $healthappointment = HealthAppointment::findOrFail($id);

        if ($healthappointment->update($request->all())) {
            return response([
                'message' => 'la cita fue actualizada con exito',
            ], 200);
        }

        return response()->json([
                'message' => 'No se pudo actualizar el registro!',
            ], 500);

    }

    /**
     * destroy
     *
     * Elimina un registro de la base de datos de la tabla health_appointment
     *
     * @param  int  $id
     *
     *  @return JSON Response()
     */

    public function destroy($id)
    {
        $healthappointment = HealthAppointment::destroy($id);

        if ($healthappointment) {

            
            return response([
                'message' => 'la cita se ha eliminado con exito',
                'id'      => $id,
            ], 200);
        }
        return response([

            'message' => 'ha ocurrido un error el registro no ha sido eliminado',
            'id'      => $id,
        ], 500);

        $appointmens = HealthAppointmen::where('id', '=', $request->id)->post();     
        $appointmensDelete = [];
        foreach ($appointmens as $appointmen){
            //$appointmensDelete[]['id'] = $appointmen['id'];
        }
        return $appointmens;
    
    }

    public function eventsDoctor(Request $request) {
        $appointmens = HealthAppointment::where('appointment_end', '<=', $request->start)
        ->where('appointment_start', '>=', $request->end)
        ->where('user_id' , '=', $request->user_id)->get();

        return $appointmens;
    }

    public function eventsFree(Request $request){
        $appointmens = HealthAppointment::where('appointment_status', '=', $request->free)
        ->orWhere('appointment_status', '<>', $request->free)->get();
        $appointmensFormatted = [];
        foreach ($appointmens as $appointmen) {
            $appointmensFormatted[]['end'] = $appointmen['appointment_end'];
            $appointmensFormatted[]['start'] = $appointmen['appointment_start'];
            $appointmensFormatted[]['id'] = $appointmen['id'];
            $appointmensFormatted[]['resource'] = $appointmen['user_id'];
            $appointmensFormatted[]['tags']['status'] = $appointmen['appointment_status'];
            $appointmensFormatted[]['text'] = "";
        }
        return $appointmensFormatted;
    }

    public function events(Request $request) {
        $appointmens = HealthAppointment::where('appointment_end', '>=', $request->start)
        ->where('appointment_start', '<=', $request->end)->get();
        $appointmensFormatted = [];
        $counter = 0;
        foreach ($appointmens as $appointmen) {
            $nsDate = explode(' ', $appointmen['appointment_start']);
            $neDate = explode(' ', $appointmen['appointment_end']);
            $appointmensFormatted[$counter]['end'] = $neDate[0] . 'T' . $neDate[1];
            $appointmensFormatted[$counter]['start'] = $nsDate[0] . 'T' . $nsDate[1];
            $appointmensFormatted[$counter]['id'] = $appointmen['id'];
            $appointmensFormatted[$counter]['resource'] = $appointmen['user_id'] . '';
            $appointmensFormatted[$counter]['tags']['status'] = $appointmen['appointment_status'];
            $appointmensFormatted[$counter]['text'] = "";
            $counter++;
        }
        return $appointmensFormatted;
        //return $appointmens;
    }

     /**public function resources(Request $request)
     {
         $appointmens = HealthAppointment::where('id', '=' , request->id)->get();
         $appointmensResources = [];
         foreach($appointmens as $appointmen){
             $appointmensResources[]['id'] = $appointmen['id'];
             $appointmensResources[]['user_id'] = $appointmen['user_id'];
         }
         return $appointmensResources;
     }*/

    

}
class TimeCell {}