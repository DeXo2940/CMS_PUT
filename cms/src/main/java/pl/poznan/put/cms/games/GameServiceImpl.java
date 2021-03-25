package pl.poznan.put.cms.games;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class GameServiceImpl implements GameService {

    private final GameRepository gameRepository;

    @Override
    @Transactional
    public Optional<Game> add(GameRequest request) {
        Game game = Game.of(request);
        return Optional.of(gameRepository.save(game));
    }

    @Override
    public void delete(UUID id) {

    }

    @Override
    public void update(GameRequest request) {

    }

    @Override
    public Optional<Game> getGame(UUID id) {
        return Optional.empty();
    }

    @Override
    public List<Game> getAllGames() {
        return gameRepository.findAll();
    }
}
