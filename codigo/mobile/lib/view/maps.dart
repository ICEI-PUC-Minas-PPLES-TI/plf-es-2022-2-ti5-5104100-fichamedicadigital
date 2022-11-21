import 'package:flutter/material.dart';
import 'package:flutter_osm_plugin/flutter_osm_plugin.dart';
import 'package:mobile/mainPage.dart';
import 'package:mobile/services/Appoinment.dart';
import 'package:mobile/view/styles/MapsStyle.dart';

// class MapsPage extends StatefulWidget {
//   const MapsPage({Key? key}) : super(key: key);

//   @override
//   _MapsPageState createState() => _MapsPageState();
// }

// class _MapsPageState extends State<MapsPage> {

  MapController controller = MapController(
    initMapWithUserPosition: false,
    initPosition: GeoPoint(latitude: -19.9326675, longitude: -43.938214),
    areaLimit: BoundingBox( east: 10.4922941, north: 47.8084648, south: 45.817995, west: 5.9559113,),
  );
  
  AppointmentService appointmentService = AppointmentService();
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: MapsStyle.primaryColor,
      body: Center(
        child: Padding(
          padding: const EdgeInsets.only(
              left: 32.0, top: 0.0, right: 32.0, bottom: 0.0),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              SizedBox(
                width: 360,
                height: 640,
                child: OSMFlutter(
                  controller:controller,
                  trackMyPosition: false,
                  initZoom: 12,
                  minZoomLevel: 4,
                  maxZoomLevel: 16,
                  stepZoom: 1.0,
                  mapIsLoading: const Center(
                    child: CircularProgressIndicator(strokeWidth: 5,),
                  ),
                  userLocationMarker: UserLocationMaker(
                    personMarker: MapsStyle.userMarker,
                    directionArrowMarker: const MarkerIcon(
                      icon: Icon(
                        Icons.double_arrow,
                        size: 48,
                      ),
                    ),
                  ),
                  roadConfiguration: RoadConfiguration(
                    startIcon: const MarkerIcon(
                      icon: Icon(
                        Icons.person,
                        size: 64,
                        color: Colors.brown,
                      ),
                    ),
                    roadColor: Colors.yellowAccent,
                  ),
                  markerOption: MarkerOption(
                    defaultMarker: MapsStyle.defaultMarker,
                    advancedPickerMarker: MapsStyle.advancedPickerMarker,
                  ),
                  staticPoints: [
                    StaticPositionGeoPoint(
                      '1',
                      MapsStyle.staticPointMarker,
                      [
                        GeoPoint(latitude: -19.9326675, longitude: -43.938214),
                        GeoPoint(latitude: -19.8264536, longitude: -43.959169),
                        GeoPoint(latitude: -19.9228571, longitude: -43.9947837),
                      ]
                    ),
                  ],
                  onMapIsReady: (bool value) async {
                    print('teste to pronto');
                    if (value) {
                      Future.delayed(const Duration(seconds: 1), () async {
                        await controller.currentLocation();
                      });

                    }
                  },
                  onLocationChanged: (GeoPoint data) {
                    print('onLocationChanged $data');
                  },
                  onGeoPointClicked: (GeoPoint data) async {
                    print('onGeoPointClicked $data');
                    Object consultas = await appointmentService.getAppointmentsByOfficeId(data.toString());
                    switch(await showDialog(
                        context: context,
                        builder: (BuildContext context) {
                          return SimpleDialog(
                            title: Text('Selecione um horário para ${data.latitude} e ${data.longitude}'),
                            children: <Widget>[
                              SimpleDialogOption(
                                onPressed: () { Navigator.pop(context, 'a'); },
                                child: Text('$consultas'),
                              ),
                              SimpleDialogOption(
                                onPressed: () { Navigator.pop(context, 'b'); },
                                child: Text('$consultas'),
                              ),
                            ],
                          );
                        })) {
                      case 'a':
                        print('deu a');
                        Navigator.push(
                            context,
                            MaterialPageRoute(builder: (context) => MainPage(nome: '', id: 1))
                        );
                      // ...
                        break;
                      case 'b':
                        print('deu b');
                        Navigator.push(
                            context,
                            MaterialPageRoute(builder: (context) => MainPage(nome: '', id: 1))
                        );
                      // ...
                        break;
                      case null:
                      // dialog dismissed
                        break;
                    }
                  },
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
