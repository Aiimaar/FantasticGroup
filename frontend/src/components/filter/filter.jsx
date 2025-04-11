import React from 'react';
import {
  FilterContainer,
  FilterTitle,
  FilterSection,
  FilterSectionTitle,
  FilterItem,
  Checkbox,
  Label,
} from './filter.styled';

const Filter = ({ features, selectedFeatures, onFeatureChange }) => {
  const handleCheckboxChange = (featureId) => {
    if (selectedFeatures.includes(featureId)) {
      onFeatureChange(selectedFeatures.filter(id => id !== featureId));
    } else {
      onFeatureChange([...selectedFeatures, featureId]);
    }
  };

  return (
    <FilterContainer>
      <FilterTitle>Filters</FilterTitle>
      <FilterSection>
        <FilterSectionTitle>Amenities</FilterSectionTitle>
        {features.length > 0 ? (
          features.map(feature => (
            <FilterItem key={`feature-${feature.id}`}>
              <Checkbox
                type="checkbox"
                id={`feature-${feature.id}`}
                checked={selectedFeatures.includes(feature.id)}
                onChange={() => handleCheckboxChange(feature.id)}
              />
              <Label htmlFor={`feature-${feature.id}`}>{feature.name}</Label>
            </FilterItem>
          ))
        ) : (
          <p>No amenities available</p>
        )}
      </FilterSection>
      {/* Add other sections if needed, e.g.: Category */}
    </FilterContainer>
  );
};

export default Filter;