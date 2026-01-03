package com.messagecapsule.controller;

import com.messagecapsule.model.Capsule;
import com.messagecapsule.repository.CapsuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/capsules")
public class CapsuleController {

    @Autowired
    private CapsuleRepository capsuleRepository;

    // 캡슐 생성
    @PostMapping
    public ResponseEntity<Capsule> createCapsule(@RequestBody Capsule capsule) {
        // createdAt, updatedAt 자동 설정
        if (capsule.getCreatedAt() == null) {
            capsule.setCreatedAt(LocalDateTime.now());
        }
        if (capsule.getUpdatedAt() == null) {
            capsule.setUpdatedAt(LocalDateTime.now());
        }
        
        Capsule savedCapsule = capsuleRepository.save(capsule);
        return ResponseEntity.ok(savedCapsule);
    }

    // 모든 캡슐 조회
    @GetMapping
    public ResponseEntity<List<Capsule>> getAllCapsules() {
        List<Capsule> capsules = capsuleRepository.findAll();
        return ResponseEntity.ok(capsules);
    }

    // ID로 캡슐 조회
    @GetMapping("/{id}")
    public ResponseEntity<Capsule> getCapsuleById(@PathVariable String id) {
        return capsuleRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Key로 캡슐 조회
    @GetMapping("/key/{key}")
    public ResponseEntity<Capsule> getCapsuleByKey(@PathVariable String key) {
        return capsuleRepository.findByKey(key)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // 테스트용: 샘플 데이터 생성
    @PostMapping("/test")
    public ResponseEntity<Capsule> createTestCapsule() {
        Capsule capsule = new Capsule();
        capsule.setKey("NY-7F3K2A");
        capsule.setOwnerUserId("507f1f77bcf86cd799439011"); // 예시 ObjectId
        capsule.setTitle("2026 덕담함");
        capsule.setMode("RANDOM_ONE_BY_ONE");
        capsule.setOpenAt(LocalDateTime.parse("2026-02-16T00:00:00"));
        capsule.setStatus("LOCKED");
        capsule.setAllowAnonymous(true);
        capsule.setMaxPerParticipant(1);
        capsule.setCreatedAt(LocalDateTime.parse("2026-01-05T00:00:00"));
        capsule.setUpdatedAt(LocalDateTime.parse("2026-01-05T00:00:00"));
        capsule.setExpiresAt(LocalDateTime.parse("2026-03-02T00:00:00"));
        
        Capsule savedCapsule = capsuleRepository.save(capsule);
        return ResponseEntity.ok(savedCapsule);
    }
}

