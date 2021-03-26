package pl.poznan.put.cms.contactus;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/mail")
@Slf4j
public class MailController {

    @PostMapping("/send")
    void sendMail(@RequestBody Mail mail) {
        log.info("Nic nie robię, mail={}", mail);
    }
}
