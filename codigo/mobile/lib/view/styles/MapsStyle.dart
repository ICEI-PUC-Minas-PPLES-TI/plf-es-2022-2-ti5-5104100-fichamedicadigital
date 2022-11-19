import 'package:flutter/material.dart';
import 'package:flutter_osm_plugin/flutter_osm_plugin.dart';

class MapsStyle {
  static const Color primaryColor = Color.fromARGB(255, 208, 243, 239);
  static const Color markerColor = Colors.deepOrangeAccent;
  static const Color userMarkerColor = Colors.red;

  static const MarkerIcon userMarker = MarkerIcon(
    icon: Icon(
      Icons.location_history_rounded,
      color: userMarkerColor,
      size: 64,
    ),
  );

  static const MarkerIcon defaultMarker = MarkerIcon(
    icon: Icon(
      Icons.person_pin_circle,
      color: Colors.blue,
      size: 56,
    ),
  );

  static const MarkerIcon staticPointMarker = MarkerIcon(
    icon: Icon(
      Icons.pin_drop,
      color: markerColor,
      size: 64,
    ),
  );

  static const MarkerIcon advancedPickerMarker = MarkerIcon(
    icon: Icon(
      Icons.pin_drop,
      color: markerColor,
      size: 64,
    ),
  );
}
