package pl.poznan.put.cms.games;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface GameService {

    Optional<Game> add(GameRequest request);

    void delete(UUID id);

    boolean update(UpdateGameRequest request);

    List<Game> getAllGames();
}
