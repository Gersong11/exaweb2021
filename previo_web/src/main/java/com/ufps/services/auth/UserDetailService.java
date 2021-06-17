package com.ufps.services.auth;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ufps.entities.Usuario;
import com.ufps.repository.IUsuarioDao;


@Service("userDetailService")
public class UserDetailService implements UserDetailsService {
	
	@Autowired
	private IUsuarioDao usuarioDao;
	

	@Override
	@Transactional(readOnly=true)
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		
//		se utiliza el parametro llamado username, ya que Spring maneja automatico este nombre
		Usuario usuario = usuarioDao.findByEmail(username);
		
		if (usuario == null) {
			throw new UsernameNotFoundException("Usuario: " + username + "No existe en el sistema");
		}
		
		List<GrantedAuthority> rol = new ArrayList<GrantedAuthority>();
        rol.add(new SimpleGrantedAuthority(usuario.getRol().getDescription()));
        
        if(rol.isEmpty()) {
        	throw new UsernameNotFoundException("Error en el Login: usuario '" + username + "' no tiene roles asignados!");
        }
        
        
		return new User(usuario.getEmail(),usuario.getPass(),rol);
	}

	
}
