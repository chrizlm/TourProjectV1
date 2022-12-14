package com.chris.namdahtours_backend.clients;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {
    boolean existsById(int id);
    boolean existsByEmail(String email);
}
