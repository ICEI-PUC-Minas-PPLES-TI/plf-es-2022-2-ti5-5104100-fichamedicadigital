
class OfficeResponse {
  final double latitude;
  final double longitude;
  final String id;
  final String idMedico;

  OfficeResponse(this.latitude, this.longitude, this.id, this.idMedico);

  // OfficeResponse.fromJson(Map<String, OfficeResponse> json, this.id, this.idMedico)
  //   : latitude = json['x'],
  //     longitude = json['y'];
  //
  // Map<String, dynamic> toJson() => {
  //   'x': latitude,
  //   'y': longitude,
  // };
}