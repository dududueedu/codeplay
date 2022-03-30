package com.dev.drew.codeplay.server.config;

import java.util.ArrayList;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.service.VendorExtension;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@Configuration
public class SpringFoxConfig {

	@Bean
	public Docket swagger() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.basePackage("com.dev.drew.codeplay.server"))
				.paths(PathSelectors.any())
				.build()
				.apiInfo(metaDados());
	}
	
	@SuppressWarnings("rawtypes")
	private ApiInfo metaDados() {
		ApiInfo apiInfo = new ApiInfo(
					"API REST - CodePlay",
					"API REST - Cadastro de Questões.",
					"Versão: 1.0",
					"Terms of Service",
					new Contact("Eduardo da Silva Gomes", "https://www.linkedin.com/in/dududueedu/", "eduardooffside@gmail.com"),
					"Apache License Version 2.0",
					"https://www.apache.org/licesen.html", new ArrayList<VendorExtension>()
				);
		return apiInfo;
	}
}
