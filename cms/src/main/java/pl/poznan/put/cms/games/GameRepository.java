package pl.poznan.put.cms.games;

import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.UUID;

public interface GameRepository extends PagingAndSortingRepository<Game, UUID> {

}
