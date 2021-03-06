import React from 'react';
import ComponentRegistry from '../componentRegistry';

const layoutRenderer = layoutInfo => {
  const { sections, contexts } = layoutInfo;
  const Section = ComponentRegistry.regions.section;

  return sections.map(section => (
    <Section key={section.id} subsectionInfo={section} contexts={contexts} />
  ));
};

export default layoutRenderer;
