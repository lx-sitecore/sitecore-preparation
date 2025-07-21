import { JSX } from 'react';
import { Text, RichText, Field } from '@sitecore-jss/sitecore-jss-nextjs';

interface HeaderComponentProps {
  fields: {
    title: Field<string>;
    body: Field<string>;
  };
}

export const Default = (props: HeaderComponentProps): JSX.Element => {
  return (
    <div>
      My most beautiful header component
      <div className="component-content">
        <Text field={props.fields.title}></Text>
        <RichText field={props.fields.body}></RichText>
      </div>
    </div>
  );
};
