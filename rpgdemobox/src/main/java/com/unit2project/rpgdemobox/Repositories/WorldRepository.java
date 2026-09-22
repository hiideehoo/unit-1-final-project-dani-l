package com.unit2project.rpgdemobox.Repositories;

import com.unit2project.rpgdemobox.models.World;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorldRepository extends JpaRepository<World, Integer> {
}
