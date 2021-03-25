package pl.poznan.put.cms.games;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/game")
@AllArgsConstructor
class GameController {
    private final GameService gameService;

    @GetMapping
    List<Game> getAll() {
        return gameService.getAllGames();
    }

    @PostMapping
    ResponseEntity<Game> addGame(@Valid @RequestBody GameRequest request) {
        Optional<Game> response = gameService.add(request);

        return response.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

}
