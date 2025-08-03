package com.example.Junit;


import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

public class WeatherServiceTest {

    @Test
    public void testVerifyInteraction() {
        // Step 1: Create a mock
        WeatherClient mockClient = mock(WeatherClient.class);

        // Step 2: Call method using mock
        WeatherService service = new WeatherService(mockClient);
        service.getTodayForecast();

        // Step 3: Verify the method was called
        verify(mockClient).fetchForecast();
    }
}
