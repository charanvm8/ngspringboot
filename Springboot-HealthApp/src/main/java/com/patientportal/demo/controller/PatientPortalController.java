package com.patientportal.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.patientportal.demo.repository.*;
import com.patientportal.demo.model.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class PatientPortalController {
	
	@Autowired
	ProviderRepository providerRepository;
	
	@Autowired
	AppointmentRepository appointmentRepository;
	
	@PostMapping("/userappointments")
	public ResponseEntity<AppointmentResponse> createTutorial(@RequestBody UserInput userInput) {
		try {
			List<Appointment> appointments = appointmentRepository.getUserAppointments(userInput.getUserId());
			AppointmentResponse response = new AppointmentResponse();
			response.setAppointments(appointments);
			return new ResponseEntity<>(response, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	@PostMapping("/providers")
	public ResponseEntity<ProvidersResponse> getProviders(@RequestBody ProviderInput providerInput) {
		try {
			List<Provider> providers = providerRepository.getProvidersByZip(providerInput.getZipCode());
			ProvidersResponse response = new ProvidersResponse();
			response.setProviders(providers);
			return new ResponseEntity<>(response, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping("/appointment")
	public ResponseEntity<Appointment> getAppointment(@RequestBody AppointmentInput appointmentdetails) {
		try {
			Appointment appointment = appointmentRepository.getAppointmentById(appointmentdetails.getAppointmentId());
			return new ResponseEntity<>(appointment, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
