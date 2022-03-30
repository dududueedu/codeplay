package com.dev.drew.codeplay.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dev.drew.codeplay.server.repository.problemRepository;

import io.swagger.annotations.ApiOperation;

import com.dev.drew.codeplay.server.entity.problemEntity;

@RestController
@RequestMapping(value="/api")
@CrossOrigin(origins = "*")
public class problemController {

	@Autowired
	private problemRepository problemRepo;

	@PostMapping("/problem")
	@ApiOperation(value="*** Cadastra um problema ***")
	public ResponseEntity<?> createProblem(@RequestBody problemEntity problem){
		try {
			problemRepo.save(problem);
			return new ResponseEntity<problemEntity>(problem, HttpStatus.OK);
		} catch (Exception error) {
			return new ResponseEntity<>(error.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
