package com.unit2project.rpgdemobox.Repositories;

import com.unit2project.rpgdemobox.models.Character;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CharacterRepository extends JpaRepository<Character, Integer> {
}
