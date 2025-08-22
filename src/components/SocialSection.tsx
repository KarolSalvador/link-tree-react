import { GitHubLogo } from "./GitHubLogo";
import { LinkedInLogo } from "./LinkedinLogo";
import "./social-button.css";
import { SocialButton } from "./SocialButton";
import { WhatsAppLogo } from "./WhatsAppLogo";

export function SocialSection() {
  return (
    <div className="social-links">
      <SocialButton url="https://github.com/KarolSalvador" title="Github">
        <GitHubLogo />
      </SocialButton>
      <SocialButton
        url="https://www.linkedin.com/in/karolsalvador/"
        title="Linkedin"
      >
        <LinkedInLogo />
      </SocialButton>
      <SocialButton url="https://wa.me/5585996742948" title="WhatsApp">
        <WhatsAppLogo />
      </SocialButton>
    </div>
  );
}
