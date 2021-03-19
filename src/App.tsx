import React from 'react';
import { FractalAppRoot, PaddingLayer, Text } from 'fractal-ui';

function Content(): JSX.Element {
  return <PaddingLayer>
    <Text variant='title'>Example Title</Text>
  </PaddingLayer>
}

function App() {
  return (
    <FractalAppRoot>
      <Content />
    </FractalAppRoot>
  );
}

export default App;
