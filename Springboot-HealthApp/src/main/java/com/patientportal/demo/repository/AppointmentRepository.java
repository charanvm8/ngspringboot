package com.patientportal.demo.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.patientportal.demo.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long>{
	
	@Query("SELECT a FROM Appointment a WHERE a.appointmentId = ?1")
	public Appointment getAppointmentById(int appointmentId);
	
	@Query("SELECT a FROM Appointment a WHERE a.userId = ?1")
	public List<Appointment> getUserAppointments(int userId);
}
