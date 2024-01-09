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
    <main className="profile">
      <SideBar onEditProfileModal={onEditProfileModal} onLogout={onLogout} />
      <ClothesSection
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
        onCardLike={onCardLike}
      />
    </main>
  );
}

export default Profile;
