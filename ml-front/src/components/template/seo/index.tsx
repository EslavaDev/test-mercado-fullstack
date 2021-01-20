import React from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
  description: string;
}

export const Seo = ({ title, description }: Props) => {
  return (
    <Helmet
      htmlAttributes={{ lang: 'es' }}
      title={title}
      titleTemplate={`%s | ${title}-ml-front`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          name: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
    />
  );
};
