package com.ufps.controllers;

import java.security.Principal;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.ufps.entities.Rol;
import com.ufps.entities.Usuario;
import com.ufps.repository.IRoleDao;
import com.ufps.repository.IUsuarioDao;

@Controller
public class UsuarioController {

	@Autowired
	private IUsuarioDao usuarioDao;
	
	@Autowired
	private IRoleDao roleDao;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@GetMapping("/")
	public String inicio() {
		return "registrouser";
	}
	
	@PostMapping("/registrar")
	public String registrarUsuario(@Valid Usuario usuario,BindingResult result, Model model,
			SessionStatus status, @PathVariable int role) {
		
		if (result.hasErrors()) {
			model.addAttribute("titulo", "Registrar usuario");
			model.addAttribute("usuario", usuario);
			return "registraruser";
		}
		
		Rol rol = roleDao.findById(role).orElse(null);
		String bcryptPassword = passwordEncoder.encode(usuario.getPass());
		usuario.setPass(bcryptPassword);
		usuario.setRol(rol);
		usuarioDao.save(usuario);
		status.setComplete();
		
		model.addAttribute("success", "Usuario registrado con exito!");
		
		return "registrouser";
	}
	
	@GetMapping(value = "/login")
	public String login(@RequestParam(value = "error", required = false) String error,
			@RequestParam(value = "logout", required = false) String logout, Model model, Principal principal,
			RedirectAttributes flash) {

		if (principal != null) {
			return "redirect:/";
		}

		if (error != null) {
			model.addAttribute("error", "Nombre de usuario o contraseña incorrecta! "
					+ "(Si esta correcto todo comuniquese con el administrador del sistema)");
		}

		if (logout != null) {
			model.addAttribute("success", "Ha cerrado sesión con éxito!");
		}

		return "login";
	}
	
	@GetMapping("/listar")
	public String listarUsuarios(Model model) {
		model.addAttribute("usuarios", usuarioDao.findAll());
		return "";
	}
	
}
