package com.ufps.repository;

import org.springframework.data.repository.CrudRepository;

import com.ufps.entities.Usuario;

public interface IUsuarioDao extends CrudRepository<Usuario, Integer> {

	public Usuario findByEmail(String email);
}
