package pl.poznan.put.cms.games;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
@Builder
public class GameRequest {

    @NotBlank
    private final String name;

    @NotBlank
    private final String description;

    @NotNull
    private final LocalDateTime releaseDate;

    @Min(1)
    private final int minPlayeramount;

    @Min(1)
    private final int maxPlayerAmount;

    private final String link;

    private final String imageLink;
}
