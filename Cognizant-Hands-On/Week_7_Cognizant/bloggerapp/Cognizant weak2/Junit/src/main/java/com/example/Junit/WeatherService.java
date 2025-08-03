package com.example.Junit;
public class WeatherService {
    private final WeatherClient client;

    public WeatherService(WeatherClient client) {
        this.client = client;
    }

    public String getTodayForecast() {
        return client.fetchForecast();
    }
}
