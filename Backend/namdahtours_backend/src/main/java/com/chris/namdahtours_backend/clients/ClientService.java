package com.chris.namdahtours_backend.clients;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.management.InstanceNotFoundException;
import java.util.List;
import java.util.Optional;

/**
 * Basic CRUD on Client
 */

@Service
@Slf4j
public class ClientService {
    private ClientRepository clientRepository;

    @Autowired
    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    //register(save)
    public String saveClient(Client client){
        if (clientRepository.existsByEmail(client.getEmail())){
            log.error("email already exists");
            return "email already exists";
        }
        if(clientRepository.existsById_number(client.getId_number())){
            log.error("Id number already exists");
            return "id already exists";
        }

        clientRepository.save(client);
        log.info("Client details saved");
        return "client details saved";
    }


    //GET CLIENT
    public Optional<Client> getClient(int client_id){
        log.info("getting client with id: {}", client_id);
        return clientRepository.findById(client_id);
    }


    //GET CLIENTS
    public List<Client> getAllClients(){
        log.info("getting a list of clients");
        return clientRepository.findAll();
    }


    //UPDATE
    public String updateClient(int client_id, int phone_number, String email) throws Exception {
        //get the client
        Client expectedClient = clientRepository.findById(client_id)
                .orElseThrow(()-> new Exception("client not found"));

            Boolean emailExists = clientRepository.existsByEmail(email);
            if (emailExists){
                log.error("client with email already exists");
                throw new Exception("Email exists");
            }else {
                expectedClient.setEmail(email);
            }

        expectedClient.setPhone_number(phone_number);

        clientRepository.save(expectedClient);
        log.info("Client details updated");
        return "Client details updated";
    }


    //DELETE
    public String deleteClient(int id) throws InstanceNotFoundException {
        Boolean isClientPresent = clientRepository.existsById(id);

        if(!isClientPresent){
            log.error("client with id {} not found", id);
            throw new InstanceNotFoundException("client doesnt exist");
        }else {
            clientRepository.deleteById(id);
        }

        log.info("Client deleted");
        return "Client deleted";
    }


}
