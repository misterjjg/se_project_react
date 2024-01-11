import "../Profile/Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  clothingItems,
  onSelectCard,
  onCreateModal,
  onEditProfileModal,
  onLogout,
  onCardLike,
}) {
  return (
    <section className="profile">
      <div className="profile__sidebar">
        <SideBar onEditProfileModal={onEditProfileModal} onLogout={onLogout} />
      </div>
      <ClothesSection
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
        onCardLike={onCardLike}
      />
    </section>
  );
}

export default Profile;
