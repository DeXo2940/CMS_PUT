package pl.poznan.put.cms.games;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface GameService {

    void add(GameRequest request);

    void delete(UUID id);

    void update(GameRequest request);

    Optional<Game> getGame(UUID id);

    List<Game> getAllGames();
}
