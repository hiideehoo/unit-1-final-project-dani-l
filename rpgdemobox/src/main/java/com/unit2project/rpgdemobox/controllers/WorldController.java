package com.unit2project.rpgdemobox.controllers;

import com.unit2project.rpgdemobox.Repositories.WorldRepository;
import com.unit2project.rpgdemobox.models.World;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/worlds")
public class WorldController {
    private final WorldRepository worldRepository;

    public WorldController(WorldRepository worldRepository) {
        this.worldRepository = worldRepository;
    }

    @GetMapping
    public List<World> getAllWorlds() {
        return worldRepository.findAll();
    }

    @GetMapping("/{id}")
    public World getWorldById(@PathVariable int id) {
        return worldRepository.findById(id).orElse(null);
    }

    @PostMapping
    public World createWorld(@RequestBody World world) {
        return worldRepository.save(world);
    }

    @PutMapping("/{id}")
    public World updateWorld(@PathVariable int id, @RequestBody World updatedWorld) {
        return worldRepository.findById(id).map(world -> {
            world.setItemRender(updatedWorld.getItemRender());
            world.setInvHarold(updatedWorld.getInvHarold());
            return worldRepository.save(world);
        }).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteWorld(@PathVariable int id) {
        worldRepository.deleteById(id);
    }
}
