package com.patientportal.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.patientportal.demo.model.*;

@Repository
public interface ProviderRepository extends JpaRepository<Provider, Long>{
	
	@Query("SELECT p FROM Provider p WHERE p.zipCode = ?1")
	public List<Provider> getProvidersByZip(String zipCode);

}
