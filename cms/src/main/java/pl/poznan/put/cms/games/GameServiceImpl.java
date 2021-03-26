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
    @Transactional
    public void delete(UUID id) {
        gameRepository.deleteById(id);
    }

    @Override
    @Transactional
    public boolean update(UpdateGameRequest request) {
        Optional<Game> gameFromRequest = getGame(request.getId());
        if (gameFromRequest.isPresent()) {
            return true;
        } else {
            return false;
        }
    }

    @Override
    public List<Game> getAllGames() {
        return gameRepository.findAll();
    }

    private Optional<Game> getGame(UUID id) {
        return gameRepository.findById(id);
    }
}
