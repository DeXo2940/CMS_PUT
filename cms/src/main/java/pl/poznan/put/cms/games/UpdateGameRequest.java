package pl.poznan.put.cms.games;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.UUID;

@AllArgsConstructor
@Getter
@Builder
public class UpdateGameRequest {
    private final UUID id;

    private final String name;

    private final String description;

    private final int releaseDate;

    private final int minPlayerAmount;

    private final int maxPlayerAmount;

    private final String link;

    private final String imageLink;
}
