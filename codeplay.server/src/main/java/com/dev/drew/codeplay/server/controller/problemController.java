package com.dev.drew.codeplay.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dev.drew.codeplay.server.entity.problemEntity;
import com.dev.drew.codeplay.server.repository.problemRepository;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@RequestMapping(value="/api")
@CrossOrigin(origins = "*")
public class problemController {

	@Autowired
	private problemRepository problemRepo;

	@PostMapping("/problem")
	@ApiOperation(value="*** Cadastra um problema ***")
	@ApiResponses(value = {
	    @ApiResponse(code = 201, message = "Problema foi criado!"),
	    @ApiResponse(code = 401, message = "Você não tem autorização para acessar este recurso."),
	    @ApiResponse(code = 403, message = "Você não tem permissão para acessar este recurso."),
	    @ApiResponse(code = 404, message = "Não encontrado."),
	    @ApiResponse(code = 500, message = "Foi gerada uma exceção.")
	})
	public ResponseEntity<?> createProblem(@RequestBody problemEntity problem){
		try {
			problemRepo.save(problem);
			return new ResponseEntity<problemEntity>(problem, HttpStatus.CREATED);
		} catch (Exception error) {
			return new ResponseEntity<>(error.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping("/problem/{id}")
	@ApiOperation(value="*** Deleta um problema ***")
	@ApiResponses(value = {
	    @ApiResponse(code = 200, message = "Problema foi deletado!"),
	    @ApiResponse(code = 401, message = "Você não tem autorização para acessar este recurso."),
	    @ApiResponse(code = 403, message = "Você não tem permissão para acessar este recurso."),
	    @ApiResponse(code = 204, message = "Não encontrado."),
	})
	public ResponseEntity<?> deleteProblemById(@PathVariable("id") String id){
		try {
			problemRepo.deleteById(id);
			return new ResponseEntity<>("Excluido com sucesso!", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
}
