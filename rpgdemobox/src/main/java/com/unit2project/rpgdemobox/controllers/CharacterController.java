package com.unit2project.rpgdemobox.controllers;

import com.unit2project.rpgdemobox.Repositories.CharacterRepository;
import com.unit2project.rpgdemobox.models.Character;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:5173/", "https://rpgdemobox.netlify.app/"})
@RestController
@RequestMapping("/characters")
public class CharacterController {
    private final CharacterRepository characterRepository;

    public CharacterController(CharacterRepository characterRepository) {
        this.characterRepository = characterRepository;
    }

    @GetMapping
    public List<Character> getAllCharacters() {
        return characterRepository.findAll();
    }

    @GetMapping("/{id}")
    public Character getCharacterById(@PathVariable int id) {
        return characterRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Character createCharacter(@RequestBody Character character) {
        return characterRepository.save(character);
    }

    @PutMapping("/{id}")
    public Character updateCharacter(@PathVariable int id, @RequestBody Character updatedCharacter) {
        return characterRepository.findById(id).map(character -> {
            character.setName(updatedCharacter.getName());
            character.setColor(updatedCharacter.getColor());
            character.setX(updatedCharacter.getX());
            character.setY(updatedCharacter.getY());
            character.setSilver(updatedCharacter.getSilver());
            character.setInv(updatedCharacter.getInv());
            return characterRepository.save(character);
        }).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteCharacter(@PathVariable int id) {
        characterRepository.deleteById(id);
    }
}
