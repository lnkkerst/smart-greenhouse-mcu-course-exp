#include "WiFiClientSecure.h"
#include <Arduino.h>
#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>

const char *ssid = "Pixel 6 Pro";
const char *password = "12345679";

const char *serverUrl =
    "https://smart-greenhouse-mcu-course.lnkkerst.me/api/upload";

WiFiClientSecure wifiClient;

void setup() {

  Serial.begin(115200);
  Serial.println();

  Serial.setTimeout(-1);

  wifiClient.setInsecure();
  WiFi.begin(ssid, password);
  Serial.print("Connecting to ");
  Serial.print(ssid);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("Connected to WiFi");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  delay(1000);
  if (WiFi.status() != WL_CONNECTED) {
    return;
  }

  String postData = Serial.readStringUntil('\n');

  Serial.println("Post Data: " + postData);

  HTTPClient http;

  http.begin(wifiClient, serverUrl);
  http.addHeader("Content-Type", "text/plain");

  int httpResponseCode = http.POST(postData);

  if (httpResponseCode > 0) {
    String response = http.getString();
    Serial.println("HTTP Response Code: " + String(httpResponseCode));
    Serial.println("Response: " + response);
  } else {
    Serial.println("Error on sending POST request: " +
                   String(httpResponseCode));
  }

  http.end();
}
