package com.patientportal.demo.model;

import java.util.List;

public class AppointmentResponse {
	List<Appointment> appointments;

	public List<Appointment> getAppointments() {
		return appointments;
	}

	public void setAppointments(List<Appointment> appointments) {
		this.appointments = appointments;
	}
}
