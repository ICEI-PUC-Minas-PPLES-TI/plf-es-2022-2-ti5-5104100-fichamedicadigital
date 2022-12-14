
class OfficeResponse {
  final String latitude;
  final String longitude;

  OfficeResponse(this.latitude, this.longitude);

  OfficeResponse.fromJson(Map<String, dynamic> json)
    : latitude = json['x'],
      longitude = json['y'];

  Map<String, dynamic> toJson() => {
    'x': latitude,
    'y': longitude,
  };
}