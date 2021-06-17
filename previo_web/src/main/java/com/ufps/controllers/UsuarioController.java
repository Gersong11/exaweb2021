package com.ufps.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.support.SessionStatus;

import com.ufps.entities.Usuario;

@Controller
public class UsuarioController {

	@GetMapping("/")
	public String inicio() {
		return "registroUser";
	}
	
	@PostMapping("/registrar")
	public String registrarUsuario(@Valid Usuario usuario,BindingResult result, Model model,
			SessionStatus status) {
		
		if (result.hasErrors()) {
			model.addAttribute("titulo", "Registrar Docente");
			model.addAttribute("usuario", usuario);
			return "registrarDocente";
		}
		
		return "";
	}
}
