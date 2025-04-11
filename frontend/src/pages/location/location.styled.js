import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const FilterColumn = styled.div`
  flex: 0 0 300px;
  display: flex;
  flex-direction: column; /* Pour empiler les éléments verticalement */
  gap: 20px; /* Espacement entre les composants dans la colonne */

  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;

export const FilterBox = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-height: 50%; /* Réduire la hauteur à 50% de la colonne */
  overflow-y: auto; /* Ajouter un défilement si le contenu dépasse */
`;

export const AdditionalComponentBox = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1; /* Prend le reste de l'espace dans la colonne */
  overflow-y: auto; /* Ajouter un défilement si nécessaire */
`;

export const LocationsColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;

export const PlaceCardHolder = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0;

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