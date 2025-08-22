import "./profile-section.css";
import ProfilePicture from "../assets/profile.jpeg";

export function ProfileSection() {
  return (
    <div className="profile-section">
      <div className="profile-picture">
        <img src={ProfilePicture} alt="Foto de perfil" />
      </div>
      <h1 className="name">Karol Salvador</h1>
      <p className="description">
        Estudante de Análise e Desenvolvimento de Sistemas
      </p>
    </div>
  );
}
