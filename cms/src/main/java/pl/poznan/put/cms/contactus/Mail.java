package pl.poznan.put.cms.contactus;

import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@ToString
public class Mail {

    @NotBlank
    private String customerMail;

    @NotNull
    private String mailTopic;

    @NotBlank
    private String message;
}
