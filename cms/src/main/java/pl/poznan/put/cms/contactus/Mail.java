package pl.poznan.put.cms.contactus;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
public class Mail {

    @NotBlank
    private String customerMail;

    @NotNull
    private MailTopic mailTopic;

    @NotBlank
    private String message;
}
