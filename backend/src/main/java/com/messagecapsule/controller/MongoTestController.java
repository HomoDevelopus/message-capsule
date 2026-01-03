package com.messagecapsule.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/test")
public class MongoTestController {

    @Autowired(required = false)
    private MongoTemplate mongoTemplate;

    @GetMapping("/mongo")
    public ResponseEntity<String> testMongoConnection() {
        if (mongoTemplate == null) {
            return ResponseEntity.ok("MongoDB Template not available");
        }

        try {
            // MongoDB 연결 테스트
            String databaseName = mongoTemplate.getDb().getName();
            return ResponseEntity.ok("MongoDB 연결 성공! 데이터베이스: " + databaseName);
        } catch (Exception e) {
            return ResponseEntity.ok("MongoDB 연결 실패: " + e.getMessage());
        }
    }
}

