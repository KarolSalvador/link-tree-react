import { LinkButton } from "./LinkButton";

export function LinkSection() {
  return (
    <div className="link-section">
      <p>Alguns dos meus projetos</p>
      <LinkButton url="https://github.com/KarolSalvador/JS-Ai-Project">
        Interface Web Integrada com OpenAi e Gemini (HTML5, CSS3, JS )
      </LinkButton>
      <LinkButton url="https://github.com/KarolSalvador/angular-meu-portfolio">
        Portfólio criado em Angular
      </LinkButton>
      <LinkButton url="https://github.com/KarolSalvador/reward_project">
        Recompensa de Pets (C)
      </LinkButton>
      <LinkButton url="https://github.com/KarolSalvador/chronos-pomodoro-react">
        Timer Podomodo (React)
      </LinkButton>
    </div>
  );
}
