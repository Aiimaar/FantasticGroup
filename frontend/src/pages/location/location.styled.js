import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  min-height: 100vh; /* Pour s'assurer que la page prend toute la hauteur */

  @media screen and (max-width: 768px) {
    flex-direction: column; /* Empiler verticalement sur mobile */
    padding: 10px;
  }
`;

export const FilterColumn = styled.div`
  flex: 0 0 300px; /* Largeur fixe pour les filtres */
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    flex: 1; /* Prend toute la largeur sur mobile */
  }
`;

export const LocationsColumn = styled.div`
  flex: 1; /* Prend le reste de l'espace */
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;

export const PlaceCardHolder = styled.div`
  display: flex;
  justify-content: flex-start; /* Alignement à gauche dans la colonne */
  padding: 0; /* Supprimer le padding ici, car le conteneur parent gère déjà le padding */

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const NoLocationsMessage = styled.div`
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  padding: 20px;
`;