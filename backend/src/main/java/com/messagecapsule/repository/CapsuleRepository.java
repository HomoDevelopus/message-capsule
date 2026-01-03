package com.messagecapsule.repository;

import com.messagecapsule.model.Capsule;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CapsuleRepository extends MongoRepository<Capsule, String> {
    Optional<Capsule> findByKey(String key);
    List<Capsule> findByOwnerUserId(String ownerUserId);
    List<Capsule> findByStatus(String status);
}

