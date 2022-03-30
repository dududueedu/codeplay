package com.dev.drew.codeplay.server.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.dev.drew.codeplay.server.entity.problemEntity;

@Repository
public interface problemRepository extends MongoRepository<problemEntity, String> {}