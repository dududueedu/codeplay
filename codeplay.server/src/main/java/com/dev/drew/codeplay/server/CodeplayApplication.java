package com.dev.drew.codeplay.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CodeplayApplication {

	public static void main(String[] args) {
		SpringApplication.run(CodeplayApplication.class, args);
		System.out.println("*** |codeplay - running server| ***");
	}

}
