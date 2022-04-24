import React, { useEffect, useState } from 'react';
import { Editor } from '@components/editor/Editor';
import { Layout } from '@components/layout/Layout';
import {
  selectThemeFile,
  GenerateHighlight,
  HighlightThemeType,
} from '@lib/themes/HighlightTheme';
import { selectCodeCustomization } from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { useSelector } from 'react-redux';

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  const codeCustomization = useSelector(selectCodeCustomization);
  const [highlightTheme, setHighlightTheme] = useState<HighlightThemeType>();

  useEffect(() => {
    const theme = selectThemeFile(codeCustomization.codeTheme);
    setHighlightTheme(theme);
  }, [codeCustomization.codeTheme]);

  return (
    <Layout
      layoutHeadProps={{
        title: 'Home | Snappy',
        description:
          'Snappy is a simple, fast and powerful code snippet creator.',
        url: 'https://snapify.vercel.app/',
      }}
    >
      {highlightTheme && GenerateHighlight(highlightTheme)}
      <Editor />
    </Layout>
  );
};

export default HomePage;
