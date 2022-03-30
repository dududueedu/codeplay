package com.dev.drew.codeplay.server.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "problem")
public class problemEntity {
	
	@Id
	private String id;
	
	private String name;
	
	private String description;
	
	private String input;
	
	private String expectedOutput;
	
	public problemEntity() {}
	
	public problemEntity(String id, String name, String description, String input, String expectedOutput) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.input = input;
		this.expectedOutput = expectedOutput;
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getInput() {
		return input;
	}

	public void setInput(String input) {
		this.input = input;
	}

	public String getExpectedOutput() {
		return expectedOutput;
	}

	public void setExpectedOutput(String expectedOutput) {
		this.expectedOutput = expectedOutput;
	}
}
