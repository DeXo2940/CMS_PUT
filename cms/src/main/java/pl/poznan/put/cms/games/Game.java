package pl.poznan.put.cms.games;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
class Game {

    @Id
    @GeneratedValue
    private UUID id;

    @Column(name = "creation_date")
    @CreationTimestamp
    private LocalDateTime creationDate;

    @Column
    @NotBlank
    private String name;

    @Column(name = "release_date")
    @NotNull
    private Integer releaseDate;

    @Column(columnDefinition = "text")
    @NotBlank
    private String description;

    @Column(name = "min_players")
    @Min(1)
    private Integer minPlayerAmount;

    @Column(name = "max_players")
    @Min(1)
    private Integer maxPlayerAmount;

    @Column
    private String link;

    @Column(name = "image")
    private String imageLink;

    static Game of(GameRequest request) {
        return Game.builder()
                .description(request.getDescription())
                .name(request.getName())
                .imageLink(request.getImageLink())
                .releaseDate(request.getReleaseDate())
                .minPlayerAmount(request.getMinPlayerAmount())
                .maxPlayerAmount(request.getMaxPlayerAmount())
                .link(request.getLink())
                .build();
    }
}
